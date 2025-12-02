import React from "react";
import "./about.css";
import SEO from "../../components/SEO";

const About = () => {
  return (
    <main className="about-section fw-light text-center d-flex flex-column justify-content-center align-items-center">
      <SEO
        title="About | MetatonyVerse"
        description="Thanks for checking me out 😉. You can also follow me on Github to see more of my work."
        name="MetatonyVerse"
        type="website"
      />
      <p className="card-description ">
        Thanks for checking me out 😉 <br /> GitHub -{" "}
        <a
          className="text-decoration-none"
          target="_blank"
          href="https://github.com/metatony"
          rel=" noopener noreferrer "
        >
          Metatony
        </a>
      </p>
    </main>
  );
};

export default About;
