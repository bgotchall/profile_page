import React from "react";
//import { Link, useLocation } from "react-router-dom";
import {  useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ProfilePic from './ProfilePic';
import { FaRegEnvelope, FaPhone } from 'react-icons/fa';
import Link from '@material-ui/core/Link';
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
      height: "1000px",
      alignItems: "flex-start",
      marginLeft: '50px',
      marginTop: '20px',
      marginBottom: '30px'
      
    },
    env: {
      marginTop: '20px',
      marginRight: '10px',
    },
    phone: {
      marginRight: '10px',
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
        512-576 4654
        <br></br>


      <Link href="About" onClick={preventDefault}>
        about
      </Link>
    </Typography>



    <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
    </div>

   
  );
}

export default NavTabs;
