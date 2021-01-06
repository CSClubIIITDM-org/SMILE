import React from "react";
// import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Carousel from "../partials/carousel";
import TextInfo from "../partials/TextInfo";

const HomePage = () => {

  return (
    <React.Fragment>
      <Carousel />

      <div className="container-fluid bg-light px-5">
        <div className="row mt-5">
          <div className="col-sm-3 mt-5">
            <ul className="list-group list-group-flush shadow-sm">
              <li className="list-group-item">First item</li>
              <li className="list-group-item">Second item</li>
              <li className="list-group-item">Third item</li>
              <li className="list-group-item">Fourth item</li>
            </ul>
          </div>
          <div className="col-sm-6 mt-5">
            <h2>What is Lorem Ipsum?</h2>
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
          <div className="col-sm-3 mt-5">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">First item</li>
              <li className="list-group-item">Second item</li>
              <li className="list-group-item">Third item</li>
              <li className="list-group-item">Fourth item</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">Header</div>
              <div className="card-body">Content</div>
              <div className="card-footer">Footer</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">Header</div>
              <div className="card-body">Content</div>
              <div className="card-footer">Footer</div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">Header</div>
              <div className="card-body">Content</div>
              <div className="card-footer">Footer</div>
            </div>
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
