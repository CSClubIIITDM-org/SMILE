import React from "react";

const SearchBar = ({ classes }) => {
  return (
    <React.Fragment>
      <form className={`form-inline ${classes} pr-2`}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            className="form-control"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-info">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SearchBar;
