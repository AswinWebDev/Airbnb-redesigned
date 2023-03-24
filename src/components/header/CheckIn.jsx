import { Box, useMediaQuery } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { useState } from "react";
const CheckIn = () => {
  const isSmallScreen = useMediaQuery("(max-width: 800px)");
  const [checkInValue, setCheckInValue] = useState(dayjs("2022-05-17"));
  return (
    <div>
      {!isSmallScreen ? (
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "27%",

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
            style={{
              marginTop: "2%",
              display: "flex",
              justifyContent: "center",
            }}
          >
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
          </div>
        </Box>
      ) : (
        <Box
          sx={{
            zIndex: "9999",
            width: "15rem",
            backgroundColor: "#fff",
            border: "1px solid rgba(255, 255, 255, .5)",
            boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
            borderRadius: "50px",
            padding: "1rem",
          }}
        >
          <div
            style={{
              marginTop: "2%",
              display: "flex",
              justifyContent: "center",
            }}
          >
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
          </div>
        </Box>
      )}
    </div>
  );
};

export default CheckIn;
