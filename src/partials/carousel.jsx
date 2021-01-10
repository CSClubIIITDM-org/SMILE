import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import axios from "axios";
import ReactLoader from "./Loading";

const Carousel = () => {
  const [carousel, setCarousel] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const link = process.env.REACT_APP_API;

  useEffect(() => {
    const getImage = async () => {
      const images = await axios.get(`${link}/common/carousal`);
      setCarousel(images.data.message);
      setisLoading(false);
    };
    getImage();
  }, [link]);

  return (
    <AwesomeSlider>
      {isLoading ? (
        <ReactLoader content="loading images..." />
      ) : (
        carousel.map((slider, index) => (
          <div
            key={index + 1}
            className="w-100 p-0 position-relative text-center container"
          >
            <img
              src={`${link}/common/carousal/${slider._id}`}
              alt=""
              className="carousal"
              style={{ opacity: 0.5 }}
              loading="lazy"
            />
            <p className="position-absolute bottom-left">{slider.desc}</p>
          </div>
        ))
      )}
    </AwesomeSlider>
  );
};

export default Carousel;
