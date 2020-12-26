import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [links] = useState([
    {
      name: "Home",
      link: "/",
      drop: [
        {
          name: "Events",
          link: "events",
        },
      ],
    },
    {
      name: "About Us",
      link: "/aboutus",
      drop: [],
    },
    {
      name: "Research",
      link: "/research",
      drop: [],
    },
    {
      name: "Publication",
      link: "/publication",
      drop: [],
    },
    {
      name: "Facility",
      link: "/facility",
      drop: [],
    },
    {
      name: "Members",
      link: "/member",
      drop: [
        {
          name: "Professors",
          link: "/professors",
        },
        {
          name: "Scholars",
          link: "/scholars",
        },
      ],
    },
    {
      name: "Cultural activity",
      link: "/culturalactivity",
      drop: [],
    },
    {
      name: "Contact",
      link: "/contact",
      drop: [],
    },
  ]);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark shadow flex-column">
        <a className="navbar-brand w-100 d-block" href="/">
          Logo
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {links.map((link, index) => (
              <li className="nav-item" key={index + 1}>
                <Link
                  className="nav-link px-3"
                  to={link.link}
                  data-toggle={link.drop.length !== 0 ? "dropdown" : ""}
                >
                  {link.name}
                </Link>
                {link.drop.length !== 0 && (
                  <div className="dropdown-menu text-center w-100">
                    {link.drop.map((drop) => (
                      <Link
                        className="dropdown-item"
                        to={drop.link}
                        key={drop.link}
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Topbar;
