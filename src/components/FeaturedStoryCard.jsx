import React from "react";
import { placeholder1, placeholder2 } from "../constants/images";

const FeaturedStoryCard = () => {
  return (
    <article class="d-flex flex-column gap-2 gap-md-3 col">
      <img src={placeholder1} alt="mount fiji tower with beautiful blue sky" className="d-none d-md-block rounded-2" />
      <img src={placeholder2} alt="mount fiji tower with beautiful blue sky" className="d-block d-md-none rounded-2" />
      <p className="card-header fw-semibold">TRAVEL</p>
      <h2 className="card-title lh-sm">
        Unveiling the Majestic Beauty of Mount Fuji
      </h2>
      <p className="card-description fw-light">
        A journey to Japan’s Iconic Symbol and natural wonder. Discover the rich
        history, breathtaking landscapes, and cultural significance of this
        iconic landmark
      </p>
    </article>
  );
};

export default FeaturedStoryCard;

// display-4 display-md-5