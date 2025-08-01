import React from "react";
import Link from "next/link";

const FooterDark = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area footer-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in" 
                data-aos-duration="1200" 
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link 
                  href="/"
                  >
                    <img src="/images/logo-white.png" alt="Logo" />
                  </Link>
                </div>

                <p>
                Our Services Are Designed To Help Your Business Stand Out And Turn Your Ideas Into Digital Realities.
                </p>

                <ul className="social-links">
                  <li>
                    <a 
                    href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="linkedin.com" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget ml-4 pl-5"
                data-aos="fade-in" 
                data-aos-duration="1200" 
                data-aos-delay="200"
              >
                <h3>Explore</h3>

                <ul className="list">
                  <li>
                    <Link 
                    // href="/"
                  href="/"

                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                    // href="/about/"
                  href="/"

                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link 
                    // href="/services/"
                  href="/"

                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link 
                    // href="/portfolio/"
                  href="/"

                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link 
                    
                    // href="/team/"
                    
                  href="/"

                    >
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget ml-4"
                data-aos="fade-in" 
                data-aos-duration="1200" 
                data-aos-delay="300"
              >
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <Link href="/contact/">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing/">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq/">
                      Faq
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy/">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions/">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in" 
                data-aos-duration="1200" 
                data-aos-delay="400"
              >
                <h3>Get in Touch</h3>

                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-location-dot"></i>  LILAC DR AUBREY, TX 76227
                  </li>
                  <li className="pt-2">
                    <i className="fa-solid fa-headset"></i>
                    <a href="tel:+1 (321)233 5032">+1 (321)233 5032</a>
                  </li>
                  <li className="pt-2">
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:hello@pungent.com">hello@Nexrevs.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          {/* <div className="container">
            <p>
              Copyright &copy; {currentYear} Pungent. All Rights Reserved By{" "}
              <a href="https://envytheme.com" target="_blank">
                EnvyTheme
              </a>
            </p>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default FooterDark;
