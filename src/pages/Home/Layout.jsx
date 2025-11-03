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
        title="Stories & Ideas | Metatony Blog"
        description="Discover stories, ideas, and insights on travel, culture, and more—all in one place."
        name="Metatony Blog"
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
