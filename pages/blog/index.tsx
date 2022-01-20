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
        <h2 className="relative z-20 mt-20 text-3xl font-semibold leading-tight text-center text-ocf-black-100 md:text-6xl sm:text-5xl lg:text-7xl lg:font-bold text-shadow sm:leading-tight lg:leading-tight">
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
