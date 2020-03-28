import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavTabs from "../NavTabs";
import treePic from "../../assets/tree.jpg";
import hikePic from "../../assets/hiketrail_slate.jpg";

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
      padding: '20%',
      border: 'black 1px solid',
      backgroundColor: "wheat"
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
                <h1>I am content</h1>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
