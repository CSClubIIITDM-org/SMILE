import React, { useEffect, useState } from "react";
import Title from "../partials/Title";
import axios from "axios";
import ReactLoader from "../partials/Loading";

const MemberPage = ({ match }) => {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const link = process.env.REACT_APP_API;

  useEffect(() => {
    const ac = new AbortController();
    const getMember = async () => {
      const members = await axios.get(`${link}/common/member`);
      const member = members.data.message.filter(
        (mem) => mem._id === match.params.id
      );
      setMembers(member);
      setIsLoading(false);
    };
    getMember();
    return () => ac.abort();
  }, [link, match.params.id]);

  return (
    <React.Fragment>
      <div className="container-fluid my-5 px-5">
        {isLoading ? (
          <ReactLoader content="Loading Member ..." />
        ) : (
          members.map((mem) => (
            <>
              <Title title={mem.name} />
              <div className="row">
                <div className="col-sm-3">
                  <img
                    src={`${link}/common/member/${mem._id}`}
                    alt=""
                    style={{ objectFit: "cover", width: "100%" }}
                    // className="img-fluid"
                  />
                </div>
                <div className="col-sm-6 d-flex justify-content-between flex-column">
                  <h1 className="mb-4">{mem.name}</h1>
                  <p className="card-text">
                    <b>Research Interests: {"    "}</b>
                    {mem.researchInterest.map((edu) => (
                      <em key={edu}>
                        {edu}
                        {",   "}
                      </em>
                    ))}
                  </p>
                  <p className="card-text">
                    <b>Education: {"    "}</b>
                    {mem.education.map((edu) => (
                      <em key={edu}>
                        {edu}
                        {",   "}
                      </em>
                    ))}
                  </p>
                  <a href={mem.websiteLink} target="blank">
                    {mem.websiteLink}
                  </a>
                  <div>
                    <p className="mb-0">
                      <i className="fas fa-phone pr-3"></i>
                      {mem.number}
                    </p>
                  </div>
                  <div>
                    <p className="mb-0">
                      <i className="fas fa-envelope-open-text pr-3"></i>
                      {mem.email}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Title title={`About  ${mem.name}`} />
                <p>{mem.about}</p>
              </div>
            </>
          ))
        )}
      </div>
    </React.Fragment>
  );
};

export default MemberPage;
