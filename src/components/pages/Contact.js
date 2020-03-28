import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavTabs from "../NavTabs";
import treePic from "../../assets/tree.jpg";
import hikePic from "../../assets/hiketrail_slate.jpg";
import { FaRegEnvelope, FaPhone, FaFacebookSquare, FaGithub, FaSitemap } from 'react-icons/fa';
//import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


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
    },
    mainPic: {
      height: "1000px",
      backgroundImage: `url(${hikePic})`,
      backgroundRepeat: "no-repeat",
      // border: 'black 1px solid',
      alignItems: "flex-start"
    },
    sideBar: {
      height: "1000px",
      backgroundColor: "lightgrey"
    },
    contentBox: {
      //alignItems: "flex-center",
      // height: "75%",
      // width: "75%",
      padding: "20%",
      border: "black 1px solid"
      // backgroundColor: "wheat"
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
              <Grid className={classes.contentBox} item xs={10}>
                <Paper>
                  <Typography className={classes.root}>
                    <FaRegEnvelope className={classes.env} />
                    <span>bgotchall@gmail.com</span>
                    <br />
                    <FaPhone className={classes.phone} />
                    (512) 576-4654
                    <br />
                    <FaSitemap className={classes.phone} />
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
                    </Link>
                    <br />
                    <FaGithub className={classes.phone} />
                    <a
                      href="https://github.com/bgotchall"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
                      github.com/bgotchall
                    </a>
                  </Typography>
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
