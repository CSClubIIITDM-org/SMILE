import React from "react";
import ImgInfo from "../partials/ImgInfo";

const Facility = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <h1 style={{ textAlign: "center", padding: "15px", fontSize: "50px" }}>
          Facility
        </h1>
      </div>

      <div className="container-fluid bg-light">
        <div className="row">
          <div style={{ textAlign: "center" }} className="col-lg-3 col-md-6 ">
            <ImgInfo />
          </div>
          <div style={{ textAlign: "center" }} className="col-lg-3 col-md-6 ">
            <ImgInfo />
          </div>
          <div style={{ textAlign: "center" }} className="col-lg-3 col-md-6 ">
            <ImgInfo />
          </div>
          <div style={{ textAlign: "center" }} className="col-lg-3 col-md-6 ">
            <ImgInfo />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Facility;
