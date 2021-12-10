import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import BlogPostsTeaser from "../../components/blog/blog-posts-teaser";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import Newsletter from "../../components/newsletter";
import { getAllPosts, BlogPost } from "../../lib/blog";

const BlogIndexPage = ({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="bg-white">
      <Navigation />
      <section className="container px-4 mx-auto sm:p-0 mb-36">
        <h2 className="relative z-20 text-5xl font-light text-center mt-14 text-ocf-black-100 mb-28">
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
