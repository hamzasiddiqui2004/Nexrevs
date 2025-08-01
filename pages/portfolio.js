import React from "react";

import PageBanner from "../components/Common/PageBanner";
import WorksStyleOne from "../components/Portfolio/WorksStyleOne";

import CtaAreaTwo from "../components/Common/CtaAreaTwo";

import NavbarDark from "../components/Layouts/NavbarDark";
import FooterDark from "../components/Layouts/FooterDark";

const Portfolio = () => {
  return (
    <>
 
      <NavbarDark/>
      <PageBanner pageTitle="Our Portfolio" BGImage="/images/page-banner3.jpg" />
      <WorksStyleOne />
      <div className="bg-1F1F22">
      <CtaAreaTwo />
 </div>
      <FooterDark/>
    </>
  );
};

export default Portfolio;
