import React from "react";
import PageBanner from "../components/Common/PageBanner";
import NavbarDark from "../components/Layouts/NavbarDark";
import FooterDark from "../components/Layouts/FooterDark";
import ServiceStyleTwoWebApp from "../components/HomePages/ItAgency/ServiceStyleTwo-Web-Application";
import ServiceDetailsContentWebApplication from "../components/Services/ServiceDetailsContentWebApplication";
import CtaAreaTwoWebApp from "../components/Common/CtaAreaTwoWebApp";


const ServiceDetails = () => {
  return (
    <>
    
      <NavbarDark/>
      <PageBanner pageTitle="Website Development " BGImage="/images/page-banner-web.jpg" />
      <div className="bg-1F1F22">
      <ServiceStyleTwoWebApp/>
      <ServiceDetailsContentWebApplication />
      <CtaAreaTwoWebApp />
      </div>
      <FooterDark/>
    </>
  );
};

export default ServiceDetails;
