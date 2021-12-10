import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getPostBySlug, getAllPosts, BlogPost } from "../../lib/blog";
import ReactMarkdown from "react-markdown";
import { ParsedUrlQuery } from "querystring";
import React from "react";

import Newsletter from "../../components/newsletter";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";

const BlogPostPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="bg-white">
      <Navigation />
      <section className="container px-4 mx-auto sm:p-0 mb-36">
        <article className="max-w-[65ch] mx-auto mt-16 mb-36">
          {router.isFallback ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <div className="mb-8 prose">
                <h1>{post.title}</h1>
              </div>
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <span className="sr-only">{post.author.name}</span>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={post.author.image}
                    alt={`Picture of the author ${post.author.name}`}
                  />
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">
                    {post.author.name}
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.date}>{post.prettyDate}</time>
                    <span aria-hidden="true">&middot;</span>
                    <a
                      href={`https://twitter.com/${post.author.twitter}`}
                      className="hover:underline"
                    >
                      @{post.author.twitter}
                    </a>
                  </div>
                </div>
              </div>
              <div className="prose">
                <img
                  src={`https://source.unsplash.com/${post.coverImageUnsplashId}/624x384`}
                  alt=""
                />
                <ReactMarkdown>{post.content!}</ReactMarkdown>
              </div>
            </>
          )}
        </article>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogPostPage;

type Props = {
  post: BlogPost;
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const post = getPostBySlug(params!.slug);

  return {
    props: {
      post,
    },
  };
};

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
