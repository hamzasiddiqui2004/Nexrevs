import React from "react";
import PageBanner from "../components/Common/PageBanner";
import NavbarDark from "../components/Layouts/NavbarDark";
import FooterDark from "../components/Layouts/FooterDark";

import ServiceStyleTwoDigitalMarketing from "../components/HomePages/ItAgency/ServiceStyleTwo-Digital-Marketing";
import ServiceDetailsContentDigitalMarket from "../components/Services/ServiceDetailsContentDigitalMarket.js";
import CtaAreaTwoDigitalMarket from "../components/Common/CtaAreaTwoDigitalMarket.js";


const ServiceDetails = () => {
  return (
    <>
    
      <NavbarDark/>
      <PageBanner pageTitle="Digital Marketing" BGImage="/images/page-banner-digital-marketing.jpg" />
      <div className="bg-1F1F22">
      <ServiceStyleTwoDigitalMarketing/>
      <ServiceDetailsContentDigitalMarket />
      <CtaAreaTwoDigitalMarket />
      </div>
      <FooterDark/>
    </>
  );
};

export default ServiceDetails;
