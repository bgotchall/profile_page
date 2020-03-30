import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavTabs from "../NavTabs";
import treePic from "../../assets/tree_med_slate.jpg";
import hikePic from "../../assets/hiketrail_slate.jpg";
import PortfolioThumb from "../PortfolioThumb";
import gravityPic from "../../assets/portfolioThumbs/gravity_small.PNG";
import minePic from '../../assets/portfolioThumbs/minesweeper_small.PNG';
import primePic from '../../assets/portfolioThumbs/prime_gold_small.PNG'

function Portfolio() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      alignItems: "flex-start",
      
      // border: 'black 1px solid',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      
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
    //container for the project tiles
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    flexDirection: 'column',
      margin: "5%",
      paddingLeft: "20px",
      backgroundColor: "lightgrey",
      maxHeight: "900px",
      overflow: 'auto',
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
                <Paper className={classes.contentBox}>
                  
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
      padding: "10px",
      // border: 'black 1px solid',
      
      overflow: 'auto',
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PortfolioThumb
      
        image={gravityPic}
        title="Gravity Study"
        link="https://bgotchall.github.io/gravity/"
        description="A fun little animation experiment.  I animate a ball that is accelerated by gravity of a body of your choice."
      />

      <PortfolioThumb
        image={minePic}
        title="Minesweeper"
        link="https://bgotchall.github.io/minesweeper/"
        description="My attempt to reproduce the classic windows Minesweeper game"
      />
       <PortfolioThumb
        image={primePic}
        title="Prime Gold Calculator"
        link="https://bgotchall.github.io/prime_calc/"
        description='This utility calculates all possible answers for the Math Pentathlon game "Prime Gold".  Three 20 diced dice are thrown, and the player may use any operators on those numbers to arrive at a desired number.  This utility finds all such answers and highlights valid plays on the game board.'
      />
    </div>
  );
}

export default Portfolio;
