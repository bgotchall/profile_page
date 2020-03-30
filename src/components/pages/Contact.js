import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavTabs from "../NavTabs";
import treePic from "../../assets/tree_med_slate.jpg";
import hikePic from "../../assets/hiketrail_med_slate.jpg";
import {
  FaRegEnvelope,
  FaPhone,
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaSitemap,
  FaFileWord
} from "react-icons/fa";
//import Link from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography";

import resume from "../../assets/resume_PE_V7.docx";

function Contact() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      alignItems: "flex-start"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    mainPic: {
      height: "1000px",
      backgroundImage: `url(${hikePic})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: 'cover',
      // border: 'black 1px solid',
      alignItems: "flex-start"
    },
    sideBar: {
      height: "1000px",
      backgroundColor: "lightgrey"
    },
    line: {
      lineHeight: "5"
    },
    contentBox: {
      margin: "20%",
      paddingLeft: "20px"
    },
    env: {
      paddingRight: "10px"
    }
  }));

  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid className={classes.sideBar} item xs={2}>
            <NavTabs></NavTabs>
          </Grid>
          <Grid item xs={10}>
            <Grid className={classes.mainPic} container spacing={0}>
              <Grid item xs={10}>
                <Paper className={classes.contentBox}>
                  <FaRegEnvelope className={classes.env} />
                  <span className={classes.line}> bgotchall@gmail.com</span>
                  <br />
                  <span className={classes.line}>
                    <FaPhone className={classes.env} />
                    (512) 576-4654{" "}
                  </span>
                  <br />

                  <span className={classes.line}>
                    <FaSitemap className={classes.env} />
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                      className={
                        location.pathname === "/"
                          ? +"nav-link active"
                          : "nav-link"
                      }
                    >
                      {" "}
                      www.bobgotchall.com
                    </Link>{" "}
                  </span>
                  <br />

                    <span className={classes.line}>
                    <FaGithub className={classes.env} />
                    <a
                      href="https://github.com/bgotchall"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
                      github.com/bgotchall
                    </a>{" "}
                  </span>
                  <br />

                  <span className={classes.line}>
                    <FaLinkedin className={classes.env} />
                    <a
                      href="https://www.linkedin.com/in/robert-gotchall-92b01731/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
                      Linked In
                    </a>{" "}
                  </span>
                  <br />

                  <span className={classes.line}>
                    <a href={resume} download  style={{ textDecoration: "none", color: "black" }}> 
                      <FaFileWord className={classes.env} /> Resume
                    </a>
                  </span>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Contact;
