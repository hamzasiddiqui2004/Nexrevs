import React from "react";

import PageBanner from "../components/Common/PageBanner";
import PortfolioDetailsContent2 from "../components/Portfolio/PortfolioDetailsContent2";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";

import NavbarDark from "../components/Layouts/NavbarDark";
import FooterDark from "../components/Layouts/FooterDark";
import WebDevelopmentPortfolioDetailsContent from "../components/Portfolio/WebDevelopmentPortfolioDetailsContent";
// import DigitalMarketPortfolioDetailsContent from "../components/Portfolio/DigitalMarketPortfolioDetailsContent";

const PortfolioDetails2 = () => {
  return (
    <>
   <NavbarDark/>

      <PageBanner 
      // pageTitle="UX for Mobile Apps"
      pageTitle="Web Development"
      
      BGImage="/images/page-banner2.jpg" />
      <div className="bg-1F1F22">
      <WebDevelopmentPortfolioDetailsContent />
      <CtaAreaTwo />
</div>
     <FooterDark/>
    </>
  );
};

export default PortfolioDetails2;
