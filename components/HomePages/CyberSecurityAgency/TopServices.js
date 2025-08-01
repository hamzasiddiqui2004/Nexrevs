import React from "react";
import Link from "next/link";

const topServicesData = [
  {
    image: "/images/cyber-security/features/features-1.jpg",
    title: "Your Requirements",
    shortText:
      "Your vision is the cornerstone of our creative process. By sharing your project requirements with us, you take the first step towards turning your ideas into a reality. Our experienced team is here to listen, understand, and collaborate with you closely. Let's start this exciting journey together – provide your project details, and we'll transform your vision into a digital masterpiece",
    btnText: "GET STARTED",
    btnLink: "/service-details/",
    bgIconName: "fa-solid fa-lock",
    aosDelay: "100",
    aosAnimation: "fade-right", // Add animation property
  },
  {
    image: "/images/cyber-security/features/features-2.jpg",
    title: "Our Creativity",
    shortText:
      "Step into the realm of creativity with us. Our design team is ready to transform your ideas into stunning visuals that leave a lasting impression. We're dedicated to excellence, crafting designs that not only meet but exceed your expectations. Let's collaborate and bring your brand to life through innovative concepts and captivating aesthetics.",
    btnText: "GET STARTED",
    btnLink: "/service-details/",
    bgIconName: "fa-solid fa-cloud",
    aosDelay: "200",
    aosAnimation: "fade-left", // Add animation property
  },
  {
    image: "/images/cyber-security/features/features-3.jpg",
    title: "Develop & Launch",
    shortText:
      "At Nexrevs, we specialize in turning visions into reality through expert development. Our team's code craftsmanship ensures that your digital solutions are not just functional but also cutting-edge. We're passionate about crafting digital experiences that meet your unique needs and exceed your expectations.Ready for Takeoff: Unveil Your Digital Triumph",
    btnText: "GET STARTED",
    btnLink: "/service-details/",
    bgIconName: "fa-solid fa-shield",
    aosDelay: "300",
    aosAnimation: "fade-up", // Add animation property
  },
];

const TopServices = () => {
  return (
    <>
      <div className="cs-features-area">
        <div className="container-fluid">
          <div className="row justify-content-center">
            {topServicesData &&
              topServicesData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-sm-6 p-0" key={i}>
                  <div
                    className="cs-features-item"
                    style={{
                      backgroundImage: `url(${value.image})`,
                    }}
                    data-aos={value.aosAnimation} // Use animation property
                    data-aos-duration="1200"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="content">
                      <h3>{value.title}</h3>
                      <p>{value.shortText}</p>
                      <Link href={value.btnLink} className="get-started-btn">
                        {value.btnText}
                      </Link>
                    </div>
                    <div className="bg-icon">
                      <i className={value.bgIconName}></i>
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

export default TopServices;
