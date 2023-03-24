import React from "react";
import { Grid, Typography, Box, Button, Avatar } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Hero.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
    width: "300px",
  },
  arrow_icon: {
    position: "relative",
    marginTop: "8px",
  },
}));
const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <div className="hero">
        <Grid container>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                md: {
                  flexGrow: 1,
                },
                lg: {
                  flex: 1,
                },
              },
            }}
          >
            <Typography
              align="center"
              level="h1"
              color="white"
              fontSize="45px"
              top="270px"
              position="relative"
            >
              Soirees
            </Typography>
            <Typography
              align="center"
              level="p"
              mb="4"
              fontSize="20px"
              color="white"
              marginTop="290px"
            >
              We capture the fun and respect your privacy
            </Typography>
          </Box>
          <Box
            sx={{
              display: {
                md: "none",
                sm: "block",
              },
            }}
          >
            <FacebookRoundedIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "410px",
                marginLeft: "-240px",
                backgroundColor: "white",
              }}
            />
          </Box>
          <Box
            sx={{
              display: {
                md: "block",
                xs: "none",
                sm: "none",
                lg: "block",
              },
            }}
          >
            <FacebookRoundedIcon className={classes.icon} />
          </Box>
        </Grid>
      </div>
      <Box className={classes.findPictures} mb="10">
        <Box>
          <Typography
            level="h1"
            fontSize="40px"
            color="white"
            fontWeight="bolder"
          >
            Find My Pictures
          </Typography>
        </Box>
        <Box>
          <Link to="/picture-details">
            <Button variant="contained" className={classes.go_btn}>
              Go{" "}
              <span className={classes.arrow_icon}>
                <ArrowRightAltIcon />
              </span>
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
