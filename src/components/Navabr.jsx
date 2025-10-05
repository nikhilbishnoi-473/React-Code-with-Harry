import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navabr(props) {
 
  return (
    <div className="">
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/Home">
                 Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                About
                </Link>
              </li>
            </ul>
           {/* <div className="d-flex">
            <div onClick={() => props.toggleMode(`primary`)} className="bg-primary rounded mx-2 " style={{height: "30px", width: "30px",cursor: "pointer"}}></div>
            <div onClick={() => props.toggleMode(`danger`)} className="bg-danger rounded mx-2 " style={{height: "30px", width: "30px",cursor: "pointer"}}></div>
            <div onClick={() => props.toggleMode(`success`)} className="bg-success rounded mx-2 " style={{height: "30px", width: "30px",cursor: "pointer"}}></div>
            <div onClick={() => props.toggleMode(`warning`)} className="bg-warning rounded mx-2 " style={{height: "30px", width: "30px",cursor: "pointer"}}></div>
            <div onClick={() => props.toggleMode(`light`)} className="bg-light border border-black rounded mx-2 " style={{height: "30px", width: "30px",cursor: "pointer"}}></div>
            <div onClick={() => props.toggleMode(`dark`)} className="bg-dark border border-white rounded mx-2 " style={{height: "30px", width: "30px",cursor: "pointer"}}></div>

           </div> */}
            <div className={`form-check form-switch text-${props.mode === 'light'? 'dark': 'light'}`}>
              <input onClick={() => props.toggleMode(null)}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
              />
              {/* <label className="form-check-label" htmlFor="switchCheckDefault">
               Toggle mode
              </label> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navabr.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
};
Navabr.defaultProps = {
  title: "hello",
  home: "world",
};
