import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavTabs from "../NavTabs";
import treePic from "../../assets/tree_med_slate.jpg";
import PortfolioThumb from "../PortfolioThumb";
import gravityPic from "../../assets/portfolioThumbs/gravity_small.PNG";
import minePic from "../../assets/portfolioThumbs/minesweeper_small.PNG";
import primePic from "../../assets/portfolioThumbs/prime_gold_small.PNG";
import passwordPic from "../../assets/portfolioThumbs/password.PNG";
import burgerPic from "../../assets/portfolioThumbs/burger.JPG";

function Portfolio() {
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
      //container for the project tiles
      //flex stuff here does not affect the tiles since their is a child div
      //display: "flex",
      //alignItems: "stretch",
      //justifyContent: 'left',
      // flexDirection: 'row',
      margin: "5%",
      paddingLeft: "20px",
      backgroundColor: "lightgrey",
      maxHeight: "900px",
      width: "100%",
      overflow: "auto"
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
              <Grid item xs={6}>
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
        //this is what really modifies the tiles.  might be an architectural problem
      flexGrow: 1,

      padding: "10px",
      // border: 'black 1px solid',

      overflow: "auto",

      display: "flex",
      // alignItems: "flex-start",
      //alignItems: 'stretch',
      //justifyContent: 'left',
      flexDirection: "column",
      overflow: "auto"
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
      <hr />
      <PortfolioThumb
        image={minePic}
        title="Minesweeper"
        link="https://bgotchall.github.io/minesweeper/"
        description="My attempt to reproduce the classic windows Minesweeper game"
      />
      <hr />
      <PortfolioThumb
        image={primePic}
        title="Prime Gold Calculator"
        link="https://bgotchall.github.io/prime_calc/"
        description='This utility calculates all possible answers for the Math Pentathlon game "Prime Gold".  Three 20 diced dice are thrown, and the player may use any operators on those numbers to arrive at a desired number.  This utility finds all such answers and highlights valid plays on the game board.'
      />

      <hr />
      <PortfolioThumb
        image={passwordPic}
        title="Password Generator"
        link="https://bgotchall.github.io/password/"
        description='A cute little utility to generate passwords'
      />

      <hr />
      <PortfolioThumb
        image={burgerPic}
        title="'Eat the Burger'"
        link="https://secure-river-12289.herokuapp.com/"
        description='A dumb little demo that uses a SQL backend'
      />
    </div>
  );
}

export default Portfolio;
