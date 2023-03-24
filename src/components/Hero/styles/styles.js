
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    heading: {
      color: "white",
      position: "relative",
      top: "300px",
    },
    icon: {
      backgroundColor: "white",
  
      marginTop: "210px",
      marginLeft: "-100px",
    },
    fb: {
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
    },
    findPictures: {
      backgroundColor: "black",
      height: "100px",
      padding: "30px",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      flexWrap: "wrap",
      "@media screen and (max-width:550px)": {
        justifyContent: "center",
      },
    },
    pictures_heading: {
      fontWeight: "bold",
      fontSize: "20rem",
      color: "white",
    },
    go_btn: {
      width: "200px",
      "@media screen and (max-width:550px)": {
        width: "300px",
      },
    },
    arrow_icon: {
      position: "relative",
      marginTop: "8px",
    },
  }));