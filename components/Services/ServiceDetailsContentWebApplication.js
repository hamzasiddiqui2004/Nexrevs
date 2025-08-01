import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const ServiceDetailsContentWebApplication = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-12 col-md-12">
              <div className="services-details-image">
                <img src="/images/services/single-service.jpg" alt="image" />

                <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div> */}

<div className="col-lg-8 col-md-12">
              <div className="services-details-desc" >
                <h2 style={{color:"#ffffff"}}>Services Description</h2>
                <p style={{color:"#ffffff"}}>
                At Nexrevs, we go beyond creating websites; we architect online experiences that leave a lasting impression. 
</p>

<h2 style={{color:"#ffffff"}}>Tailored Solutions</h2>
  <p style={{color:"#ffffff"}}>
Our website development services are tailored to your unique needs. Whether you're a startup, a growing business, or an established enterprise, we have the expertise to build a website that reflects your brand identity and resonates with your target audience.
</p>

<h2 style={{color:"#ffffff"}}>Responsive Design</h2>
  <p style={{color:"#ffffff"}}>
In an era of diverse devices, we prioritize responsive design. Your website will seamlessly adapt to various screen sizes, ensuring an optimal user experience across desktops, tablets, and mobiles.
</p>
<h2 style={{color:"#ffffff"}}>E-commerce Excellence</h2>
  <p style={{color:"#ffffff"}}>
Unlock the full potential of online retail with our e-commerce development expertise. We build secure, user-friendly platforms that facilitate smooth transactions, enhance customer engagement, and drive sales.
</p>
<h2 style={{color:"#ffffff"}}>Content Management Systems (CMS)</h2>
  <p style={{color:"#ffffff"}}>
Take control of your content with user-friendly CMS solutions. Update and manage your website effortlessly, with our support and guidance ensuring you make the most of these powerful tools.
</p>
<h2 style={{color:"#ffffff"}}>Scalability and Performance</h2>
  <p style={{color:"#ffffff"}}>

We design websites with scalability in mind, ensuring they can grow with your business. Our focus on performance optimization guarantees fast loading times and a smooth browsing experience for your visitors.
</p>
<h2 style={{color:"#ffffff"}}>Security Assurance</h2>
  <p style={{color:"#ffffff"}}>
Your website's security is our priority. From secure payment gateways to data protection measures, we implement robust security protocols to safeguard your online presence.

Embark on a digital journey with Nexrevs, where every line of code is a step towards your online success. Let our website development services be the cornerstone of your digital strategy, turning visitors into customers and ideas into reality."
                </p>

          
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
                <h3 style={{color:"#ffffff"}}>Our Working Process</h3>
                <ol style={{color:"#ffffff"}}>
                  <li> 
                  <h4 style={{color:"#ffffff"}}>Client Consultation</h4>
                   <ul>
                  <li>Initiate with a comprehensive discussion to understand your business goals, target audience, and specific website requirements.</li>
                 </ul>
                  </li>
              
                  <li> 
                  <h4 style={{color:"#ffffff"}}>Trategic Planning</h4>
                   <ul>
                  <li>Develop a tailored roadmap outlining the website's structure, features, and functionalities.
</li>
                  {/* <li>Identify key performance indicators (KPIs) to measure success</li> */}
                 </ul>
                  </li>

                  <li> 
                  <h4 style={{color:"#ffffff"}}>Design Prototyping</h4>
                   <ul>
                  <li>Create wireframes and design prototypes for user interface (UI) and user experience (UX) evaluation</li>
                {/* <li>Collaborate with clients to gather feedback and refine design concepts.</li> */}
                 </ul>
                  </li>

                  <li> 
                  <h4 style={{color:"#ffffff"}}>Development Kickoff</h4>
                   <ul>
                  <li> Implement agile development methodologies for flexibility and adaptability</li>
                {/* <li>Regular sprints, continuous integration, and version control ensure a smooth development process.</li> */}
                 </ul>
                  </li>

                  <li> 
                  <h4 style={{color:"#ffffff"}}>Responsive Design</h4>
                   <ul>
                  <li>
                  Prioritize responsive design to ensure optimal user experience across various devices and screen sizes. </li>
                  {/* <li>Test and optimize for performance on desktops, tablets, and mobiles.</li> */}
                 </ul>
                  </li>

                  <li> 
                  <h4 style={{color:"#ffffff"}}>Content Integration</h4>
                   <ul>
                  <li>
                  Seamlessly integrate compelling and SEO-friendly content into the website.
                  </li>
                  {/* <li>
                  Implement Content Management Systems (CMS) for easy content updates.
                  </li> */}
                 </ul>
                  </li>
                  <li> 
                  <h4 style={{color:"#ffffff"}}>E-commerce Implementation (if applicable)</h4>
                   <ul>
                  <li>Develop secure and user-friendly e-commerce platforms</li>
                  {/* <li>Integrate payment gateways and implement robust transactional processes.
</li> */}
                 </ul>
                  </li>
                  <li> 
                  <h4 style={{color:"#ffffff"}}>Testing and Quality Assurance:</h4>
                   <ul>
                  <li>
                  Rigorous testing for functionality, performance, and security.

                  </li>
                  {/* <li> Address and resolve any bugs or issues identified during the testing phase. </li> */}
                 </ul>
                  </li>


                  <li> 
                  <h4 style={{color:"#ffffff"}}>Client Collaboration:</h4>
                   <ul>
                  <li>Regular updates and demos to gather client feedback</li>
                 {/* <li>Transparent communication to accommodate any modifications or adjustments promptly.</li> */}
                 </ul>
                  </li>

                  <li> 
                  <h4 style={{color:"#ffffff"}}>Deployment</h4>
                   <ul>
                  <li>Seamlessly deploy the website on the desired hosting platform.</li>
                  {/* <li>Monitor and address any issues during the initial launch phase.</li> */}
                 </ul>
                  </li>
                  <li> 
                  <h4 style={{color:"#ffffff"}}>Post-Launch Support</h4>
                   <ul>
                  <li>Provide ongoing support to address post-launch issues or implement additional features</li>
                  {/* <li>
                  Monitor user feedback for continuous improvement opportunities.
                  </li> */}
                 </ul>
                  </li>

                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContentWebApplication;
