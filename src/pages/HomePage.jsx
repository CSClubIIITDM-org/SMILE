import React from "react";
import "react-awesome-slider/dist/styles.css";
import Carousel from "../partials/carousel";
import TextInfo from "../partials/Cards";
import Title from "../partials/Title";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="mt-5">
        <Carousel />
      </div>

      <div className="container-fluid bg-light px-5">
        <div className="row mt-5">
          <div className="col-sm-12 mt-5">
            <Title title="About Us" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5">
        <TextInfo />
        <TextInfo />
        <TextInfo />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
