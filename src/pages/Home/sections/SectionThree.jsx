import React, { useEffect, useState } from "react";
import BlogPostsCard from "../../../components/BlogPostsCard";
import useContentful from "../../../custom-hooks/useContentful";
import { Link } from "react-router";

const SectionThree = () => {
  const [data, setData] = useState([]);
  const { getBlogPosts } = useContentful();

  useEffect(() => {
    getBlogPosts().then((response) => setData(response));
  }, []);

  return (
    <div className="mt-5">
      <h2 className="visually-hidden" id="more-articles">More Articles</h2>
      
      <div className="row row-cols-1 row-cols-md-2 g-4" role="list" aria-labelledby="more-articles">
        {data.slice(4).map(function (item) {
          return (
            <article className="col" key={item?.id} role="listitem">
              <Link 
                to={`/blog/${item.id}`} 
                className="text-decoration-none"
                aria-label={`Read article: ${item?.title}`}
              >
                <BlogPostsCard
                  title={item?.title}
                  slug={item?.slug}
                  date={item?.date}
                  featuredImage={item?.featuredImage}
                />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default SectionThree;
