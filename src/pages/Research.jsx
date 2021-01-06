import React from "react";
import TextInfo from "../partials/TextInfo";

const Research = () => {

  return (
    <React.Fragment>
      <div className="container-fluid">
        <h1 style={{textAlign: "center", padding: '15px', fontSize: "50px"}}>Research</h1>
      </div>

      <div className="container-fluid my-5">
        <TextInfo />
        <TextInfo />
        <TextInfo />
      </div>
    </React.Fragment>
  );
};

export default Research;
