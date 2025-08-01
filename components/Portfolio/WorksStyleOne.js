import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const ourWorksData = [
  {
    image: "/images/cyber-security/Group.png",
    title: "Designing a better cinema experience",
    category: "Digital Marketing",
    viewDetails: "/portfolio-DigitalMarket-details",
  },
  {
    image: "/images/cyber-security/Capture.png",
    title: "Building design process within teams",
    category: "Web Development",
    viewDetails: "/portfolio-web-development-details/",
  },
  {
    image: "/images/cyber-security/Frame.png",
    title: "How intercom brings play into their design process",
    category: "App Development",
    viewDetails: "/portfolio-app-development-details",
  },
  {
    image: "/images/cyber-security/Frame1.png",
    title: "Stuck with to-do list, I created a new app for myself",
    category: "Graphic Design",
    viewDetails: "/portfolio-graphic-design-details",
  },
  // {
  //   image: "/images/works/work5.jpg",
  //   title: "Examples of different types of sprints",
  //   category: "Marketing & Reporting",
  //   viewDetails: "/portfolio-details",
  // },
  // {
  //   image: "/images/works/work6.jpg",
  //   title: "Redesigning the New York times app",
  //   category: "App Development",
  //   viewDetails: "/portfolio-details",
  // },
  // {
  //   image: "/images/works/work7.jpg",
  //   title: "Design the Web, Mobile, and eCommerce",
  //   category: "SEO Optimization",
  //   viewDetails: "/portfolio-details",
  // },
  // {
  //   image: "/images/works/work8.jpg",
  //   title: "Redesigning the New York times app",
  //   category: "Digital Marketing",
  //   viewDetails: "/portfolio-details",
  // },
  // {
  //   image: "/images/works/work9.jpg",
  //   title: "We provide any type of app development",
  //   category: "App Development",
  //   viewDetails: "/portfolio-details",
  // },
  // {
  //   image: "/images/works/work10.jpg",
  //   title: "We provide any type of marketing support",
  //   category: "SEO Marketing",
  //   viewDetails: "/portfolio-details",
  // },
  // {
  //   image: "/images/works/work11.jpg",
  //   title: "We provide any type of Email Marketing",
  //   category: "Email Marketing",
  //   viewDetails: "/portfolio-details",
  // },
  // {
  //   image: "/images/works/work12.jpg",
  //   title: "We provide any type of Marketing & Reporting",
  //   category: "Marketing & Reporting",
  //   viewDetails: "/portfolio-details",
  // },
];

const WorksStyleOne = () => {

  return (
    <>
       <div className="bg-1F1F22"  style={{color:"white"}}>
      <div className="case-studies-area ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <h2  style={{color:"white"}}>Our Projects</h2>
            <p  style={{color:"white"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            cssMode={true}
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1800: {
                slidesPerView: 5,
              },
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="work-slides"
          >
            {ourWorksData &&
              ourWorksData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="work-card">
                    <img src={value.image} alt="image" />

                    <div className="content text-center">
                      <span>
                        <Link href={value.viewDetails}>{value.category}</Link>
                      </span>

                      <h3>
                        <Link href={value.viewDetails}>{value.title}</Link>
                      </h3>

                      <Link href={value.viewDetails} className="custom-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      </div>
    </>
  );
};

export default WorksStyleOne;
