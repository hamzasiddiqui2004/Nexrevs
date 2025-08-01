import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="cs-choose-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="cs-choose-content"
                data-aos="fade-up" // Animation for content: fade in from right
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <span className="sub-title">WHY CHOOSE US</span>
                <h3>
                  Nexrevs: Improve with Quality, Dynamic Development, Proven Excellence.
                </h3>

                <ul className="list">
                  <li>
                    <i className="fa-solid fa-check"></i> Flexible Development: We welcome agility in our development procedures, which permits quick and flexible adjustments to changing project needs, guaranteeing the best results and client satisfaction.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Past Track Record: Nexrevs has a track record of completing software projects successfully. Join a group of happy customers who have worked with us to achieve software development excellence.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Global Expertise: Nexrevs's multinational strategy leverages a variety of viewpoints to make sure your software is designed with a global audience in mind.
                  </li>
                </ul>

                <div className="choose-btn">
                  <Link href="/contact" className="default-btn-two">
                    Get Started <i className="fa-solid fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="cs-choose-image"
                data-aos="fade-down" // Animation for image: fade in from left
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <img src="/images/cyber-security/choose.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
