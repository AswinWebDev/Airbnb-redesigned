import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import AccountMenu from "./AccountMenu";

const HeaderContainer = ({ handleToggle }) => {
  return (
    <Box marginBottom={3}>
      <Stack
        direction="row"
        spacing={1}
        height={60}
        justifyContent="space-between"
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
          onClick={handleToggle}
          paddingTop={1}
          paddingBottom={1}
          paddingLeft={2}
          paddingRight={2}
          sx={{
            border: "5px solid rgba(255, 255, 255, .5)",
            boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            // hover anchor tag
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "rgba(255, 255, 255, .5)",
            },
            // width: "20%",
          }}
        >
          <Typography
            marginRight={15}
            variant="subtitle2"
            sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
          >
            Start your search
          </Typography>
          <SearchIcon
            fontSize="small"
            sx={{
              border: "2px solid transparent",
              borderRadius: "30px",
              padding: "2%",
              color: "white",
              backgroundColor: "#ff385c",
              flexShrink: 0,
            }}
          />
        </Box>
        {/* search */}

        <Box
          sx={{ display: "flex", alignSelf: "center", alignItems: "center" }}
        >
          <Typography variant="subtitle2" marginRight={2} fontWeight={600}>
            Airbnb your home
          </Typography>
          <LanguageIcon sx={{ opacity: "70%", marginRight: "1rem" }} />
          <AccountMenu />
        </Box>
      </Stack>
    </Box>
  );
};

export default HeaderContainer;
