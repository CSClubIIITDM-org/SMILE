import React from "react";

const CardInfo = () => {
  return (
    <div className="col-sm-12 my-3 w-100 border-0 shadow-sm card text-left">
      <div className="card-body">
        <h4 className="card-title">Description about the publication</h4>
        <h5 className="mb-2 text-muted card-subtitle">
          <em>Name of the contributor</em>
        </h5>
        <p className="card-text">
          <em>Name of the publisher</em>
        </p>
        <p className="card-text"> DOI: DOI number will be here </p>
      </div>
    </div>
  );
};

export default CardInfo;
