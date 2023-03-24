import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Grid, Typography } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

const YourCalender = ({
  checkInValue,
  setCheckInValue,
  checkOutValue,
  setCheckOutValue,
}) => {
  return (
    <div style={{ marginTop: "2%" }}>
      <Typography variant="h5">Select the Date...</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid xs={12} item md={6}>
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
        </Grid>
        <Grid xs={12} item md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DateCalendar"]}
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <DemoItem label="Check Out Date">
                <DateCalendar
                  value={checkOutValue}
                  onChange={(newValue) => setCheckOutValue(newValue)}
                  sx={{ margin: "0" }}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
      </Grid>
    </div>
  );
};

export default YourCalender;
