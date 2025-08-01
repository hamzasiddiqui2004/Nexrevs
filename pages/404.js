import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ErrorContent from "../components/Error/ErrorContent";
import Footer from "../components/Layouts/Footer";
import NavbarDark from "../components/Layouts/NavbarDark";
import FooterDark from "../components/Layouts/FooterDark";

const Error = () => {
  return (
    <>
      {/* <NavbarTwo /> */}
      <NavbarDark/>

      <PageBanner pageTitle="404 Error" BGImage="/images/page-banner3.jpg" />
      <div className="bg-1F1F22">
      <ErrorContent />
</div>
      {/* <Footer /> */}
      <FooterDark/>
    </>
  );
};

export default Error;
