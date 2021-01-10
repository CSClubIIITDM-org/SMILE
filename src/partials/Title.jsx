import React from "react";

const Title = ({ title }) => {
  return (
    <React.Fragment>
      <h1 className="title">{title}</h1>
      <hr></hr>
    </React.Fragment>
  );
};

export default Title;
