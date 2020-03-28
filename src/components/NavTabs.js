import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import {  useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ProfilePic from './ProfilePic';
import { FaRegEnvelope, FaPhone, FaFacebookSquare, FaGithub, FaSitemap } from 'react-icons/fa';
//import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';




function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
 // const location = useLocation();
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      alignItems: "flex-center",
      
      
    },
    sidebar: {
      backgroundColor: "lightgrey",
      
      alignItems: "flex-center",
      marginLeft: '20px',
      marginRight: '30px',
      marginTop: '20px',
      marginBottom: '30px'
    },
    env: {
      marginTop: '20px',
      marginRight: '10px',
    },
    phone: {
      marginRight: '10px',
    },
    link: {
        
        color: 'red',
        underlineHover: 'true',
        '&:hover': {
            color: 'green',
          },
    }
    
  }));

  const classes = useStyles();
  const preventDefault = event => event.preventDefault();
  const location = useLocation();

  return (

    <div  className={classes.sidebar} >
        <ProfilePic />
        

        <Typography className={classes.root}>
        <FaRegEnvelope className={classes.env} />
            bgotchall@gmail.com
            <br></br>
        <FaPhone className={classes.phone} />
            (512) 576-4654
            <br></br>
        <FaSitemap className={classes.phone} />
        <Link
            to="/"
            style={{ textDecoration: 'none', color: 'black' }}
            className= {  location.pathname === "/" ?  + "nav-link active" : "nav-link" }> www.bobgotchall.com
        </Link>
        <br></br>
        <FaGithub className={classes.phone} />
        <a
            href="https://github.com/bgotchall"
            style={{ textDecoration: 'none', color: 'black' }}
            > github.com/bgotchall
        </a>


        </Typography>


        <br></br>
        <br></br>
        <br></br>
        <Link
            to="/"
            style={{ textDecoration: 'none', color: 'black' }}
            className={classes.link}> Home
        </Link>
        <br></br>
        <Link
            to="/about"
            
            className={classes.link}>  About
        </Link>
        <br></br>
        <Link
            to="/portfolio"
            style={{ textDecoration: 'none', color: 'black' }}
            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link" } > Portfolio
        </Link>
        <br></br>
        <Link
            to="/skills"
            style={{ textDecoration: 'none', color: 'black' }}
            className={location.pathname === "/skills" ? "nav-link active" : "nav-link" } > Skills
        </Link>
    </div>

   
  );
}

export default NavTabs;
