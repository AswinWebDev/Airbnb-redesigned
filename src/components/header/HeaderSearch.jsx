import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import AccountMenu from "./AccountMenu";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stays from "./Stays";
import airbnbSvg from "../../assets/airbnb.svg";
import { Link } from "react-router-dom";

const HeaderSearch = ({ handleClose, setValue, value }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [valueBar, setValueBar] = useState(0);
  const handleChange = (event, newValue) => {
    setValueBar(newValue);
  };

  return (
    <div className="HeaderSearch">
      <Box marginBottom={3} sx={{ backgroundColor: "#fff" }}>
        <Stack
          direction="row"
          spacing={1}
          height={60}
          justifyContent="space-between"
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
            }}
          >
            <Tabs
              value={valueBar}
              onChange={handleChange}
              aria-label="search bar"
              indicatorColor="primary"
            >
              <Tab label="Stays" />
              <Tab label="Experience" />
              {!isSmallScreen && <Tab label="Online Experience" />}
            </Tabs>
          </Box>
          {/* search */}

          <Box
            sx={{
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
        {valueBar === 0 && (
          <div>
            <div
              style={{
                display: "flex",

                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <Stays
                handleClose={handleClose}
                setValue={setValue}
                value={value}
              />
            </div>
          </div>
        )}
      </Box>
    </div>
  );
};

export default HeaderSearch;
