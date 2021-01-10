import React, { useEffect, useState } from "react";
import Title from "../partials/Title";
import axios from "axios";
import ReactLoader from "../partials/Loading";
import CardInfo from "../partials/Cards";

const Publication = () => {
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const link = process.env.REACT_APP_API;

  useEffect(() => {
    const ac = new AbortController();
    const getPublication = async () => {
      const publications = await axios.get(`${link}/common/publication`);
      setPublications(publications.data.message);
      setIsLoading(false);
    };
    getPublication();
    return () => ac.abort();
  }, [link]);
  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5 page-fade">
        <Title title="Publications" />
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
