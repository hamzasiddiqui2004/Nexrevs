import React from "react";
import PageBanner from "../components/Common/PageBanner";
import NavbarDark from "../components/Layouts/NavbarDark";
import FooterDark from "../components/Layouts/FooterDark";
import ServiceStyleTwoMobileApp from "../components/HomePages/ItAgency/ServiceStyleTwo-Mobile-Application";
import ServiceDetailsContentMobileApplication from "../components/Services/ServiceDetailsContentMobileApplication";
import CtaAreaTwoMobileApp from "../components/Common/CtaAreaTwoMobileApp";


const ServiceDetails = () => {
  return (
    <>
    
      <NavbarDark/>
      <PageBanner pageTitle="Mobile App Development" BGImage="/images/page-banner-app.jpg" />
      <div className="bg-1F1F22">
      <ServiceStyleTwoMobileApp/>
      <ServiceDetailsContentMobileApplication />
      <CtaAreaTwoMobileApp />
      </div>
      <FooterDark/>
    </>
  );
};

export default ServiceDetails;
