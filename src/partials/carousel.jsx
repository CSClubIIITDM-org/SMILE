import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Carousel = () => {

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

      return(
        <AwesomeSlider>
        {slider.map((slider, index) => (
          <div
            key={index + 1}
            className="w-100 p-0 position-relative text-center container"
          >
            <img src={slider.image} alt="" className="carousal" style={{opacity:0.5}} />
            <p
              className="position-absolute bottom-left"
              //   style={{ marginTop: "-40vh", zIndex: 4000, opacity: 1 }}
            >
              {slider.content}
            </p>
          </div>
        ))}
      </AwesomeSlider>
      );  
}

export default Carousel;