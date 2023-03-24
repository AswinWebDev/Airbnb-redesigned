import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addType, addLocation } from "../store";
import Filter from "./Filter";

const Navbar = ({ iconData }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const dispatch = useDispatch();
  const jsonTypeVal = useSelector((state) => {
    return state.jsonType;
  });
  const allLocation = useSelector((state) => {
    return state.jsonLocation;
  });

  const [value, setValue] = useState(0);
  if (iconData) {
  }

  useEffect(() => {
    if (allLocation !== "flexible") {
      setValue(null);
    }
  }, [allLocation]);

  const renderTabs = iconData?.map((icon) => {
    const imageAndTitle = (
      <Stack spacing={2}>
        <img src={icon.url} alt={icon.title} style={{ maxWidth: "1.7rem" }} />
        <Typography
          variant="caption"
          sx={{
            color: "black",
          }}
        >
          {icon.title}
        </Typography>
      </Stack>
    );
    return (
      <Tab
        label={imageAndTitle}
        onClick={() => {
          dispatch(addType(icon.title));
          dispatch(addLocation("flexible"));
        }}
        sx={{
          opacity: "0.7",
          ":hover": { opacity: "1" },
        }}
      />
    );
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {renderTabs}
      </Tabs>
      {isSmallScreen ? null : <Filter />}
    </Box>
  );
};

export default Navbar;
