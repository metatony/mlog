import React from "react";
import "./layout.css";

const About = () => {
  return (
    <section className="about-section fw-light text-center d-flex flex-column justify-content-center align-items-center">
      <p className="">
        Thanks for checking me out 😉 <br /> GGs -{" "}
        <a
          className="text-black"
          target="_blank"
          href="https://github.com/metatony"
          rel=" noopener noreferrer "
        >
          Metatony
        </a>
      </p>
    </section>
  );
};

export default About;
