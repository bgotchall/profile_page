import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavTabs from '../NavTabs';
import treePic from '../../assets/tree.jpg';
import hikePic from '../../assets/hiketrail.jpg';


function Home() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      alignItems: "flex-start",
      border: 'black 1px solid',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      border: 'black 1px solid',
    },
    mainPic: {
      height: '1000px',
      backgroundImage:  `url(${hikePic})`,
      backgroundRepeat: 'no-repeat',
      border: 'black 1px solid',
      alignItems:"flex-start",
      
    },
    sideBar: {
      height: '1000px',
      backgroundColor: "lightgrey",
    },
  }));

  const classes = useStyles();

  return (
    <>
     



      <div id="id0" className={classes.root}>
        <Grid id= "id1" container spacing={0}>
          <Grid className={classes.sideBar} item xs={2}>
            <NavTabs ></NavTabs>
          </Grid>
          <Grid item xs={10}>
            <div className={classes.mainPic}></div>
          </Grid>
          
        </Grid>
      </div>
    </>
  );
}

export default Home;