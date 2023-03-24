import React from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Hero.css";
import Person1 from "../../assets/images/person-1.jpg";
import Person2 from "../../assets/images/person-2.jpg";
import { ArrowRightAltRounded } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
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
    width: "300px",
    "@media screen and (max-width:550px)": {
      position: "absolute",
      zIndex: 1,
    },
  },
  arrow_icon: {
    position: "relative",
    marginTop: "8px",
  },
  listContainer: {
    marginLeft: "-220px",
    "@media screen and (max-width:550px)": {
      marginTop: "610px",
      marginLeft: "-320px",
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
const HeroDetails = () => {
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
          <Box>
            <Box
              sx={{
                display: {
                  md: "block",
                  sm: "none",
                  xs: "none",
                },
              }}
            >
              <FacebookRoundedIcon className={classes.icon} />
            </Box>
            <Box className={classes.listContainer}>
              <Box
                sx={{
                  display: {
                    md: "none",
                    sm: "block",
                    xs: "block",
                  },
                }}
              >
                {" "}
                <FacebookRoundedIcon className={classes.icon2} />
              </Box>

              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.list}
              >
                <ListItem
                  disablePadding
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                      <ArrowRightAltRounded className={classes.arrow_right} />
                    </IconButton>
                  }
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <Avatar alt="person1" src={Person1} />
                    </ListItemIcon>

                    <Box>
                      <ListItemText
                        primary="Establishnt"
                        classes={{ primary: classes.listItemText }}
                      />
                      <ListItemText
                        primary="Le Bajo"
                        classes={{ primary: classes.listItemText }}
                      />
                    </Box>
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                      <ArrowRightAltRounded className={classes.arrow_right} />
                    </IconButton>
                  }
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <Avatar alt="Remy Sharp" src={Person2} />
                    </ListItemIcon>
                    <Box>
                      <ListItemText
                        primary="Shot By"
                        classes={{ primary: classes.listItemText }}
                      />
                      <ListItemText
                        primary="Jamie "
                        classes={{ primary: classes.listItemText }}
                      />
                    </Box>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
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
          <Button variant="contained" className={classes.go_btn}>
            Go{" "}
            <span className={classes.arrow_icon}>
              <ArrowRightAltIcon />
            </span>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HeroDetails;
