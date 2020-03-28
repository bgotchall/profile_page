import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import {  useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ProfilePic from "./ProfilePic";
import {
  FaRegEnvelope,
  FaPhone,
  FaFacebookSquare,
  FaGithub,
  FaSitemap
} from "react-icons/fa";
//import Link from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  // const location = useLocation();
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
     // width: "100%",
      textAlign: "center",
      //margin: 10% 0;
      minHeight: "200px",
      alignItems: "center",
      
    },
    sidebar: {
      //   backgroundColor: "lightgrey",
      fontFamily: "Quicksand",
      //alignItems: "flex-center",
      marginLeft: "20px",
      marginRight: "30px",
      marginTop: "20px",
      marginBottom: "30px",
      //color: "red"
    },
    env: {
      marginTop: "20px",
      marginRight: "10px"
    },
    phone: {
      marginRight: "10px"
    },
    name: {
      fontSize: "32px",
      fontFamily: "Playfair Display, serif",
      marginTop: "30px"
    },
    link: {
      color: "black",
      textDecoration: "none",
      "&:hover": {
        color: "green",
        underlineHover: "true"
      }
    }
  }));

  const classes = useStyles();
  const preventDefault = event => event.preventDefault();
  const location = useLocation();

  return (
    <div className={`${classes.root} ${classes.sidebar}`}>
      <ProfilePic />
      
      <span className={classes.name}>Bob Gotchall</span>
      <br />
      <span>Engineer/Developer</span>

      <br />
      <br />
      <br />
      <Link to="/" className={classes.link}>
        {" "}
        Home
      </Link>
      <br />
      <Link to="/about" className={classes.link}>
        {" "}
        About
      </Link>
      <br />
      <Link to="/portfolio" className={classes.link}>
        {" "}
        Portfolio
      </Link>
      <br />
      <Link to="/skills" className={classes.link}>
        {" "}
        Skills
      </Link>
      <br />
      <Link to="/contact" className={classes.link}>
        {" "}
        Contact
      </Link>
    </div>
  );
}

export default NavTabs;
