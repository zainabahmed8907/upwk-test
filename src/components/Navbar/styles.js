import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "black !important",
    width: "100%",
    margin: 0,
  },
  rounded: {
    width: "30px",
    height: "30px",
    border: "8px solid white",
    borderRadius: "50%",
  },
  buttons: {
    margin: "5px",
  },
  switch: {
    position: "relative",
    marginTop: "12px",
  },
  mobileMenu: {
    position: "relative",
    marginLeft:"-80px"
  },
}));
