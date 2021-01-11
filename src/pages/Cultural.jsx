import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../partials/Title";
import ReactLoader from "../partials/Loading";

const Cultural = () => {
  const [culturals, setCulturals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const link = process.env.REACT_APP_API;

  useEffect(() => {
    const ac = new AbortController();
    const getFacility = async () => {
      const culturals = await axios.get(`${link}/common/cultural`);
      console.log(culturals.data.message);
      setCulturals(culturals.data.message);
      setIsLoading(false);
    };
    getFacility();
    return () => ac.abort();
  }, [link]);

  return (
    <React.Fragment>
      <div className="container-fluid px-5 my-5 page-fade">
        <Title title="Cultural Activities" />
        {isLoading ? (
          <ReactLoader content="Loading Cultural Activities..." />
        ) : (
          <div className="card-columns page-fade">
            {culturals.map((cultural, index) => (
              <div className="card border-0 shadow-sm" key={index + 1}>
                <div className="card-body">
                  <div className="card-img-top mx-auto">
                    <img
                      src={`${link}/common/cultural/${cultural._id}`}
                      alt=""
                      loading="eager"
                      height="300px"
                      width="100%"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h4 className="card-title title mt-4">{cultural.event}</h4>
                  <p className="card-text">{cultural.desc}</p>
                  <p className="card-text">
                    <i className="fas fa-calendar-alt pr-3"></i>
                    {cultural.eventDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cultural;
