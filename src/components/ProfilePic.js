import React from "react";
import mypic from  '../assets/semi_focus.JPG';
import { makeStyles } from "@material-ui/core/styles";

function ProfilePic() {

    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
          alignItems: "flex-start",
          border: 'black 1px solid',
          borderRadius: '50%',
          width: '150px',
        },
      }));
    
      const classes = useStyles();


  return (
    <div>
      <img  className={classes.root} src={mypic}></img>
    </div>
  );
}

export default ProfilePic;
