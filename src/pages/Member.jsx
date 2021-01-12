import React, { useState, useEffect } from "react";
import Title from "../partials/Title";
import axios from "axios";
import ReactLoader from "../partials/Loading";
import { Link } from "react-router-dom";

const Member = () => {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const link = process.env.REACT_APP_API;

  useEffect(() => {
    const ac = new AbortController();
    const getMember = async () => {
      const members = await axios.get(`${link}/common/member`);
      setMembers(members.data.message);
      setIsLoading(false);
    };
    getMember();
    return () => ac.abort();
  }, [link]);
  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5 page-fade">
        <Title title="Members" />
        {isLoading ? (
          <ReactLoader content="Loading Members..." />
        ) : (
          <div className="row page-fade">
            {members.map((member, index) => (
              <div className="col-sm-6" key={index + 1}>
                <div className="card border-0 shadow-sm mb-2">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="w-50">
                        <img
                          src={`${link}/common/member/${member._id}`}
                          alt=""
                          loading="eager"
                          className="member-card"
                        />
                      </div>
                      <div className="w-50 pl-2 d-flex flex-column justify-content-between">
                        <div>
                          <h4 className="card-title title mt-4">
                            {member.name}
                          </h4>
                          <hr />
                        </div>
                        <p className="card-text">
                          <b>Role: {"    "}</b>
                          {member.desc}
                        </p>
                        <p className="card-text">
                          <b>Research Interests: {"    "}</b>
                          {member.researchInterest.map((edu) => (
                            <em key={edu}>
                              {edu}
                              {",   "}
                            </em>
                          ))}
                        </p>
                        <div className="text-center">
                          <Link to={`/member/${member._id}`}>
                            <button className="button">View More</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Member;
