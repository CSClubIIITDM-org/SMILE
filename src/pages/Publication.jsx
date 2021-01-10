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
                  {/* <span>Contributors: </span> */}
                  {pub.contributor.map((cont, index) => (
                    <em key={index + 1}>
                      {cont}
                      {",      "}
                    </em>
                  ))}
                </h5>
                <p className="card-text">
                  <em>{pub.desc}</em>
                </p>
                <div className="w-100">
                  {pub.volume && (
                    <p className="card-text mr-4 d-inline-block">
                      <i className="fas fa-book pr-2 pb-0" /> <em>Volume: </em>
                      {pub.volume}
                    </p>
                  )}
                  {pub.pages && (
                    <p className="card-text mr-4 d-inline-block">
                      <i className="fas fa-book-open pr-2 pb-0" />
                      <em>Pages: </em> {pub.pages}
                    </p>
                  )}
                  <p className="card-text mr-4 d-inline-block">
                    <i className="fas fa-calendar-alt pr-2 pb-0" />
                    <em>Year: </em>
                    {pub.year}
                  </p>
                </div>
                <div className="mt-2">
                  <a className="card-text" href={pub.doi} target="blank">
                    {pub.doi}
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </React.Fragment>
  );
};

export default Publication;
