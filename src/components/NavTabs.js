import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ProfilePic from './ProfilePic';

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    sidebar: {
      backgroundColor: "lightgrey",
      height: "1000px",
      alignItems: "flex-start"
    }
  }));

  const classes = useStyles();

  return (




   
      <ul className={classes.sidebar}>
          <ProfilePic></ProfilePic>
        <li className="nav-item">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/blog"
            className={
              location.pathname === "/blog" ? "nav-link active" : "nav-link"
            }
          >
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={
              location.pathname === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact/learn"
            className={
              location.pathname === "/contact/learn"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Learn
          </Link>
        </li>
      </ul>
   
  );
}

export default NavTabs;
