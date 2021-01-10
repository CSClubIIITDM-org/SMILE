import React from "react";
import CardInfo from "../partials/Cards";
import Title from "../partials/Title";

const Research = () => {
  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5 page-fade">
        <Title title="Research" />
        <div className="mt-5">
          <CardInfo />
          <CardInfo />
          <CardInfo />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Research;
