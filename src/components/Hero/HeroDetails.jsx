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
import { InfoRounded } from "@mui/icons-material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Hero.css";
import Person1 from "../../assets/images/person-1.jpg";
import Person2 from "../../assets/images/person-2.jpg";
import { ArrowRightAltRounded } from "@mui/icons-material";
import { useStyles } from "./styles/detailstyles";
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
              <InfoRounded className={classes.icon} />
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
                <InfoRounded className={classes.icon2} />
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
