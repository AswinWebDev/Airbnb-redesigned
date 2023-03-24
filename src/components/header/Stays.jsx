import {
  Backdrop,
  Box,
  Divider,
  Popover,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import StaysRegion from "./StaysRegion";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { addLocation } from "../../store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Stays = ({ handleClose, setValue, value }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // const [value, setValue] = useState(0);
  const [tempLocation, setTempLocation] = useState("flexible");
  const dispatch = useDispatch();
  return (
    <div style={{ width: "50rem" }}>
      <ButtonGroup
        orientation={isSmallScreen ? "vertical" : "horizontal"}
        variant="contained"
        aria-label="outlined primary button group"
        sx={{
          border: "1px solid grey",
          borderRadius: "500px",
        }}
      >
        <Button
          onClick={() => {
            value === 0 ? setValue(null) : setValue(0);
          }}
          sx={{
            // border: "1px solid rgba(255, 255, 255, .5)",
            borderRadius: "500px",
            backgroundColor: "white",
            color: "black",
            textTransform: "none",
            paddingRight: "3rem",
            ":hover": {
              backgroundColor: "#e6e6e6",
              color: "black",
            },
          }}
        >
          <div>
            <Typography variant="subtitle2">Where</Typography>
            <Typography variant="subtitle2" sx={{ opacity: "60%" }}>
              Search Destinations
            </Typography>
          </div>
        </Button>
        <Button
          onClick={() => {
            value === 1 ? setValue(null) : setValue(1);
          }}
          sx={{
            // border: "1px solid rgba(255, 255, 255, .5)",
            // borderRadius: "500px",
            backgroundColor: "white",
            color: "black",
            textTransform: "none",
            paddingRight: "3rem",
            ":hover": {
              backgroundColor: "#e6e6e6",
              color: "black",
            },
          }}
        >
          <div>
            <Typography variant="subtitle2">Check in</Typography>
            <Typography variant="subtitle2" sx={{ opacity: "60%" }}>
              Add dates
            </Typography>
          </div>
        </Button>
        <Button
          onClick={() => {
            value === 2 ? setValue(null) : setValue(2);
          }}
          sx={{
            // border: "1px solid rgba(255, 255, 255, .5)",
            // borderRadius: "500px",
            backgroundColor: "white",
            color: "black",
            textTransform: "none",
            paddingRight: "3rem",
            ":hover": {
              backgroundColor: "#e6e6e6",
              color: "black",
            },
          }}
        >
          <div>
            <Typography variant="subtitle2">Check out</Typography>
            <Typography variant="subtitle2" sx={{ opacity: "60%" }}>
              Add dates
            </Typography>
          </div>
        </Button>
        <Button
          sx={{
            border: "1px solid rgba(255, 255, 255, .5)",
            borderRadius: "500px",
            backgroundColor: "white",
            color: "black",
            textTransform: "none",
            // paddingRight: "3rem",
            ":hover": {
              backgroundColor: "#e6e6e6",
              color: "black",
            },
          }}
        >
          <div style={{ paddingRight: "3rem" }}>
            <Typography variant="subtitle2">Who</Typography>
            <Typography variant="subtitle2" sx={{ opacity: "60%" }}>
              Add guests
            </Typography>
          </div>
          <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
            <div
              onClick={() => {
                dispatch(addLocation(tempLocation));
                handleClose();
              }}
              style={{
                display: "flex",
                // justifyContent: "center",
                border: "2px solid transparent",
                borderRadius: "30px",
                //shadow
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
                padding: "10%",
                paddingRight: "3rem",
                //hover
                "&:hover": {
                  //shadow
                  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
                },

                // paddingLeft: "8%",
                color: "white",
                backgroundColor: "#ff385c",
                // flexShrink: 0,
                marginLeft: "auto",
                cursor: "pointer",
              }}
            >
              <SearchIcon
                fontSize="small"
                sx={{
                  marginRight: "0.8rem",
                  // "&:hover": {
                  //   paddingLeft: "5%",
                  // },
                }}
              />
              <Typography variant="subtitle2">Search</Typography>
            </div>
          </Link>
        </Button>
      </ButtonGroup>

      <div
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        {/* modal stays region */}
        {value === 0 && (
          <StaysRegion setTempLocation={setTempLocation} setValue={setValue} />
        )}
        {/* modal check in */}
        {value === 1 && <CheckIn />}
        {/* modal check out */}
        {value === 2 && <CheckOut />}
      </div>
    </div>
  );
};

export default Stays;
