import React from "react";
import Link from "next/link";

const AboutContent = () => {
  return (
    <>
      <div className="cs-about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="cs-about-image"
                data-aos="fade-right" // Animation for image: fade in from right
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src="/images/cyber-security/about.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="cs-about-content"
                data-aos="fade-left" // Animation for content: fade in from left
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <span className="sub-title">ABOUT US</span>
                <h3>
                  Nexrevs, <span>Transforming Ideas </span> into Experiences.
                </h3>
                <p>
                  Welcome to Nexrevs, a worldwide strength for design where innovation grows. We create engaging digital experiences and brand aesthetics as a global branding agency. Nexrevs develops a captivating brand narrative and improves your online presence with inspiration from around the world and powerful storytelling.
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="cs-about-card">
                      <div className="icon">
                        <i className="fa fa-trophy" aria-hidden="true"></i>
                      </div>
                      <h4>Vision</h4>
                      <p>
                        Nexrevs: Creating Digital Excellence, Inspiring Technological Advancement.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-lg-6 col-sm-6">
                    <div className="cs-about-card">
                      <div className="icon">
                        <i className="fa-solid fa-shield"></i>
                      </div>
                      <h4>Mission</h4>
                      <p>
                        Nexrevs: Dedicated to Crafting Solutions that Inspire and Propel Businesses Forward.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="about-btn">
                  <Link href="/contact" className="default-btn-two">
                    Get Started <i className="fa-solid fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
