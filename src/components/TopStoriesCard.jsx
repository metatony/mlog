import React from "react";

const TopStoriesCard = (props) => {
  return (
    <div className="">
      <div className="d-flex flex-row align-items-start justify-content-between ">
        <div className="d-flex flex-row ">
          {/* blog count */}
          <div className="blog-count d-flex align-items-center justify-content-center rounded-circle p-1">
            {props.blogCount}
          </div>

          {/* blog description and date */}
          <div className="blog-description ms-3 ">
            <p className="blog-description-title fw-normal lh-sm">{props.title}</p>
            <p className="blog-description-date fw-light">John Smith • 24 Jan 2023</p>
          </div>
        </div>

        {/* blog image */}
        <img
          width={100}
          height={100}
          src={props.image}
          alt=""
          className="rounded-2"
        />
      </div>
      <hr className="border-line border-1 " />
    </div>
  );
};

export default TopStoriesCard;
