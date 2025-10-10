import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useContentful from "../../custom-hooks/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
      <section>
        <div className="mb-4 text-center">
          <h1 className="card-title">{blogPage?.title}</h1>
        </div>
        <div className="d-sm-none">
          <img
            className="rounded-2"
            src={blogPage?.featuredImage}
            height={"auto"}
            width={"100%"}
            alt=""
          />
        </div>
        <div className="mt-5 mt-sm-0">
          <p className="card-description fs-4 fw-light lh-base">
            {documentToReactComponents(blogPage?.richText)}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Blog;
