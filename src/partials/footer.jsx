import React, { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const link = process.env.REACT_APP_API;

  const [contact, setContact] = useState([]);

  useEffect(() => {
    const getImage = async () => {
      const contact = await axios.get(`${link}/common/contact`);
      setContact(contact.data.message);
    };
    getImage();
  }, [link]);

  return (
    <div className="container-fluid bg-dark text-light py-5 px-3 my-0">
      <div className="row">
        <div className="col-sm-8">
          <h2 className="ml-4">Logo</h2>
        </div>
        <div className="col-sm-4">
          {contact.map((contact, index) => (
            <div key={index}>
              <p>
                <b>Information: </b>
                {contact.info}
              </p>
              <p>
                <b>Mail: </b>
                {contact.mail}
              </p>
              <p>
                <b>Number: </b>
                {contact.number}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
