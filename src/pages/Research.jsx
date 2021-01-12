import React, { useState, useEffect } from "react";
import Title from "../partials/Title";
import axios from "axios";
import ReactLoader from "../partials/Loading";

const Research = () => {
  const [researches, setResearches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const link = process.env.REACT_APP_API;

  useEffect(() => {
    const ac = new AbortController();
    const getResearch = async () => {
      const researches = await axios.get(`${link}/common/research`);
      setResearches(researches.data.message);
      setIsLoading(false);
    };
    getResearch();
    return () => ac.abort();
  }, [link]);
  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5 page-fade">
        <Title title="Research Projects"></Title>
        <div className="mt-5">
          {isLoading ? (
            <ReactLoader content="Loading Research Projects..." />
          ) : (
            researches.map((research, index) => (
              <div
                className="col-sm-12 my-3 w-100 border-0 shadow-sm card text-left page-fade"
                key={index + 1}
              >
                <div className="card-body">
                  <h4 className="card-title">{research.title}</h4>
                  <h5 className="mb-2 text-muted card-subtitle">
                    Funding Agency: {"     "} <em>{research.agency}</em>
                  </h5>
                  <div className="w-100">
                    <p className="card-text mr-4 d-inline-block">
                      <i className="fas fa-user-tag pr-2 pb-0" />{" "}
                      <em>Role: </em>
                      <span className="text-primary">{research.role}</span>
                    </p>

                    <p className="card-text mr-4 d-inline-block">
                      <i className="fas fa-rupee-sign pr-2 pb-0" />
                      <em>Funds: </em>
                      <span className="text-primary"> {research.funds}</span>
                    </p>

                    <p className="card-text mr-4 d-inline-block">
                      <i className="fas fa-calendar-alt pr-2 pb-0" />
                      <em>Years: </em>
                      <span className="text-primary"> {research.years}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Research;
