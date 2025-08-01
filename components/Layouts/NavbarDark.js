import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavbarDark = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);
  
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area dark-navbar">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              <img
                src="/images/logo-white.png"
                className="white-logo"
                alt="logo"
                width={"250"}
              />
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${currentPath == "/" && "active"}`}
                  >
                    Home 
            
                  </Link>

                 
                </li>

                <li className="nav-item">
                  <Link
                    href="/graphic-design/"
                    className={`nav-link ${
                      currentPath == "/graphic-design/" && "active"
                    }`}
                  >
                    Services 
                    <i className="fa-solid fa-angle-down"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/graphic-design/"
                        className={`nav-link ${
                          currentPath == "/graphic-design/" && "active"
                        }`}
                      >
                        Graphic Design Services
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/mobile-application/"
                        className={`nav-link ${
                          currentPath == "/mobile-application/" && "active"
                        }`}
                      >
                      Mobile Application Services
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/web-application/"
                        className={`nav-link ${
                          currentPath == "/web-application/" && "active"
                        }`}
                      >
                      Web Application Services
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/digital-market/"
                        className={`nav-link ${
                          currentPath == "/digital-market/" && "active"
                        }`}
                      >
                     Digital Marketing Services 
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                      <Link
                        href="/service-details/"
                        className={`nav-link ${
                          currentPath == "/service-details/" && "active"
                        }`}
                      >
                        Service Details
                      </Link>
                    </li> */}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="/portfolio/"
                    className={`nav-link ${
                      currentPath == "/portfolio/" && "active"
                    }`}
                  >
                    Portfolio
                    {/* <i className="fa-solid fa-angle-down"></i> */}
                  </Link>

                  {/* <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/portfolio/"
                        className={`nav-link ${
                          currentPath == "/portfolio/" && "active"
                        }`}
                      >
                        Portfolio
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio-details/"
                        className={`nav-link ${
                          currentPath == "/portfolio-details/" && "active"
                        }`}
                      >
                        Portfolio Details
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio-details-2/"
                        className={`nav-link ${
                          currentPath == "/portfolio-details-2/" && "active"
                        }`}
                      >
                        Portfolio Details 2
                      </Link>
                    </li>
                  </ul> */}
                </li>
                <li className="nav-item">
                  <Link
                    href="/contact/"
                    className={`nav-link ${
                      currentPath == "/contact/" && "active"
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className="others-options">
                <Link href="/contact/" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarDark;
