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
          <ReactLoader content="Facilities Loading ..." />
        ) : (
          <div className="card-columns">
            {culturals.map((cultural, index) => (
              <div className="card text-center" key={index + 1}>
                <div className="card-img-top mx-auto">
                  <img
                    src={`${link}/common/cultural/${cultural._id}`}
                    alt=""
                    className="img-fluid"
                    loading="eager"
                  />
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
