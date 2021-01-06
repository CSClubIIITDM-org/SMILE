import React from "react";
import TextInfo from "../partials/TextInfo";

const Publication = () => {

  return (
    <React.Fragment>
      <div className="container-fluid">
        <h1>PUBLICATION</h1>
      </div>

      <div className="container-fluid my-5">
        <TextInfo />
        <TextInfo />
        <TextInfo />
      </div>
    </React.Fragment>
  );
};

export default Publication;
