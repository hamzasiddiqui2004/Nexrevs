import React from "react";

const PageBanner = ({ pageTitle, BGImage }) => {
  return (
    <>
      <div className="page-title-area" style={{ backgroundImage: `url(${BGImage})`,marginTop:"89px" }}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <h2>{pageTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
