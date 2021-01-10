import React, { useEffect, useState } from "react";
import "react-awesome-slider/dist/styles.css";
import Carousel from "../partials/carousel";
import TextInfo from "../partials/Cards";
import Title from "../partials/Title";
import axios from "axios";

const HomePage = () => {
  const [about, setAbout] = useState("");
  useEffect(() => {
    const link = process.env.REACT_APP_API;

    const getAbout = async () => {
      const aboutInfo = await axios.get(`${link}/common/about`);
      console.log(aboutInfo);
      setAbout(aboutInfo.data.message[0].desc);
    };
    getAbout();
  }, []);
  return (
    <React.Fragment>
      <div className="mt-5">
        <Carousel />
      </div>

      <div className="container-fluid bg-light px-5">
        <div className="row mt-5">
          <div className="col-sm-12 mt-5">
            <Title title="About Us" />
            <p>{about}</p>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 px-5">
        <div className="row mt-5">
          <div className="col-sm-12 mt-5">
            <Title title="Popular Publications" />
            <TextInfo />
            <TextInfo />
            <TextInfo />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
