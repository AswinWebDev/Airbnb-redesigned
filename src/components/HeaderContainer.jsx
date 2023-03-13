import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const HeaderContainer = () => {
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
          paddingTop={1}
          paddingBottom={1}
          paddingLeft={2}
          paddingRight={1}
          sx={{
            border: "5px solid rgba(255, 255, 255, .5)",
            boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
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
            sx={{
              border: "2px solid transparent",
              borderRadius: "30px",
              padding: "1%",
              color: "white",
              backgroundColor: "#cf305d",
              flexShrink: 0,
            }}
          />
        </Box>
        {/* search */}

        <Box sx={{ alignSelf: "center" }}>
          <Typography variant="subtitle1">Air Bnb your home</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default HeaderContainer;
