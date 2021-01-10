import React from "react";

const CardInfo = ({ content }) => {
  return content.map((content, index) => (
    <div
      className="col-sm-12 my-3 w-100 border-0 shadow-sm card text-left page-fade"
      key={index + 1}
    >
      <div className="card-body">
        <h4 className="card-title">{content.title}</h4>
        <h5 className="mb-2 text-muted card-subtitle">
          {content.contributor.map((cont, index) => (
            <em key={index + 1}>
              {cont}
              {",      "}
            </em>
          ))}
        </h5>
        <p className="card-text">
          <em className="pr-2">{content.desc}</em>{" "}
          <span className="border-left border-primary pl-2">
            {content.category}
          </span>
        </p>
        <div className="w-100">
          {content.volume && (
            <p className="card-text mr-4 d-inline-block">
              <i className="fas fa-book pr-2 pb-0" /> <em>Volume: </em>
              <span className="text-primary">{content.volume}</span>
            </p>
          )}
          {content.pages && (
            <p className="card-text mr-4 d-inline-block">
              <i className="fas fa-book-open pr-2 pb-0" />
              <em>Pages: </em>
              <span className="text-primary"> {content.pages}</span>
            </p>
          )}
          <p className="card-text mr-4 d-inline-block">
            <i className="fas fa-calendar-alt pr-2 pb-0" />
            <em>Year: </em>
            <span className="text-primary"> {content.year}</span>
          </p>
        </div>
        <div className="mt-2">
          <a className="card-text" href={content.doi} target="blank">
            {content.doi}
          </a>
        </div>
      </div>
    </div>
  ));
};

export default CardInfo;
