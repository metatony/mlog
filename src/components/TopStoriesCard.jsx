import React from "react";

const TopStoriesCard = ({blogCount, title, image}) => {
  return (
    <section className="">
      <article className="d-flex flex-row align-items-start justify-content-between ">
        <div className="d-flex flex-row ">
          {/* blog count */}
          <div className="blog-count d-flex align-items-center justify-content-center rounded-circle p-1">
            {blogCount}
          </div>

          {/* blog description and date */}
          <div className="blog-description ms-3 ">
            <h4 className="blog-description-title fw-normal lh-sm">{title}</h4>
            <p className="blog-description-date fw-light">John Smith • 24 January, 2023</p>
          </div>
        </div>

        {/* blog image */}
        <img
          width={100}
          height={100}
          src={image}
          alt="fictional landscape images"
          className="rounded-2"
        />
      </article>
      <hr className="border-line border-1 " />
    </section>
  );
};

export default TopStoriesCard;
