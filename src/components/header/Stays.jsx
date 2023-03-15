import { Box, Divider, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Stays = () => {
  return (
    <div style={{ width: "50rem" }}>
      <Box
        paddingTop={1}
        paddingBottom={1}
        paddingLeft={2}
        paddingRight={2}
        sx={{
          border: "1px solid rgba(255, 255, 255, .5)",
          boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          // width: "20%",
        }}
      >
        {/* where */}
        <div
          style={{
            border: "1px solid rgba(255, 255, 255, .5)",
            padding: "0.5%",
            paddingRight: "2%",
            marginRight: "3rem",
            // borderRadius: "50%",
          }}
        >
          <Typography variant="subtitle2">Where</Typography>
          <Typography variant="subtitle2" sx={{ opacity: "60%" }}>
            Search Destinations
          </Typography>
        </div>
        <Divider orientation="vertical" flexItem />

        {/* check in */}
        <div
          style={{
            border: "1px solid rgba(255, 255, 255, .5)",
            padding: "0.5%",
            paddingLeft: "2%",
            paddingRight: "2%",
            marginRight: "3rem",
            // borderRadius: "50%",
          }}
        >
          <Typography variant="subtitle2">Check in</Typography>
          <Typography variant="subtitle2" sx={{ opacity: "60%" }}>
            Add dates
          </Typography>
        </div>
        <Divider orientation="vertical" flexItem />
        {/* check out */}
        <div
          style={{
            border: "1px solid rgba(255, 255, 255, .5)",
            padding: "0.5%",
            paddingLeft: "2%",
            paddingRight: "2%",
            marginRight: "3rem",
            // borderRadius: "50%",
          }}
        >
          <Typography variant="subtitle2">Check out</Typography>
          <Typography variant="subtitle2" sx={{ opacity: "60%" }}>
            Add dates
          </Typography>
        </div>
        <Divider orientation="vertical" flexItem />
        {/* who add guests */}
        <div
          style={{
            border: "1px solid rgba(255, 255, 255, .5)",
            padding: "0.5%",
            paddingLeft: "2%",
            paddingRight: "2%",
            marginRight: "3rem",
            // borderRadius: "50%",
          }}
        >
          <Typography variant="subtitle2">Who</Typography>
          <Typography variant="subtitle2" sx={{ opacity: "60%" }}>
            Add guests
          </Typography>
        </div>
        <SearchIcon
          fontSize="small"
          sx={{
            border: "2px solid transparent",
            borderRadius: "30px",
            padding: "1%",
            color: "white",
            backgroundColor: "#ff385c",
            flexShrink: 0,
            marginLeft: "auto",
          }}
        />
      </Box>
    </div>
  );
};

export default Stays;
