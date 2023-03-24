import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  rounded: {
    width: "30px",
    height: "30px",
    border: "6px solid white",
    borderRadius: "50%",
    "@media screen and (max-width:550px)": {
      marginLeft: "-40px",
    },
  },
  intro: {
    backgroundColor: "black",
    height: "130px",
    padding: "40px",
    display: "flex",
    justifyContent: "space-between",
    "@media screen and (max-width:550px)": {
      padding: "100px",
    },
  },
  fav: {
    backgroundColor: "black",
    color: "red",
    position: "relative",
    top: "10px",
  },
  avatar: {
    backgroundColor: "yellow !important",
    color: "black !important",
    marginLeft: "30px",
    marginTop: "-20px",
    zIndex: 2,
    "@media screen and (max-width:550px)": {
      marginLeft: "200px",
      position: "absolute",
      top: "-70px",
    },
  },
  message: {
    color: "white",
    fontSize: "10px",
    marginTop: "-40px",
    marginLeft: "50px",
    "@media screen and (max-width:550px)": {
      marginLeft: "-8px",
      fontSize: "15px",
    },
  },
  partner: {
    display: "flex",
  },

  p_login: {
    color: "white",
    marginRight: "70px",
  },
  flag: {
    "@media screen and (max-width:550px)": {
      display: "none",
    },
  },
  policy: {
    backgroundColor: "black",

    display: "flex",
    justifyContent: "space-between",
    color: "white",
    "@media screen and (max-width:550px)": {
      display: "block",
    },
  },
  p: {
    marginLeft: "5px",
  },
  iconList: {
    color: "blue",
    backgroundColor: "black",
  },
  icon: {
    marginRight: "10px",
  },
  text: {
    marginBottom: "10px",
  },
}));