import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import {
  getPostBySlug,
  getAllPosts,
  PartialBlogPostWithSlugAndDate,
} from "../../lib/blog";
import ReactMarkdown from "react-markdown";
import { ParsedUrlQuery } from "querystring";
import React from "react";

import mappingBackground from "../../public/backgrounds/mapping.jpg";
import PageHeader from "../../components/pageHeader";
import Newsletter from "../../components/newsletter";
import Footer from "../../components/footer";

const BlogPostPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="bg-white">
      <PageHeader
        bgImage={mappingBackground}
        title={post.title || "Loading"}
        teaserText={post.authorName || "Loading"}
      />

      <section className="container px-4 mx-auto sm:p-0 mb-36">
        <article className="mx-auto mt-10 prose mb-36">
          {router.isFallback ? (
            <h1>Loading...</h1>
          ) : (
            <div className="prose bg-white">
              <ReactMarkdown>{post.content!}</ReactMarkdown>
            </div>
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
  post: PartialBlogPostWithSlugAndDate;
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const post = getPostBySlug(params!.slug, [
    "title",
    "date",
    "slug",
    "authorName",
    "content",
    "coverImageUnsplashId",
    "coverImagePhotographerName",
  ]);

  return {
    props: {
      post,
    },
  };
};

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

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
