import React, { useEffect, useState } from "react";
import TopStoriesCard from "../../../components/TopStoriesCard";
import FeaturedStoryCard from "../../../components/FeaturedStoryCard";
import useContentful from "../../../custom-hooks/useContentful";
import { Link } from "react-router";

const SectionTwo = () => {
  const [data, setData] = useState([]);
  const { getBlogPosts } = useContentful();

  function formatDate(dateString) {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateString));
  }

  useEffect(() => {
    getBlogPosts().then((response) => setData(response));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 align-items-start">
      {/* Featured Article Section */}
      <article className="col" role="article">
        <h2 className="visually-hidden" id="featured-content">Featured Story</h2>
        <Link to={`/blog/${data[0]?.id}`} className="text-decoration-none" aria-label={`Read featured article: ${data[0]?.title}`}>
          <FeaturedStoryCard
            key={data[0]?.id}
            title={data[0]?.title}
            slug={data[0]?.slug}
            featuredImage={data[0]?.featuredImage}
          />
        </Link>
      </article>

      {/* Top Stories Section */}
      <aside className="col d-flex flex-column mt-5 mt-sm-0" role="complementary">
        <h2 className="card-title mb-4 mb-sm-3 fw-medium" id="top-stories">Top Stories</h2>
        
        <nav aria-labelledby="top-stories" role="navigation">
          {data.slice(1, 4).map(function (item, i) {
            return (
              <Link
                to={`/blog/${item.id}`}
                className="text-decoration-none"
                key={item?.id}
                aria-label={`Read article: ${item?.title}`}
              >
                <TopStoriesCard
                  title={item?.title}
                  date={formatDate(item?.date)}
                  index={i}
                  featuredImage={item?.featuredImage}
                />
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
};

export default SectionTwo;
