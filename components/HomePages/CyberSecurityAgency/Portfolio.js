import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const portfolioData = [
  {
    image: "/images/cyber-security/Group.png",
 
  },
  {
    image: "/images/cyber-security/Frame.png",
   
  },
  {
    image: "/images/cyber-security/Frame1.png",
   
  },
  {
    image: "/images/cyber-security/Frame2.png",
  
  },
  {
    image: "/images/cyber-security/Capture.png",
   
  },
];

const Portfolio = () => {
  return (
    <>
      <div className="cs-feedback-area pb-100">
        <div className="container">
          <div className="section-title white-color">
            <span className="sub-title">Portfolio</span>
            <h2>
              These People Have <span>Already</span> Experienced Our Review
            </h2>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 2,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="cs-feedback-slides"
          >
            {portfolioData &&
              portfolioData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="cs-single-feedback with-black-color">
                  
                  <img src={value.image} alt="image" />

                  
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="cs-feedback-line-bg">
          <img src="/images/cyber-security/line-bg.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
