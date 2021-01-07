import React from "react";
import Carousel from "../partials/carousel";
import { Card } from 'react-bootstrap';

const About = () => {
    return(
        <React.Fragment>
            <Carousel /> 
            <div className="container-fluid bg-light px-5">
                <div className="row mt-5">
                    <div style={{textAlign: "center"}} className="col-sm-12 mt-5">
                        <h1 style={{ fontSize:'50px' }}>About us </h1>
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
        </React.Fragment>
    )
};

export default About;