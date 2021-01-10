import React from "react";
import ImgInfo from "../partials/ImgInfo";
import Title from "../partials/Title";

const Facility = () => {
  return (
    <React.Fragment>
      <div className="container-fluid bg-light px-5 mt-5">
        <Title title="Facility" />
        <div className="row mb-5">
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
