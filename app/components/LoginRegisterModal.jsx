import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import { Button, TextField, styled } from "@mui/material";

const ModalStyle = {
  position: "absolute",
  top: "48%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
});

export default function LoginModal({ open, handleClose }) {
  const [value, setValue] = useState(0);

  function handleChange(e, newValue) {
    setValue(newValue);
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="login" {...a11yProps(0)} />
              <Tab label="register" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <StyledBox>
              <Box flex={1}>
                <Typography variant="h4">Welcome back, Coder!</Typography>
                <Typography variant="body">
                  Thank you for being a CodeBrew Subscriber. I feel lucky that I
                  get to connect with so many people like you. <br />
                  -- CodeBrew
                </Typography>
                <Typography variant="body">
                  <br />
                  <br />
                  Not a CodeBrew Subscriber yet?
                </Typography>
              </Box>
              <Box flex={1}>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="email address"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    id="outlined-basic"
                    label="password"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    sx={{ marginTop: 1, marginBottom: 1 }}
                  />
                </div>
                <Button
                  size="large"
                  sx={{
                    textAlign: "center",
                    background: "blue",
                    color: "#fff",
                    padding: 1,
                  }}
                  fullWidth
                >
                  Sign In
                </Button>
              </Box>
            </StyledBox>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <StyledBox>
              <Box flex={1}>
                <Typography variant="h4">Become a Subscriber</Typography>
                <Typography variant="body">
                  Join the CodeBrew community to get regular updates from Coding
                  on key topics like JavaScript, C#, Software Engineering and
                  more. <br />
                  -- CodeBrew
                </Typography>
                <Typography variant="body">
                  <br />
                  <br />
                  Already Joined?
                </Typography>
              </Box>
              <Box flex={1}>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="email address"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    id="outlined-basic"
                    label="password"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    sx={{ marginTop: 1, marginBottom: 1 }}
                  />
                </div>
                <Button
                  size="large"
                  sx={{
                    textAlign: "center",
                    background: "blue",
                    color: "#fff",
                    padding: 1,
                  }}
                  fullWidth
                >
                  Sign Up
                </Button>
              </Box>
            </StyledBox>
          </TabPanel>
        </Box>
      </Modal>
    </>
  );
}
