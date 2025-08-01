import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const ServiceDetailsContentDigitalMarket = () => {
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
                {/* <h2 style={{color:"#ffffff"}}>Services Description</h2> */}


                <h2 style={{color:"#ffffff"}}>Strategic Planning</h2>

                <p style={{color:"#ffffff"}}>
Begin your digital journey with a customized strategy. We analyze your market, identify opportunities, and devise a plan that aligns with your business objectives.</p>

  <h2 style={{color:"#ffffff"}}>Search Engine Optimization (SEO)</h2>
  <p style={{color:"#ffffff"}}>
Elevate your online visibility with our SEO expertise. We optimize your digital presence to rank higher on search engines, driving organic traffic and enhancing your brand's discoverability.
</p>
<h2 style={{color:"#ffffff"}}>Social Media Management</h2>
<p style={{color:"#ffffff"}}>
Engage and connect with your audience on a personal level. Our social media management services ensure your brand remains dynamic, relevant, and actively participates in online conversations.
</p>
<h2 style={{color:"#ffffff"}}>Content Marketing</h2>
<p style={{color:"#ffffff"}}>
Craft compelling narratives that resonate. Our content marketing strategies not only tell your story but also establish your brand as an authority in your industry, driving customer loyalty and engagement.
</p>

<h2 style={{color:"#ffffff"}}>Pay-Per-Click (PPC) Campaigns</h2>
<p style={{color:"#ffffff"}}>Leverage targeted advertising to reach the right audience at the right time. Our PPC campaigns maximize ROI, driving traffic, conversions, and ensuring your ad spend delivers measurable results.</p>

<h2 style={{color:"#ffffff"}}>Analytics and Performance Tracking</h2>
 
<p style={{color:"#ffffff"}}>Data is the heartbeat of successful digital marketing. Nexrevs employs robust analytics tools to monitor performance, derive insights, and continually refine strategies for optimal results.
Embark on a digital transformation with Nexrevs - where every click, like, and share contributes to your brand's success. Let our digital marketing services be the driving force behind your online triumph, turning virtual engagements into tangible business outcomes</p>
              

               
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
                <h3 style={{color:"#ffffff"}}>Our Working Process</h3>
                <ol style={{color:"#ffffff"}}>
                <li> 
                  <h4 style={{color:"#ffffff"}}>Consultation and Needs Assessment</h4>
                   <ul>
                  <li>Initiate with a thorough discussion to understand your business goals, target audience, and specific digital marketing needs.</li>
                 </ul>
                  </li>
              

                  <li> 
                  <h4 style={{color:"#ffffff"}}>Market Analysis</h4>
                   <ul>
                  <li>Conduct in-depth market research to identify trends, opportunities, and key competitors.</li>
                  {/* <li>Analyze the digital landscape to tailor strategies that align with your industry.</li> */}
                
                 </ul>
                  </li>
                  <li> 
                  <h4 style={{color:"#ffffff"}}>Strategic Planning</h4>
                   <ul>
                  <li>Develop a customized digital marketing strategy that integrates SEO, social media, content marketing, and other relevant channels.</li>
                {/* <li>Set measurable goals and key performance indicators (KPIs) to track success.</li> */}
                 </ul>
                  </li>
                  <li> 
                  <h4 style={{color:"#ffffff"}}>Implementation</h4>
                   <ul>
                  <li>Execute the planned strategies across selected digital channels.</li>
                {/* <li>
                Optimize website content, implement SEO techniques, and set up social media accounts or advertising campaigns as needed
                </li> */}
                 </ul>
                  </li>
                  <li> 
                  <h4 style={{color:"#ffffff"}}>Content Creation and Marketing</h4>
                   <ul>
                  <li>Develop engaging and relevant content tailored to your target audience</li>
               {/* <li>
               Implement content marketing strategies to distribute content across various channels, enhancing brand visibility and authority.
               </li> */}
                 </ul>
                  </li> 
                  <li> 
                  <h4 style={{color:"#ffffff"}}>Social Media Management</h4>
                   <ul>
                  <li>Actively manage and monitor social media accounts.</li>
                 {/* <li>
                 Create and curate content, engage with followers, and analyze performance metrics for continuous improvement
                 </li> */}
                 </ul>
                  </li>


                  <li> 
                  <h4 style={{color:"#ffffff"}}>SEO Optimization</h4>
                   <ul>
                  <li> Implement on-page and off-page SEO techniques to improve search engine rankings</li>
                {/* <li>
                Regularly analyze and adapt strategies based on evolving search engine algorithms.
                </li> */}
                 </ul>
                  </li>
                  <li> 
                  <h4 style={{color:"#ffffff"}}>Paid Advertising (if applicable)</h4>
                   <ul>
                  <li>Develop and execute targeted PPC campaigns for optimal reach and conversion.
</li>
{/* <li>
Monitor and adjust advertising strategies based on performance data
</li> */}
                 </ul>
                  </li>
                  <li> 
                  <h4 style={{color:"#ffffff"}}>Analytics and Reporting</h4>
                   <ul>
                  <li>Utilize analytics tools to track and analyze performance across all digital marketing channels</li>
                {/* <li>Generate regular reports outlining key insights and areas for improvement.</li> */}
                 </ul>
                  </li>
                  <li> 
                  <h4 style={{color:"#ffffff"}}>Client Collaboration</h4>
                   <ul>
                  <li>
                  Regular updates and strategy reviews to ensure alignment with business goals
                  </li>
                  {/* <li>
                  Collaborate on adjustments and refinements based on client feedback and evolving market conditions.
                  </li> */}
                 </ul>
                  </li>
                  <li> 
                  <h4 style={{color:"#ffffff"}}>Continuous Optimization</h4>
                   <ul>
                  <li>
                  Implement continuous optimization based on data-driven insights.
                  </li>
                  {/* <li>
                  Stay agile, adapting strategies to meet changing market dynamics and emerging opportunities.
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

export default ServiceDetailsContentDigitalMarket;
