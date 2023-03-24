import { makeStyles } from "@material-ui/core";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Twitter,
  LinkedIn,
  Facebook,
  Instagram,
  GitHub,
} from "@mui/icons-material";
import flag from "../../assets/images/britain.jpg";
const useStyles = makeStyles(() => ({
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
const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.intro}>
        <Box>
          <div className={classes.rounded}></div>

          <Avatar className={classes.avatar}>N</Avatar>
          <p className={classes.message}>
            From Paris with <FavoriteIcon className={classes.fav} />{" "}
          </p>
        </Box>
        <Box display="flex">
          <div className={classes.partner}>
            <p className={classes.p_login}>Partner Login</p>
            <div className={classes.flag}>
              <img src={flag} width="20" height="20" alt="flag" />
            </div>
          </div>
        </Box>
      </div>
      <div className={classes.policy}>
        <div className={classes.text}>
          <p> &copy;soirres All rights reserved</p>
        </div>
        <div className={classes.text}>
          Terms:<span className={classes.p}>Privacy Policy</span>
        </div>
        <div className={classes.iconList}>
          <Twitter className={classes.icon} />
          <Facebook className={classes.icon} />
          <Instagram className={classes.icon} />
          <GitHub className={classes.icon} />
          <LinkedIn className={classes.icon} />
        </div>
      </div>
    </>
  );
};

export default Footer;
