import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

function removeMarkdownLinksFromContent(content: string): string {
  return content.slice(0, 300).replace(/\[(.+?)\]\(.+?\)/g, "$1");
}

function getReadingTimeFromContent(content: string): string {
  const wpm = 240;
  const words = content.trim().split(/\s+/).length;
  const timeInMinutes = Math.ceil(words / wpm);

  return `${timeInMinutes} min`;
}

function prettyPrintDate(date: string = "2021-09-01"): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [year, month, day] = date.split("-");

  return `${months[parseInt(month) - 1]} ${day}, ${year}`;
}
export interface BlogPost {
  slug: string;
  content: string;
  title: string;
  preview: string;
  date: string;
  prettyDate: string;
  readingTime: string;
  author: {
    name: string;
    twitter: string;
    image: string;
  };

  coverImageUnsplashId: string;
  coverImagePhotographerName: string;
  project: "nowcasting" | "open-energy" | "pv-mapping";
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    content,
    prettyDate: prettyPrintDate(data.date),
    readingTime: getReadingTimeFromContent(content),
    preview: removeMarkdownLinksFromContent(content),
    ...data,
  } as BlogPost;
}

export function getPostsByProject(project: string) {
  const files = fs.readdirSync(postsDirectory);

  return files
    .reduce((allPosts: BlogPost[], postSlug: string): BlogPost[] => {
      let post = getPostBySlug(postSlug);

      if (post.project === project) {
        return [post, ...allPosts];
      } else {
        return [...allPosts];
      }
    }, [])
    .slice(0, 3); // TODO: Add a scroll and then load all of them
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
