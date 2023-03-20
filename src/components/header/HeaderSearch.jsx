import { Backdrop, Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import AccountMenu from "./AccountMenu";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stays from "./Stays";
import StaysRegion from "./StaysRegion";
// import "./HeaderSearch.css";

const HeaderSearch = ({ handleClose }) => {
  // const [open, setOpen] = useState(true);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const stay = (
    <div style={{ padding: "1rem", display: "flex", justifyContent: "center" }}>
      <Stays />
    </div>
  );
  return (
    <div className="HeaderSearch">
      {/* your search content here */}

      <Box marginBottom={3} sx={{ backgroundColor: "#fff" }}>
        <Stack
          direction="row"
          spacing={1}
          height={60}
          justifyContent="space-between"
          // paddingLeft={5}
          // paddingRight={5}
          // alignItems="center"
          sx={{ display: "flex" }}
        >
          <Box sx={{ margin: "0", display: { xs: "none", sm: "block" } }}>
            <img
              src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
              alt="logo"
              style={{ height: "100%" }}
            />
          </Box>
          {/* search */}
          <Box
            paddingTop={1}
            paddingBottom={1}
            paddingLeft={2}
            paddingRight={2}
            sx={{
              display: "flex",
              alignItems: "center",
              // width: "20%",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="search bar"
              indicatorColor="primary"
            >
              <Tab label="Stays" />
              <Tab label="Experience" />
              <Tab label="Online Experience" />
            </Tabs>
          </Box>
          {/* search */}

          <Box
            sx={{
              display: "flex",
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle2" marginRight={2} fontWeight={600}>
              Airbnb your home
            </Typography>
            <LanguageIcon sx={{ opacity: "70%", marginRight: "1rem" }} />
            <AccountMenu />
          </Box>
        </Stack>
        {value === 0 && (
          <div>
            <div
              style={{
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Stays handleClose={handleClose} />
            </div>
            {/* <div
            style={{
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StaysRegion />
          </div> */}
          </div>
        )}
        {/* {value !== 0 && (
       
      )} */}
      </Box>
    </div>
  );
};

export default HeaderSearch;
