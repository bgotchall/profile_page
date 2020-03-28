import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavTabs from "../NavTabs";
import treePic from "../../assets/tree.jpg";
import hikePic from "../../assets/hiketrail_slate.jpg";
import {
  FaRegEnvelope,
  FaPhone,
  FaFacebookSquare,
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
      // border: 'black 1px solid',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
      //  border: 'black 1px solid',
      // marginTop: '200px',
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
      //  height: "75%",
      //  width: "75%",
      margin: "20%",
      paddingLeft: "20px"
      // paddingTop: "30px"
      // paddingBottom: "20px",
      //border: "black 1px solid"
      // backgroundColor: "wheat"
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
