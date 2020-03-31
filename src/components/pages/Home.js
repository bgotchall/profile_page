import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavTabs from "../NavTabs";
import hikePic from "../../assets/hiketrail_med_slate.jpg";

function Home() {
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
      backgroundSize: 'cover',
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
      fontFamily: "Playfair Display, serif",
      padding: '20%',
     // border: 'black 1px solid',
      color: 'white',
      fontSize: '28px',
      //webkitTextStrokeWidth: '2px',
      //webkitTextStrokeColor: 'white',
      webkitTextStroke: '2px white',
      
      //backgroundColor: "wheat"
    },
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
              <Grid className={classes.contentBox} item xs={10}>
                <h1>Hi, I'm Bob</h1>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
