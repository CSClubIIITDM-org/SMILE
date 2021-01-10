import React, { useEffect, useState } from "react";
import Title from "../partials/Title";
import axios from "axios";
import ReactLoader from "../partials/Loading";

const Publication = () => {
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const link = process.env.REACT_APP_API;

  useEffect(() => {
    const getImage = async () => {
      const publications = await axios.get(`${link}/common/publication`);
      setPublications(publications.data.message);
      setIsLoading(false);
    };
    getImage();
  }, [link]);
  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5 page-fade">
        <Title title="Publications" />
        {isLoading ? (
          <ReactLoader content="Loading Publications" />
        ) : (
          publications.map((pub, index) => (
            <div
              className="col-sm-12 my-3 w-100 border-0 shadow-sm card text-left page-fade"
              key={index + 1}
            >
              <div className="card-body">
                <h4 className="card-title">{pub.title}</h4>
                <h5 className="mb-2 text-muted card-subtitle">
                  <span>Contributors: </span>
                  {pub.contributor.map((cont, index) => (
                    <em key={index + 1}>
                      {cont}
                      {",      "}
                    </em>
                  ))}
                </h5>
                <p className="card-text">
                  <em>Name of the publisher</em>
                </p>
                <a className="card-text" href={pub.doi}>
                  {pub.doi}
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </React.Fragment>
  );
};

export default Publication;
