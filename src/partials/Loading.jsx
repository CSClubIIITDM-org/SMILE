import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ReactLoader = ({ content }) => {
  return (
    <React.Fragment>
      <Loader type="Puff" color="#2b00ff" height={100} width={100} />
      <p className="mt-5">{content}</p>
    </React.Fragment>
  );
};

export default ReactLoader;
