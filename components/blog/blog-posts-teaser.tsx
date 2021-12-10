import Link from "next/link";
import { BlogPost } from "../../lib/blog";

interface IBlogPostsTeaser {
  allPosts: BlogPost[];
  isProjectSpecificTeaser?: boolean;
}

function prettyPrintProjectTag(project: string): string {
  if (!project) {
    return "Other";
  }

  return project
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const BlogPostsTeaser = ({
  allPosts,
  isProjectSpecificTeaser = false,
}: IBlogPostsTeaser) => {
  return (
    <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-6xl">
      {allPosts.map((post) => (
        <Link href={`/blog/${post.slug}`}>
          <a
            key={post.title}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg"
          >
            <div className="flex-shrink-0">
              <img
                className="object-cover w-full h-48"
                src={`https://source.unsplash.com/${post.coverImageUnsplashId}/624x384`}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex-1">
                {!isProjectSpecificTeaser && (
                  <p className="text-sm font-medium text-yellow-600">
                    <a href="#" className="hover:underline">
                      {prettyPrintProjectTag(post.project)}
                    </a>
                  </p>
                )}
                <div className="mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500 line-clamp-3">
                    {post.preview}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <span className="sr-only">{post.author.name}</span>
                  <img
                    className="w-10 h-10 rounded-full"
                    src={post.author.image}
                    alt={`Picture of the author ${post.author.name}`}
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {post.author.name}
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.date}>{post.prettyDate}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default BlogPostsTeaser;
