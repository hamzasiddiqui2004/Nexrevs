import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";
import NavbarDark from "../components/Layouts/NavbarDark";
import FooterDark from "../components/Layouts/FooterDark";

const Contact = () => {
  return (
    <>
      {/* <NavbarTwo /> */}
      <NavbarDark/>

      <PageBanner pageTitle="Contact Us" BGImage="/images/page-banner1.jpg" />
      <div className="bg-1F1F22">
      <ContactInfo />

  
      <ContactForm/>

      <div className="ptb-100">
        <Newsletter />
      </div>
      </div>
      {/* <Footer /> */}
      <FooterDark/>
    </>
  );
};

export default Contact;
