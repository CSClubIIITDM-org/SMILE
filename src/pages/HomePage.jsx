import React, { useEffect, useState } from "react";
import "react-awesome-slider/dist/styles.css";
import Carousel from "../partials/Carousel";
import CardInfo from "../partials/Cards";
import Title from "../partials/Title";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [about, setAbout] = useState("");
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const link = process.env.REACT_APP_API;

    const getAbout = async () => {
      const aboutInfo = await axios.get(`${link}/common/about`);
      setAbout(aboutInfo.data.message[0].desc);
    };
    const getPubs = async () => {
      const pubInfo = await axios.get(`${link}/common/publication`);
      if (pubInfo) {
        setPublications(await pubInfo.data.message.slice(0, 3));
      }
    };
    getAbout();
    getPubs();
  }, []);
  return (
    <React.Fragment>
      <div className="mt-2 page-fade">
        <Carousel />
      </div>

      <div className="container-fluid bg-light px-5 page-fade">
        <div className="row mt-5">
          <div className="col-sm-12 mt-5">
            <Title title="About Us" />
            <p>{about}</p>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 px-5 page-fade">
        <div className="row mt-5">
          <div className="col-sm-12 mt-5">
            <Title title="Popular Publications" />
            <CardInfo content={publications} />
          </div>
        </div>
        <div className="text-center mt-3">
          <Link to="/publication">
            <button className="button">View More</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
