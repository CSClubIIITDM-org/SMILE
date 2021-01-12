import React, { useEffect, useState } from "react";
import Title from "../partials/Title";
import axios from "axios";
import ReactLoader from "../partials/Loading";
import CardInfo from "../partials/Cards";
import { Link } from "react-router-dom";

const Publication = () => {
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [option, setOption] = useState("");

  const link = process.env.REACT_APP_API;

  useEffect(() => {
    const ac = new AbortController();
    const getPublication = async () => {
      const publication = await axios.get(`${link}/common/publication`);
      // console.log(publication.data.message);
      setPublications(publication.data.message);
      // console.log(option);
      if (option !== "") {
        const sort = publication.data.message.filter(
          (pub) => pub.category === option
        );
        setPublications(sort);
      }
      setIsLoading(false);
    };
    getPublication();
    return () => ac.abort();
  }, [link, option]);

  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5 page-fade">
        <Title title="Publications">
          <button
            className="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-sliders-h pr-2"></i> Filter
          </button>
          <div className="dropdown-menu">
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => setOption("")}
            >
              All
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => setOption("Article")}
            >
              Article
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => setOption("Conference Paper")}
            >
              Conference Paper
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => setOption("Conference Proceedings")}
            >
              Conference Proceedings
            </Link>
          </div>
        </Title>
        {isLoading ? (
          <ReactLoader content="Loading Publications" />
        ) : (
          <CardInfo content={publications} />
        )}
      </div>
    </React.Fragment>
  );
};

export default Publication;
