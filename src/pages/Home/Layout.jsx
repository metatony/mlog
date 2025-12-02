import React from "react";
import "./layout.css";

import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";
import SEO from "../../components/SEO";

const Layout = () => {
  return (
    <section className="container">
      <SEO
        title="Stories & Ideas | MetatonyVerse"
        description="A mix of my thoughts on coding, animes, movies, and sharing stories and ideas from my journey."
        name="MetatonyVerse"
        type="website"
      />
      {/* section header */}
      <SectionOne />

      {/* section grid */}
      <SectionTwo />

      {/* section 3 grid */}
      <SectionThree />
    </section>
  );
};

export default Layout;
