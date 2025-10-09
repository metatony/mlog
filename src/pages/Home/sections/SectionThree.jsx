import React, { useEffect, useState } from "react";
import BlogPostsCard from "../../../components/BlogPostsCard";
import useContentful from "../../../custom-hooks/useContentful";

const SectionThree = () => {
  const [data, setData] = useState([]);
  const { getBlogPosts } = useContentful();

  useEffect(() => {
    getBlogPosts().then((response) => setData(response));
  }, []);

  return (
    <section className="container mt-5">
      <section className="row row-cols-1 row-cols-md-2 g-4">
        {data.slice(4).map(function (item) {
          return (
            <BlogPostsCard
              key={item?.id}
              title={item?.title}
              slug={item?.slug}
              date={item?.date}
              featuredImage={item?.featuredImage}
            />
          );
        })}
      </section>
    </section>
  );
};

export default SectionThree;
