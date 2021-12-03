import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import React from "react";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import Newsletter from "../../components/newsletter";
import { getAllPosts, PartialBlogPostWithSlugAndDate } from "../../lib/blog";

const BlogIndexPage = ({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="bg-white">
      <Navigation />
      <section className="container px-4 mx-auto sm:p-0 mb-36">
        <h2 className="relative z-20 text-5xl font-light mt-14 text-ocf-black-100">
          Open News
        </h2>
        <article className="mx-auto mt-10 prose mb-36">
          <ul>
            {allPosts.map(({ title, slug }) => (
              <li key={slug}>
                <Link href={`/blog/${slug}`}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogIndexPage;

interface Props {
  allPosts: PartialBlogPostWithSlugAndDate[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "authorName"]);

  return {
    props: { allPosts },
  };
};
