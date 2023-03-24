import { Avatar } from "@mui/material";
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
import { useStyles } from "./styles";

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
