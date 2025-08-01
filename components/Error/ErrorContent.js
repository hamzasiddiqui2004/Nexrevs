import React from "react";
import Link from "next/link";

const ErrorContent = () => {
  return (
    <>
      <div className="error-area ptb-100" >
        <div className="container">
          <div className="error-content">
            <img src="/images/404.png" alt="Error" />
            <h3 style={{color:"#fff"}}>Error 404 : page not found</h3>
            <p style={{color:"#fff"}}>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>

            <div className="back-btn">
              <Link href="/" className="btn btn-primary" style={{color:"#fff"}}>
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorContent;
