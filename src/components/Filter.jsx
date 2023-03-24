import { forwardRef, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { Divider, Slider, Typography, useMediaQuery } from "@mui/material";
import { Box, display } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { useDispatch } from "react-redux";
import { addPrice } from "../store";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// slider function //
function valuetext(value) {
  return `${value}°C`;
}
const minDistance = 10;
// slider function //
const Filter = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // slider functions and values //
  const [value1, setValue1] = useState([0, 100]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  // slider functions and values //
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // submit values //
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addPrice(value1));
    setOpen(false);
  };

  return (
    <div>
      {!isSmallScreen ? (
        <div
          variant="outlined"
          onClick={handleClickOpen}
          style={{
            display: "flex",
            border: "1px solid rgba(255, 255, 255, .5)",
            boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
            padding: "0.5rem",
            borderRadius: "8px",
            justifyContent: "space-between",
            alignItems: "center",
            width: "4rem",
          }}
        >
          <SyncAltIcon style={{ fontSize: "80%" }} />
          Filters
        </div>
      ) : (
        <div onClick={handleClickOpen}>
          <SyncAltIcon style={{ fontSize: "80%" }} />
        </div>
      )}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            border: "1px solid rgba(255, 255, 255, .5)",
            boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
            // borderRadius: "50px",
            padding: isSmallScreen ? "1rem" : "2rem",
            // width: "40rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <div
              onClick={handleClose}
              style={{
                cursor: "pointer",
              }}
            >
              <CloseIcon />
            </div>
            <Typography variant="h6">Filter</Typography>
            <div></div>
          </div>
          <Divider />
          <div style={{ marginBottom: "2rem" }}></div>
          <Typography variant="h5">Price Range</Typography>
          <Typography variant="subtitle1">
            The average nightly price is ‎₹11,666
          </Typography>
          {/* slider here */}
          <Box sx={{ width: 300, marginLeft: "auto", marginRight: "auto" }}>
            <Slider
              getAriaLabel={() => "Minimum distance"}
              value={value1}
              onChange={handleChange1}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              disableSwap
            />
          </Box>
          {/* slider here */}
          {/* price boxes */}
          <div style={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexWrap: "wrap" }} marginRight={3}>
              <div>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                  <InputLabel htmlFor="filled-adornment-amount">
                    min price
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">₹</InputAdornment>
                    }
                    value={value1[0] * 100}
                    onChange={(e) => {
                      setValue1([e.target.value / 100, value1[1]]);
                    }}
                  />
                </FormControl>
              </div>
            </Box>
            {/*  */}
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <div>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                  <InputLabel htmlFor="filled-adornment-amount">
                    max price
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">₹</InputAdornment>
                    }
                    value={value1[1] * 100}
                    onChange={(e) => {
                      setValue1([value1[0], e.target.value / 100]);
                    }}
                  />
                </FormControl>
              </div>
            </Box>
          </div>
        </Box>
        {/* clear and submit here */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <div
            onClick={() => {
              setValue1([0, 100]);
            }}
            style={{
              cursor: "pointer",
              marginLeft: "1rem",
              marginTop: "1rem",
              textDecoration: "underline",
              border: "5px solid transparent",
            }}
          >
            Clear all
          </div>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              backgroundColor: "#333333",
              "&:hover": { backgroundColor: "black" },
              marginRight: "1rem",
              marginTop: "1rem",
            }}
          >
            Show stays
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default Filter;
