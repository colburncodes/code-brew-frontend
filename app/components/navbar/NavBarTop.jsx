"use client";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
  styled,
  Stack,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";

const Menu = styled(Box)({
  borderBottom: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 2,
});

const MenuItem = styled(Button)({
  fontWeight: 900,
  fontSize: "12px",
  marginRight: "3px",
});

function ScrollNavBar(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 150,
  });
  return (
    <Fade in={trigger}>
      <Box role={"presentation"}>{children}</Box>
    </Fade>
  );
}

export default function NavBarTop(props) {
  return (
    <>
      <ScrollNavBar {...props}>
        <AppBar
          sx={{
            position: "fixed",
            top: "0px",
            width: "100%",
            backgroundColor: "#000 !important",
          }}
        >
          <Menu>
            <Typography
              flex={3}
              variant="h6"
              component={"div"}
              sx={{ marginLeft: "10px" }}
            >
              THE LATEST TECH TRENDS
            </Typography>
            <Box flex={1}>
              <Stack direction={"row"} m={1}>
                <MenuItem
                  color="inherit"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    marginTop: "15px",
                  }}
                >
                  Log in
                </MenuItem>
                <MenuItem
                  color="inherit"
                  sx={{
                    color: "white",
                    background: "#0049fb",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginRight: "3px",
                    height: "50%",
                    marginTop: 2,
                    fontSize: 11,
                  }}
                >
                  Sign up
                </MenuItem>
                <MenuItem
                  color="inherit"
                  sx={{
                    color: "white",
                    background: "green",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginRight: "0px",
                    height: "50%",
                    marginTop: 2,
                    fontSize: 11,
                    margin: "15.5 2px 0px 4px",
                  }}
                >
                  Create
                </MenuItem>

                <IconButton
                  color="inherit"
                  size="small"
                  edge="start"
                  sx={{ marginLeft: "2px" }}
                >
                  <SearchIcon
                    sx={{ fontSize: 30, marginTop: "10px", fontWeight: 200 }}
                  />
                </IconButton>
                <IconButton color="inherit" size="small" edge="start">
                  <MenuIcon sx={{ fontSize: 30, marginTop: "10px" }} />
                </IconButton>
              </Stack>
            </Box>
          </Menu>
        </AppBar>
      </ScrollNavBar>
    </>
  );
}
