import React, { useEffect, useState } from "react";
import TopStoriesCard from "../../../components/TopStoriesCard";
import FeaturedStoryCard from "../../../components/FeaturedStoryCard";
import useContentful from "../../../custom-hooks/useContentful";

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
    <section className="container gap-5 ">
      <div className="row row-cols-1 row-cols-md-2">
        <FeaturedStoryCard
          title={data[0]?.title}
          slug={data[0]?.slug}
          featuredImage={data[0]?.featuredImage}
        />

        <div className="col d-flex flex-column gap-2 gap-md-3 mt-3 mt-md-0">
          <h3 className="h2">Top Stories</h3>

          {/* columns */}
          {data.slice(1, 4).map(function (item, i) {
            return (
              <TopStoriesCard
                key={item?.id}
                title={item?.title}
                date={formatDate(item?.date)}
                index={i}
                featuredImage={item?.featuredImage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
