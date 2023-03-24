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
    marginLeft: "-60px",
  },
  fb: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
  },
  findPictures: {
    backgroundColor: "black",
    height: "100px",
    padding: "20px",
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
      position: "absolute",
      zIndex: 1,
    width: "300px",

    },
  },
  arrow_icon: {
    position: "relative",
    marginTop: "8px",
  },
  listContainer: {
    marginLeft: "-220px",
    "@media screen and (max-width:550px)": {
      marginTop: "380px",
      marginLeft: "-310px",
      position: "absolute",
      zIndex: 99,
    },
  },
  icon2: {
    marginLeft: "200px",
    backgroundColor: "white",
  },
  list: {
    width: "100%",
    maxWidth: 200,
    color: "white",
    backgroundColor: "black",
  },
  arrow_right: {
    color: "white",
  },
  listItemText: {
    fontSize: "0.7em",
    fontWeight: "200",
  },
}));
