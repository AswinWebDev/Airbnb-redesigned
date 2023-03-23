import { Backdrop, Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import AccountMenu from "./AccountMenu";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stays from "./Stays";
import StaysRegion from "./StaysRegion";
// import "./HeaderSearch.css";
import airbnbSvg from "../../assets/airbnb.svg";
import { Link } from "react-router-dom";

const HeaderSearch = ({ handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
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
          <Box
            sx={{
              margin: "0",
              marginTop: "1%",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <img src={airbnbSvg} alt="logo" style={{ height: "75%" }} />
            </Link>
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
              {!isSmallScreen && <Tab label="Online Experience" />}
              {/* <Tab label="Online Experience" /> */}
            </Tabs>
          </Box>
          {/* search */}

          <Box
            sx={{
              // display: "flex",
              display: { xs: "none", lg: "flex", xl: "flex" },
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
                display: "flex",
                // display: { xs: "none", lg: "flex", xl: "flex" },
                justifyContent: "center",
                padding: "1rem",
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
