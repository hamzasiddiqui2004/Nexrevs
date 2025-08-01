import React from "react";

import PageBanner from "../components/Common/PageBanner";

import CtaAreaTwo from "../components/Common/CtaAreaTwo";

import NavbarDark from "../components/Layouts/NavbarDark";
import FooterDark from "../components/Layouts/FooterDark";
import GraphicDesignPortfolioDetailsContent from "../components/Portfolio/GraphicDesignPortfolioDetailsContent";

const PortfolioDetails2 = () => {
  return (
    <>
   <NavbarDark/>

      <PageBanner 
      // pageTitle="UX for Mobile Apps"
      pageTitle="Graphic Designing"
      
      BGImage="/images/page-banner2.jpg" />
      <div className="bg-1F1F22">
      <GraphicDesignPortfolioDetailsContent />
      <CtaAreaTwo />
</div>
     <FooterDark/>
    </>
  );
};

export default PortfolioDetails2;
