import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactLoader from "./Loading";

const Carousel = () => {
  const [carousel, setCarousel] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const link = process.env.REACT_APP_API;

  useEffect(() => {
    const ac = new AbortController();
    const getImage = async () => {
      const images = await axios.get(`${link}/common/carousal`);
      setCarousel(images.data.message);
      setisLoading(false);
    };
    getImage();
    return () => ac.abort();
  }, [link]);

  return (
    <div className="container-fluid px-0">
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators mb-0">
          {carousel.map((slider, index) => (
            <li
              key={slider._id}
              data-target="#demo"
              data-slide-to={index}
              className={index === 0 ? "active" : ""}
            ></li>
          ))}
        </ul>
        <div
          className="carousel-inner"
          style={{ width: "100%", height: "700px" }}
        >
          {isLoading ? (
            <ReactLoader content="loading images..." />
          ) : (
            carousel.map((slider, index) => (
              <div
                className={
                  index + 1 === 1 ? "carousel-item active" : "carousel-item"
                }
                key={index + 1}
              >
                <img
                  src={`${link}/common/carousal/${slider._id}`}
                  alt=""
                  className="mx-auto"
                  style={{ width: "100%", height: "700px", objectFit: "cover" }}
                />
                <div className="carousel-caption bg-caption mb-0 w-100">
                  <p>{slider.desc}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
