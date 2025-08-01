import React from "react";

import PageBanner from "../components/Common/PageBanner";
import PortfolioDetailsContent2 from "../components/Portfolio/PortfolioDetailsContent2";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";

import NavbarDark from "../components/Layouts/NavbarDark";
import FooterDark from "../components/Layouts/FooterDark";

const PortfolioDetails2 = () => {
  return (
    <>
   <NavbarDark/>

      <PageBanner 
      pageTitle="UX for Mobile Apps"
      
      BGImage="/images/page-banner2.jpg" />
      <div className="bg-1F1F22">
      <PortfolioDetailsContent2 />

      <CtaAreaTwo />
</div>
     <FooterDark/>
    </>
  );
};

export default PortfolioDetails2;
