import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavTabs from "../NavTabs";
import treePic from "../../assets/tree_med_slate.jpg";
import hikePic from "../../assets/hiketrail_slate.jpg";
import kittenPic from "../../assets/kitten1.jpg";

function About() {
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
      backgroundImage: `url(${treePic})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // border: 'black 1px solid',
      alignItems: "flex-start"
    },
    sideBar: {
      height: "1000px",
      backgroundColor: "lightgrey"
    },
    contentBox: {
      margin: "10%",
      paddingLeft: "20px"
    }
  }));

  const classes = useStyles();

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
                <Paper elevation={3} className={classes.contentBox}>
                  <h1>Experienced engineer/hacker/coder</h1>
                  <Paragraphs />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

function Paragraphs() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      alignItems: "flex-start",
      paddingRight: '20px',
      // border: 'black 1px solid',
    },
    kitten: {
      borderRadius: "50%",
      width: "100%",
      marginRight: "10px",
      width: "150px",
      display: "flex",
      alignItems: 'flex-end',
      alignItems: "right",
      justifyContent: "right"
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>
        A native of Kansas, I moved to Austin in 1995 after I graduated with
        Computer Engineering degree from Kansas State University.{" "}
      </p>
      <p>
        I have worked in the Semiconductor industry for 18 years. I have coded
        in a dozen langagues, done Web design, circuit design, PCB design and dabbled in
        mechanical design with Sketchup.
      </p>

      <p>
        {" "}
        I have travelled extensively for business and for fun having spent time
        in China, Hong Kong, Singapore, Taiwan, France, Italy, Spain, Germany,
        Austria, Switzerland, Canada, Mexico and Czechia.{" "}
      </p>

      <p>
        I am an Electric Vehicle advocate, drive a Tesla model X and I foster
        kittens!
      </p>
      <img src={kittenPic} className={classes.kitten} />
      <br />
    </div>
  );
}

export default About;
