import React from "react";
import ImgInfo from "../partials/ImgInfo";
import Title from "../partials/Title";

const Member = () => {
  return (
    <React.Fragment>
      <div className="container-fluid my-5">
        <Title title="Members" />
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

export default Member;
