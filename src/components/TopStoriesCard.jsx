import React from "react";

const TopStoriesCard = ({ title, featuredImage, date, index }) => {
  const blogCount = index + 1;

  return (
    <section className="">
      <article className="d-flex flex-row align-items-start justify-content-between gap-3">
        <div className="d-flex flex-row gap-3">
          {/* blog count */}
          <div className="blog-count d-none align-items-center justify-content-center rounded-circle">
            {blogCount}
          </div>

          {/* blog description and date */}
          <div className="blog-description">
            <h4 className="blog-description-title fw-normal lh-lg">{title}</h4>
            <p className="blog-description-date fw-light ">Metatony • {date}</p>
          </div>
        </div>

        {/* blog image */}
        <img
          src={featuredImage}
          alt={title + " image"}
          className="rounded-2 thumbnail-image"
        />
      </article>
      <hr className="border-line border-1 " />
    </section>
  );
};

export default TopStoriesCard;
