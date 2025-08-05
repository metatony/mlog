import React from "react";
import "./layout.css";

import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";

const Layout = () => {
  return (
    <section className="">
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
