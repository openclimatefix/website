import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

interface BlogPost {
  slug: string;
  content: string;
  title: string;
  path: string;
  date: string;
  authorName: string;
  authorTwitter: string;
  authorImage: string;
  coverImageUnsplashId: string;
  coverImagePhotographerName: string;
  project: string;
}

export type PartialBlogPostWithSlugAndDate = Partial<BlogPost> &
  Pick<BlogPost, "date" | "slug">;

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(
  slug: string,
  fields: (keyof BlogPost)[] = []
): PartialBlogPostWithSlugAndDate {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  let items: PartialBlogPostWithSlugAndDate = {
    date: data.date,
    slug: realSlug,
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "content") {
      items = {
        ...items,
        content,
      };
    }

    if (typeof data[field] !== "undefined") {
      items = {
        ...items,
        [field]: data[field],
      };
    }
  });

  return items;
}

export function getAllPosts(
  fields: (keyof BlogPost)[] = []
): PartialBlogPostWithSlugAndDate[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
