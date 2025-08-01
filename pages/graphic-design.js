import React from "react";
import PageBanner from "../components/Common/PageBanner";
import NavbarDark from "../components/Layouts/NavbarDark";
import FooterDark from "../components/Layouts/FooterDark";
import ServiceStyleTwoGraphicDesign from "../components/HomePages/ItAgency/ServiceStyleTwoGraphicDesign";
import ServiceDetailsContentGraphicDesign from "../components/Services/ServiceDetailsContent-Graphic-Design";
import CtaAreaTwoGraphicDesign from "../components/Common/CtaAreaTwoGraphicDesign";


const ServiceDetails = () => {
  return (
    <>
    
      <NavbarDark/>

      <PageBanner pageTitle="Graphic Design" BGImage="/images/inspiration-ideas-design-creative-thinking-word.png" />
      <div className="bg-1F1F22">
     
      <ServiceStyleTwoGraphicDesign/>
      <ServiceDetailsContentGraphicDesign/>
    
      <CtaAreaTwoGraphicDesign />
      </div>


      <FooterDark/>
    </>
  );
};

export default ServiceDetails;
