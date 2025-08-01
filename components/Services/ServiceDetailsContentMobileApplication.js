import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const ServiceDetailsContentMobileApplication = () => {
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
            {/* mobiles */}
            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc" >
                <h2 style={{ color: "#ffffff" }}>Services Description</h2>
                <p style={{ color: "#ffffff" }}>
                  Nexrevs's Application Development Services go beyond mere coding – we architect digital solutions that fuel your business growth.


                </p>

                <h2 style={{ color: "#ffffff" }}>User-Centric Design</h2>
                <p style={{ color: "#ffffff" }}>
                  Our design philosophy revolves around enhancing user experiences. We meticulously craft interfaces that are not just visually appealing but also intuitively navigable, ensuring your audience stays engaged.</p>

                <h2 style={{ color: "#ffffff" }}>Technology Stack Expertise</h2>
                <p style={{ color: "#ffffff" }}>

                  Stay ahead in the tech landscape with Nexrevs. Our developers are proficient in the latest technologies and frameworks, ensuring your applications are built using cutting-edge tools for optimal performance and future scalability.

                </p>
                <h2 style={{ color: "#ffffff" }}>Integration Capabilities</h2>
                <p style={{ color: "#ffffff" }}>
                  Seamlessly integrate your applications with existing systems or third-party services. Nexrevs's development team specializes in creating cohesive ecosystems, enhancing the overall functionality and efficiency of your digital infrastructure.

                </p>
                <h2 style={{ color: "#ffffff" }}>Data Security</h2>
                <p style={{ color: "#ffffff" }}>
                  Security is non-negotiable. Nexrevs prioritizes robust data protection measures throughout the development process. From secure login protocols to encrypted transactions, your users' data is safeguarded at every touchpoint.
                </p>
                <h2 style={{ color: "#ffffff" }}>Scalability and Future-Proofing</h2>
                <p style={{ color: "#ffffff" }}>
                  Your business is dynamic, and so should be your applications. Nexrevs designs scalable solutions that can evolve with your growing needs, ensuring your investment stands the test of time in a rapidly changing technological landscape.
                </p>
                <h2 style={{ color: "#ffffff" }}>Security Assurance</h2>
                <p style={{ color: "#ffffff" }}>
                  Your website's security is our priority. From secure payment gateways to data protection measures, we implement robust security protocols to safeguard your online presence.

                  Embark on a digital journey with Nexrevs, where every line of code is a step towards your online success. Let our website development services be the cornerstone of your digital strategy, turning visitors into customers and ideas into reality."
                </p>


              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
                <h3 style={{ color: "#ffffff" }}>Our Working Process</h3>
                <ol style={{ color: "#ffffff" }}>
                  <li>
                    <h4 style={{ color: "#ffffff" }}>Discovery And Analysis</h4>
                    <ul>
                      <li>Comprehensive consultation to understand your business objectives and requirements.</li>
                      <li> In-depth market research to identify target audience and competition.</li>

                    </ul>
                  </li>

                  <li>
                    <h4 style={{ color: "#ffffff" }}>Planning And Strategy</h4>
                    <ul>
                      <li>
                        Formulation of a strategic development roadmap, including feature prioritization.

                      </li>
                      <li>
                        Definition of the app architecture, technology stack, and scalability considerations.

                      </li>
                    </ul>
                  </li>

                  <li>
                    <h4 style={{ color: "#ffffff" }}>Design Prototyping</h4>
                    <ul>
                      <li>
                        Creation of wireframes and design prototypes for user interface (UI) and user experience (UX) evaluation.
                      </li>
                      <li>Collaboration with clients for feedback and refinement of the design concepts.</li>
                    </ul>
                  </li>

                  <li>
                    <h4 style={{ color: "#ffffff" }}>Development Kickoff</h4>
                    <ul>
                      <li>
                        Agile development methodology implementation to ensure flexibility and adaptability.

                      </li>

                      <li>Regular sprints with iterative coding, continuous integration, and version control.
                      </li>

                    </ul>
                  </li>

                  <li>
                    <h4 style={{ color: "#ffffff" }}>Testing And Quality Assurance</h4>
                    <ul>
                      <li>
                      Rigorous testing throughout development phases to identify and address bugs.
                      </li>
                      <li>
                      Performance testing, security assessments, and compatibility checks across devices.
                      </li>
                       </ul>
                  </li>

                  <li>
                    <h4 style={{ color: "#ffffff" }}>Client Collaboration:</h4>
                    <ul>
                      <li>
                      Regular updates and demos for client feedback and insights
                      </li>
                      <li>
                      Transparent communication to address any modifications or adjustments promptly
                      </li>
                       </ul>
                  </li>

                  <li>
                    <h4 style={{ color: "#ffffff" }}>Deployment</h4>
                    <ul>
                      <li>
                      Seamless deployment of the application on the desired platform(s).

                      </li>
                      <li>
                      Monitoring and addressing any issues during the initial launch phase.

                      </li>
                       </ul>
                  </li>

                  <li>
                    <h4 style={{ color: "#ffffff" }}>Post-Launch Support</h4>
                    <ul>
                      <li>
                      Ongoing support to address post-launch issues or implement additional features.
                      </li>
                      <li>
                      Monitoring user feedback for continuous improvement opportunities.
                      </li>
                       </ul>
                  </li>

                  
                  <li>
                    <h4 style={{ color: "#ffffff" }}>Maintenance and Updates</h4>
                    <ul>
                      <li>Proactive monitoring for potential issues.

                      </li>
                      <li>Regular updates and maintenance to adapt to evolving technology and user needs.

                      </li>
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

export default ServiceDetailsContentMobileApplication;
