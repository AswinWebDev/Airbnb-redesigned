import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addType, addLocation } from "../store";

const Navbar = ({ iconData }) => {
  const dispatch = useDispatch();
  const jsonTypeVal = useSelector((state) => {
    return state.jsonType;
  });
  const allLocation = useSelector((state) => {
    return state.jsonLocation;
  });
  // console.log(typeof jsonTypeVal);
  const [value, setValue] = useState(0);
  if (iconData) {
    // console.log(iconData[0].title);
  }
  //   console.log(iconData.title);

  useEffect(() => {
    if (allLocation !== "flexible") {
      setValue(null);
    }

    // allLocation !== "flexible" ? setValue(null) : null;
  }, [allLocation]);

  const renderTabs = iconData?.map((icon) => {
    // console.log();
    const imageAndTitle = (
      <Stack spacing={2}>
        <img src={icon.url} alt={icon.title} style={{ maxWidth: "2rem" }} />
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
  //   console.log(renderTabs);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {renderTabs}
      </Tabs>
    </Box>
  );
};

export default Navbar;
