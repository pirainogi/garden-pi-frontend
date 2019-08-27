import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import * as actions from "../actions/actions";
import "../css/header.css";

const ActiveLink = ({ to, pathname, children }) => (
  <Link to={to} className={`link${pathname === to ? " active" : ""}`}>
    {children}
  </Link>
);

const Header = props => {
  const [navOpen, setNavOpen] = useState(false);

  let loggingOut = () => {
    props.logoutUser();
    props.history.push("/");
  };

  return (
    <nav className={`header${navOpen ? " open" : ""}`}>
      <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
        <div />
        <div />
        <div />
      </div>
      <div className="nav-links">
        <ActiveLink to="/about" pathname={props.location.pathname}>
          About
        </ActiveLink>
        <ActiveLink to="/garden" pathname={props.location.pathname}>
          My Plants
        </ActiveLink>
        <ActiveLink to="/profile" pathname={props.location.pathname}>
          Profile
        </ActiveLink>
        <button className="link" onClick={() => loggingOut()}>
          Logout
        </button>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  // console.log("header state", state);
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(Header));
