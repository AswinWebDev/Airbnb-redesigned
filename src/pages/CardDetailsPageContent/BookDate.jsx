import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import DiamondTwoToneIcon from "@mui/icons-material/DiamondTwoTone";

const BookDate = ({
  product,
  checkInValue,
  setCheckInValue,
  checkOutValue,
  setCheckOutValue,
}) => {
  const [dayNum, setDayNum] = useState(1);
  useEffect(() => {
    const days = checkOutValue.diff(checkInValue, "day");
    setDayNum(days);
  }, [checkInValue, checkOutValue]);

  // checking no of days //
  const [guest, setGuest] = useState(1);
  const handleChange = (event) => {
    setGuest(event.target.value);
  };

  return (
    <Box>
      {/* above box */}
      <Box
        className="priceContainer"
        padding={3}
        sx={{
          border: "5px solid rgba(255, 255, 255, .5)",
          boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box marginBottom={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h5">₹{product.price} night</Typography>
            <Typography variant="subtitle1">
              <StarIcon fontSize="20" />
              {product.stars}
            </Typography>
          </Stack>
        </Box>
        {/* form */}
        <Box textAlign="center">
          <div>
            {/*  */}

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                <Box sx={{ padding: "5px" }}>
                  <DatePicker
                    label="CHECK-IN"
                    value={checkInValue}
                    onChange={(newValue) => setCheckInValue(newValue)}
                  />
                </Box>
                <Box sx={{ padding: "5px" }}>
                  <DatePicker
                    label="CHECKOUT"
                    value={checkOutValue}
                    onChange={(newValue) => setCheckOutValue(newValue)}
                  />
                </Box>
              </DemoContainer>
            </LocalizationProvider>

            {/*  */}

            {/*  */}
          </div>
          {/* dropdown */}
          <Box sx={{ minWidth: 120 }} marginTop={1}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Guests</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={guest}
                label="Guests"
                onChange={handleChange}
              >
                <MenuItem value={1}>1 Guest</MenuItem>
                <MenuItem value={2}>2 Guest</MenuItem>
                <MenuItem value={3}>3 Guest</MenuItem>
              </Select>
              <Button
                variant="contained"
                sx={{
                  marginTop: "2%",
                  backgroundColor: "#cf305d",
                  "&:hover": {
                    backgroundColor: "#d3456d",
                  },
                }}
              >
                Reserve
              </Button>
            </FormControl>
          </Box>
          <Typography marginTop={2}>You wont be charged yet</Typography>
        </Box>
        {/* charges */}
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            marginBottom={2}
            marginTop={2}
          >
            <Typography>
              ₹{product.price} x {dayNum} night x {guest} Guest
            </Typography>
            <Typography>₹{product.price * dayNum * guest}</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography>Airbnb service fee</Typography>
            <Typography>₹706</Typography>
          </Stack>
        </Box>
        <Divider sx={{ marginTop: "2%", marginBottom: "2%" }} />
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography sx={{ fontWeight: "600", opacity: "80%" }}>
              Total before taxes
            </Typography>
            <Typography sx={{ fontWeight: "600", opacity: "80%" }}>
              ₹{product.price * dayNum * guest + 706}
            </Typography>
          </Stack>
        </Box>
      </Box>
      {/* below box */}
      <Box
        marginTop={3}
        padding={3}
        sx={{
          border: "5px solid rgba(255, 255, 255, .5)",
          boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography>
            This is a rare find.Jeremy & Erle's place on Airbnb is usually fully
            booked.
          </Typography>
          <DiamondTwoToneIcon sx={{ color: "#ba2c54", fontSize: "300%" }} />
        </Stack>
      </Box>
    </Box>
  );
};

export default BookDate;
