import React from "react";
import { placeholder6, placeholder7 } from "../../../constants/images";
import BlogPostsCard from "../../../components/BlogPostsCard";

const SectionThree = () => {
  return (
    <section className="container gap-5 mt-5">
      <section className="row row-cols-1 row-cols-md-2">
        <BlogPostsCard
          title={"The Pulse of the City Unfolds on the Fast Lanes"}
          description={
            "Embark on an exhilarating ride through the bustling urban highways, where the rhythm of the city echoes in the hum of engines and the dazzling lights of the skyline."
          }
          author={"Candice Wu • 15 Jan 2022"}
          image={placeholder6}
        />
        <BlogPostsCard
          title={"A Cosmic Adventure Underneath the Starlit Canopy"}
          description={
            "Embark on an extraordinary odyssey as we merge the realms of mankind, automotive marvels, and the awe-inspiring Milky Way. Join us on a celestial journey through the cosmos"
          }
          author={"Alec Whitten • 17 Jan 2022"}
          image={placeholder7}
        />
      </section>
    </section>
  );
};

export default SectionThree;
