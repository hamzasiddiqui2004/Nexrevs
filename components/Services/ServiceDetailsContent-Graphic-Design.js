import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const ServiceDetailsContentGraphicDesign = () => {
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
                <h2 style={{color:"#ffffff"}}>Description</h2>

                <p style={{color:"#ffffff"}}>
                {/* Immerse your audience in a visually engaging experience with our meticulous attention to detail. Our graphic design services extend to creating compelling infographics, packaging designs, and promotional materials. We understand the importance of cohesive design across various platforms, ensuring a seamless and recognizable brand presence. With a focus on user experience, our designs are not just aesthetically pleasing but strategically crafted to enhance engagement. Collaborate with us to transform your ideas into a visual masterpiece and leave a lasting impression on your target audience. */}
                Nexrevs is more than a design studio; we are curators of visual storytelling, providing a spectrum of creative services that breathe life into your brand and ideas.
</p>
<h2 style={{color:"#ffffff"}}>Graphic Design</h2>

  <p style={{color:"#ffffff"}}>
Our graphic design services transcend traditional boundaries, crafting visuals that speak volumes. From logo creation to marketing collateral, we blend creativity with strategy to leave an indelible mark on your audience.
</p>

<h2 style={{color:"#ffffff"}}>UI/UX Design </h2>
  <p style={{color:"#ffffff"}}>
In the digital realm, first impressions matter. Nexrevs specializes in creating user-centric interfaces that marry aesthetics with functionality. Elevate your digital presence with designs that seamlessly guide users through an engaging and intuitive journey.
</p>

<h2 style={{color:"#ffffff"}}>2D & 3D Animation</h2>
  <p style={{color:"#ffffff"}}>
Transform your narratives into dynamic visual experiences with our animation expertise. From captivating 2D animations to immersive 3D environments, our team brings stories to life, enhancing engagement and leaving a lasting impact.
</p>
<h2 style={{color:"#ffffff"}}>Gaming Graphics</h2>
  <p style={{color:"#ffffff"}}>
Enter the world of gaming with graphics that captivate and immerse. Our gaming graphics services cover character design, environment creation, and UI elements, ensuring a visually stunning and cohesive gaming experience.
</p>

<h2 style={{color:"#ffffff"}}>Innovative Concepts</h2>
  <p style={{color:"#ffffff"}}>Nexrevs thrives on pushing creative boundaries. We turn conceptual ideas into tangible visual realities, leveraging the latest design trends and technologies to ensure your brand stands out in a crowded digital landscape.</p>

<h2 style={{color:"#ffffff"}}>Collaborative Process</h2>
  <p style={{color:"#ffffff"}}>
Your vision is at the heart of our creative process. Nexrevs engages closely with clients, fostering collaboration to ensure that every design element aligns seamlessly with brand identity, objectives, and resonates authentically with the target audience.
Embark on a visual odyssey with Nexrevs – where each pixel is a brushstroke in crafting your unique narrative. Let our graphic design, UI/UX, animation, and gaming graphics services be the creative force propelling your brand to new heights. Immerse, captivate, and inspire with Nexrevs.
               
               
                </p>

                {/* <p style={{color:"#ffffff"}}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia.
                </p>

                <p style={{color:"#ffffff"}}>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter.
                </p>

                <p style={{color:"#ffffff"}}>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>

                <p style={{color:"#ffffff"}}>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat facere possimus,
                  omnis voluptas assumenda est, omnis.
                </p> */}
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
                <h3 style={{color:"#ffffff"}}>Our Working Process</h3>
                <ul>
                  <li style={{color:"#ffffff"}}> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </li>
                  <li style={{color:"#ffffff"}}>
                    Creative Team Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem.
                  </li>
                  <li style={{color:"#ffffff"}}>
                    Branding But I must explain to you how all this mistaken
                    idea of denouncing.
                  </li>
                  <li style={{color:"#ffffff"}}>
                    Clean Code At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui.
                  </li>
                  <li style={{color:"#ffffff"}}>
                    UX/UI Friendly On the other hand, we denounce with righteous
                    indignation.
                  </li>
                  <li style={{color:"#ffffff"}}>
                    24/7 Support There are many variations of passages of Lorem
                    Ipsum available.
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-12">
  <div className="services-details-info">
    <h3 style={{color:"#ffffff"}}>Our Working Process</h3>
    <ol style={{color:"#ffffff"}}>
    <li>

        <h4 style={{color:"#ffffff"}}>Discovery</h4>
        <ul>
          <li>Initiate with a thorough understanding of your brand, values, and design preferences.</li>
          <li>Conduct market research to identify trends and competitors.</li>
        </ul>
      </li>
      <li>
        <h4 style={{color:"#ffffff"}}>Conceptualization:</h4>
        <ul>
          <li>Brainstorm and generate creative concepts aligned with your brand identity.</li>
          <li>Develop rough drafts and wireframes to visualize potential design directions.</li>
        </ul>
      </li>
      <li >
       <h4 style={{color:"#ffffff"}}>Design Development:</h4>
        <ul>
          <li>Translate chosen concepts into polished designs with attention to detail.</li>
          {/* <li>Iterative design reviews and feedback sessions to refine the chosen direction.</li> */}
        </ul>
      </li>
      <li >
       <h4 style={{color:"#ffffff"}}>Feedback and Revisions:</h4>
        <ul>
          <li>Gather client feedback and make necessary revisions for optimal satisfaction.</li>
          {/* <li>Maintain open communication to ensure the design aligns with expectations.</li> */}
        </ul>
      </li>
      <li >
       <h4 style={{color:"#ffffff"}}>Finalization:</h4>
        <ul>
          <li >Implement final edits and refinements based on client feedback.</li>
          {/* <li >Deliver high-resolution files in various formats suitable for different use cases.</li> */}
        </ul>
      </li>
      <li>
       <h4 style={{color:"#ffffff"}}>Delivery:</h4>
        <ul>
          <li>Provide the finalized design assets promptly and efficiently.</li>
          {/* <li>Ensure all necessary files and formats are delivered according to client requirements.</li> */}
        </ul>
      </li>
      <li>
       <h4 style={{color:"#ffffff"}}>Post-Launch Support:</h4>
        <ul>
          <li>Offer ongoing support for any additional tweaks or adjustments needed.</li>
          {/* <li>Provide guidance on implementing designs across different platforms for consistency.</li> */}
        </ul>
      </li>
    </ol>
    {/* <p style={{color:"#ffff"}}>Our work process is collaborative, ensuring your vision is not only met but exceeded throughout each stage of the graphic design journey.</p> */}
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContentGraphicDesign;
