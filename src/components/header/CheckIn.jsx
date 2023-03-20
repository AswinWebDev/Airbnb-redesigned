import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Grid, Typography } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { useState } from "react";
const CheckIn = () => {
  const [checkInValue, setCheckInValue] = useState(dayjs("2022-05-17"));
  const [checkOutValue, setCheckOutValue] = useState(dayjs("2022-06-10"));
  return (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        left: "27%",
        // transform: "translateX(-50%)",
        transform: "translateY(38%)",
        zIndex: "9999",
        width: "40rem",
        backgroundColor: "#fff",
        border: "1px solid rgba(255, 255, 255, .5)",
        boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
        borderRadius: "50px",
        padding: "2rem",
      }}
    >
      <div
        style={{ marginTop: "2%", display: "flex", justifyContent: "center" }}
      >
        {/* <Typography variant="h5">Select the Date...</Typography> */}
        {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          <Grid xs={12} item md={12}> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DateCalendar"]}
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <DemoItem label="Check In Date">
              <DateCalendar
                value={checkInValue}
                onChange={(newValue) => setCheckInValue(newValue)}
                sx={{ margin: "0" }}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
        {/* </Grid>
        </Grid> */}
      </div>
    </Box>
  );
};

export default CheckIn;
