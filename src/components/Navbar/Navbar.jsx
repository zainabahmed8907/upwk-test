import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { makeStyles } from "@material-ui/core";
import Switch from "@mui/material/Switch";

//styles of Appbar
const useStyles = makeStyles((theme) => ({
  appbar: {
        background: "black !important",
      width:"100%"
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
}));

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const classes = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className={classes.appbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className={classes.rounded}></div>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Switch defaultChecked className={classes.switch} />
            <Box sx={{ m: 2 }}>
              <Button variant="contained" className={classes.buttons}>
                I am a photographer
              </Button>
            </Box>

            <Box sx={{ m: 2 }}>
              <Button variant="contained" className={classes.buttons}>
                I am a partner
              </Button>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box sx={{ flexGrow: 1, m: 2 }}>
                <Button variant="contained" className={classes.buttons}>
                  I am a photographer
                </Button>
              </Box>

              <Box sx={{ flexGrow: 1, m: 2 }}>
                <Button variant="contained" className={classes.buttons}>
                  I am a partner
                </Button>
              </Box>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
