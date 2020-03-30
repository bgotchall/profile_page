
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '30px',
   // height: '700px',
  },
  media: {
    height: 140,
  },
});

export default function PortfolioThumb(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
          component="img"
          alt={props.title}
          height="200"
          link={props.link}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="success" href={props.link}>
          Try it
        </Button>
        
      </CardActions>
    </Card>
  );
}


















// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";

// function PortfolioThumb(props) {
//   const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       flexDirection: "column",
//       width: '200px',
//       margin: '20px',
//       // width: "100%",
//       //textAlign: "center",
//       //margin: 10% 0;
//      // minHeight: "200px",
//       //alignItems: "center"
//     },
//     image:{
//         width: '75%',
//     }
//   }));

//   const classes = useStyles();
  
//   return (
//     <Paper variant="elevation3" className={classes.root } >
//         <h3>{props.title}</h3>
//       <img src={props.image} className={classes.image}   /> 
//     </Paper>
//   );
// }

// export default PortfolioThumb;
