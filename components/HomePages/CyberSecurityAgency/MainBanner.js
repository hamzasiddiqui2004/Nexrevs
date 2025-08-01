import React, { useState, useEffect, useRef } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);

  // Auto Play Video
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl.current.play().catch(error => {
      console.error("Error attempting to play", error);
    });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="cs-banner-section">
        <div className="bg-video">
          <video autoPlay muted loop ref={videoEl}>
            <source src="/video/2615119_Visualization_Virtual World_Virtual Reality_3840x2160.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="cs-banner-content">
                <span className="sub-title" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                  {/* No #1 Cyber Security Company Of The World */}
                </span>
                <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                  We Are Providing Best IT Services
                </h1>
                <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
                  "Step into a world of unparalleled IT expertise, where our commitment to delivering the best isn't just a claim – it's a dedication to weaving the perfect technological tapestry for your business success. Your journey to excellence starts here."
                </p>
                <ul className="banner-btn" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                  <li>
                    <Link href="/contact" className="default-btn-two">
                      Contact Us <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li>
                    <div onClick={() => setToggler(!toggler)} className="video-btn">
                      {/* <i className="fa-solid fa-play"></i> */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="cs-banner-image" data-aos="fade-right" data-aos-duration="1200">
                <img src="/images/cyber-security/banner/main.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
        {/* Shape Images */}
        <div className="cs-banner-shape">
          <img src="/images/cyber-security/banner/shape.png" alt="image" />
        </div>
        {/* <div className="cs-lock">
          <img src="/images/cyber-security/banner/lock.png" alt="image" />
        </div> */}
      </div>
    </>
  );
};

export default MainBanner;
