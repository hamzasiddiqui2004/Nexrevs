import React from "react";
import Link from "next/link";

const servicesData = [
  {
    icon: "/images/cyber-security/services/services-1.png",
    title: "Web Development",
    shortText:
    "Nexrevs: Crafting exceptional websites that elevate your brand. Expert development, innovation, and client-centric solutions for online success.",
    serviceDetailsLink: "/service-details/",
    aosDelay: "100",
    aosAnimation: "fade-right", // Add animation property
  },
  {
    icon: "/images/cyber-security/services/services-2.png",
    title: "Digital Marketing Services",
    shortText:
    "Nexrevs: Elevate your brand with strategic digital marketing solutions. Drive growth, engage audiences, and dominate online.",
    serviceDetailsLink: "/service-details/",
    aosDelay: "200",
    aosAnimation: "fade-down", // Add animation property
    // aosAnimation: "fade-right", // Add animation property
  },
  {
    icon: "/images/cyber-security/services/services-3.png",
    title: "Mobile App Development",
    shortText:
    "Nexrevs: Elevate your brand with expert application development. Innovative solutions, tailored to your needs, delivered with excellence.",
    serviceDetailsLink: "/service-details/",
    aosDelay: "300",
    aosAnimation: "fade-up", // Add animation property
  },
  {
    icon: "/images/cyber-security/services/services-4.png",
    title: "Graphic Designing",
    shortText:
      "Nexrevs: Where Imagination Meets Design Excellence. Captivating logos, brand visuals, and graphics for an unforgettable brand presence.",
    serviceDetailsLink: "/service-details/",
    aosDelay: "400",
    aosAnimation: "fade-down", // Add animation property
  },
  
];

const Services = () => {
  return (
    <>
      <div className="cs-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title white-color">
            <span className="sub-title">OUR SERVICES</span>
            <h2>
            We Take Pride In What We Do. Our Services Are Designed To Help Your Business Stand Out And Turn Your Ideas Into Digital Realities.
              </h2>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 8).map((value, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <div
                    className="cs-services-card text-center"
                    data-aos={value.aosAnimation} // Use animation property
                    data-aos-duration="1200"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="image">
                      <img src={value.icon} alt="image" />
                    </div>
                    <h3>
                      <Link href={value.serviceDetailsLink}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
