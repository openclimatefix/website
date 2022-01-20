import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import BlogPostsTeaser from "../../components/blog-posts-teaser";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import Newsletter from "../../components/newsletter";
import Pattern from "../../components/pattern";
import { getAllPosts, BlogPost } from "../../lib/blog";

const BlogIndexPage = ({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="bg-white">
      <Head>
        <title>Open News | Open Climate Fix</title>
        {/* <meta property="og:title" content="My page title" key="title" /> */}
      </Head>
      <Navigation />

      <section className="container relative px-4 mx-auto sm:p-0 mb-36">
        {/* <Pattern /> */}
        <h2 className="relative text-5xl font-light text-center mt-14 text-ocf-black-100 mb-28">
          Open News
        </h2>
        <BlogPostsTeaser allPosts={allPosts} />
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogIndexPage;

interface Props {
  allPosts: BlogPost[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};
