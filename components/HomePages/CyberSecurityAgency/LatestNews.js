import React from "react";
import Link from "next/link";

const latestNewsData = [
  {
    title: "Graphic Designer",
    shortText:
      "Graphic design brilliance at Nexrevs – where innovation meets graphic artistry.",
    date: "17th January 2023",
    comment: "0",
    authorImg: "/images/cyber-security/user1.jpg",
    authorName: "Thomas Adison",
    designation: "Content Writing",
    blogDetailsLink: "/blog-details",
    tag: "MEMBER",
    aosDelay: "100",
  },
  {
    title: "Digital Marketer",
    shortText:
      "Fueling success through strategic digital marketing at Nexrevs – where campaigns thrive.",
    date: "18th January 2023",
    comment: "2",
    authorImg: "/images/cyber-security/user2.jpg",
    authorName: "James Anderson",
    designation: "Content Writing",
    blogDetailsLink: "/blog-details",
    tag: "MEMBER",
    aosDelay: "200",
  },
  {
    title: "Website Developer",
    shortText:
      "Hey Weaving digital wonders: I design and develop extraordinary websites at Nexrevs.",
    date: "19th January 2023",
    comment: "5",
    authorImg: "/images/cyber-security/user3.jpg",
    authorName: "Sarah Taylor",
    designation: "Content Writing",
    blogDetailsLink: "/blog-details",
    tag: "MEMBER",
    aosDelay: "300",
  },
  // ------------------------------------------------

  {
    title: "UI/UX",
    shortText:
      "Nexrevs excels in UI/UX design. Elevating user experiences through intuitive, visually striking interfaces",
    date: "19th January 2023",
    comment: "5",
    authorImg: "/images/cyber-security/user3.jpg",
    authorName: "Sarah Taylor",
    designation: "Content Writing",
    blogDetailsLink: "/blog-details",
    tag: "MEMBER",
    aosDelay: "300",
  },
  {
    title: "Animator",
    shortText:
      "Nexrevs's animation service is phenomenal. Bringing ideas to life with creativity and precision",
    date: "19th January 2023",
    comment: "5",
    authorImg: "/images/cyber-security/user3.jpg",
    authorName: "Sarah Taylor",
    designation: "Content Writing",
    blogDetailsLink: "/blog-details",
    tag: "MEMBER",
    aosDelay: "300",
  },
  {
    title: "App Developer",
    shortText:"Elevating user experiences: I am the app maestro at Nexrevs.",
    date: "19th January 2023",
    comment: "5",
    authorImg: "/images/cyber-security/user3.jpg",
    authorName: "Sarah Taylor",
    designation: "Content Writing",
    blogDetailsLink: "/blog-details",
    tag: "MEMBER",
    aosDelay: "300",
  },
];

const LatestNews = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title white-color">
            {/* <span className="sub-title">Our Team</span> */}
            {/* <h2>
              Explore, Learn And Stay <span>Up To Date</span> With The Latest In
              Cyber
            </h2> */}
            <h2>Our Team</h2>
          </div>

          <div className="row justify-content-center">
            {latestNewsData &&
              latestNewsData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="cs-blog-card with-black-color">
                    <div className="tag">
                      <span>{value.tag}</span>
                    </div>

                    <ul className="post-meta">
                      <li>
                        {/* <i className="fa-solid fa-calendar-days"></i>{" "} */}
                        {/* {value.date} */}
                      </li>
                      <li>
                        {/* <i className="fa-solid fa-comment"></i>  */}
                        {/* {value.comment} comment */}
                      </li>
                    </ul>

                    <h3>
                      <Link href={value.blogDetailsLink}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>

                    <div className="info">
                      {/* <img src={value.authorImg} alt="image" /> */}
                      <h3>{value.authorName}</h3>
                      {/* <span>{value.designation}</span> */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
