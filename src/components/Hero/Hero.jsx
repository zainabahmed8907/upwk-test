import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {InfoRounded } from "@mui/icons-material";
import "./Hero.css";
import { Link } from "react-router-dom";
import { useStyles } from "./styles/styles";


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
            <InfoRounded
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
            <InfoRounded className={classes.icon} />
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
          <Link to="/picture">
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
