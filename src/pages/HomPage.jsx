import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const HomePage = () => {
  const [slider] = useState([
    {
      image:
        "https://medicine.utah.edu/orthopaedics/research/labs/harold-dunn/images/lab-full-800px.jpg",
      content: "Some Research content",
    },
    {
      image:
        "https://medicine.utah.edu/orthopaedics/research/labs/harold-dunn/images/lab-full-800px.jpg",
      content: "Some Research content",
    },
    {
      image:
        "https://medicine.utah.edu/orthopaedics/research/labs/harold-dunn/images/lab-full-800px.jpg",
      content: "Some Research content",
    },
    {
      image:
        "https://medicine.utah.edu/orthopaedics/research/labs/harold-dunn/images/lab-full-800px.jpg",
      content: "Some Research content",
    },
  ]);

  return (
    <React.Fragment>
      <h1>nefnkenfk</h1>
      <AwesomeSlider>
        {slider.map((slider, index) => (
          <div key={index + 1} className="w-100 p-0">
            <img src={slider.image} alt="" className="carousal" />
            <p className="text-light">{slider.content}</p>
          </div>
        ))}
      </AwesomeSlider>
    </React.Fragment>
  );
};

export default HomePage;
