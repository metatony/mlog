import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useContentful from "../../custom-hooks/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SEO from "../../components/SEO";

const Blog = () => {
  const [data, setData] = useState([]);
  const { getBlogPosts } = useContentful();
  const { id } = useParams();

  useEffect(() => {
    getBlogPosts().then((response) => setData(response));
  }, []);

  const blogPage = data.find((item) => item.id.toString() === id);

  return (
    <main className="container my-5">
      <SEO
        title={`${blogPage?.title} | MetatonyVerse Blog`}
        description={blogPage?.slug}
        name="MetatonyVerse"
        type="article"
      />
      <section className="d-flex flex-column">
        <div className="mb-4 text-center">
          <h1 className="card-title lh-lg ">{blogPage?.title}</h1>
        </div>
        <div className="d-sm-none featured-image-container overflow-hidden rounded-2 ">
          <img
            className="d-sm-none featured-image"
            src={blogPage?.featuredImage}
            alt={blogPage?.title + " image"}
          />
        </div>
        <div className="blog-page-description fw-light lh-lg mt-5 mt-sm-0">
          {documentToReactComponents(blogPage?.richText)}
        </div>
      </section>
    </main>
  );
};

export default Blog;
