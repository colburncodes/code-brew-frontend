"use client";
import { useState } from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import { Box, Button, styled, Stack, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import LoginRegisterModal from "../LoginRegisterModal";

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
  marginRight: "2px",
});

const Logo = styled("div")({
  fontWeight: 900,
  color: "black",
  fontSize: "34px",
  cursor: "pointer",
});

const LogoDesc = styled(Box)({
  fontWeight: 600,
  color: "black",
  fontSize: "12px",
});

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container>
        <AppBar position="static" color="transparent" elevation={0}>
          <Menu>
            <Stack direction={"row"} flex={1}>
              <Logo>CodeBrew</Logo>
              <Stack direction={"column"} marginTop={1} marginLeft={1}>
                <LogoDesc>Brewing up</LogoDesc>
                <LogoDesc>the latest tech trends</LogoDesc>
              </Stack>
            </Stack>
            <Stack direction={"row"} m={1}>
              <MenuItem sx={{ fontSize: "15px" }} color="inherit">
                Books
              </MenuItem>
              <MenuItem sx={{ fontSize: "15px" }} color="inherit">
                Videos
              </MenuItem>
              <MenuItem sx={{ fontSize: "15px" }} color="inherit">
                Year In Review
              </MenuItem>
              <Button
                onClick={handleOpen}
                color="inherit"
                sx={{
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                Log in
              </Button>
              <MenuItem
                onClick={handleOpen}
                color="inherit"
                sx={{
                  color: "#0049fb",
                  fontWeight: "bold",
                  border: "1px solid #0049fb",
                }}
              >
                Sign up
              </MenuItem>
              <MenuItem
                color="inherit"
                sx={{
                  color: "green",
                  fontWeight: "bold",
                  border: "1px solid green",
                }}
              >
                Create
              </MenuItem>
            </Stack>
            <IconButton color="inherit" size="small" edge="start">
              <SearchIcon sx={{ fontSize: 35 }} />
            </IconButton>
            <IconButton color="inherit" size="small" edge="start">
              <MenuIcon sx={{ fontSize: 35 }} />
            </IconButton>
          </Menu>
        </AppBar>
        <LoginRegisterModal open={open} handleClose={handleClose} />
      </Container>
    </>
  );
}
