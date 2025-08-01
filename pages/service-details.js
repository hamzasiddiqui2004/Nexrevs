import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";

import ServiceStyleTwo from "../components/HomePages/ItAgency/ServiceStyleTwo";
import NavbarDark from "../components/Layouts/NavbarDark";
import FooterDark from "../components/Layouts/FooterDark";


const ServiceDetails = () => {
  return (
    <>
    
      <NavbarDark/>
      <PageBanner pageTitle="Mobile App Development" BGImage="/images/page-banner1.jpg" />
      <div className="bg-1F1F22">
      <ServiceStyleTwo/>
      <ServiceDetailsContent />
      <CtaAreaTwo />
      </div>
      <FooterDark/>
    </>
  );
};

export default ServiceDetails;
