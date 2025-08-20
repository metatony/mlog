import React from "react";
import TopStoriesCard from "../../../components/TopStoriesCard";
import FeaturedStoryCard from "../../../components/FeaturedStoryCard";
import {
  placeholder3,
  placeholder4,
  placeholder5,
} from "../../../constants/images";

const SectionTwo = () => {
  return (
    <section className="container gap-5 ">
      <div className="row row-cols-1 row-cols-md-2">
        <FeaturedStoryCard />

        <div className="col d-flex flex-column gap-2 mt-3 mt-md-0">
          <h3 className="h2">Top Stories</h3>

          {/* columns */}
          <TopStoriesCard
            blogCount={1}
            title="Mountains and Boat: A Perfect Harmony"
            image={placeholder3}
          />
          <TopStoriesCard
            blogCount={2}
            title="Unveiling the Timeless Charm of Old Street Buildings"
            description={""}
            image={placeholder4}
          />
          <TopStoriesCard
            blogCount={3}
            title="Whispering Trees and the Enchanting Moon"
            description={""}
            image={placeholder5}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
