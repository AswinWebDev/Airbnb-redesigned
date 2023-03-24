import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";

const Amenities = () => {
  return (
    <Box marginTop={3} marginBottom={3}>
      <Typography variant="h5" sx={{ fontWeight: "600" }}>
        What this place offers
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "2%",
        }}
      >
        <SoupKitchenIcon />
        <Typography
          variant="caption"
          sx={{ fontSize: "1rem", marginLeft: "1%" }}
        >
          Kitchen
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "1%",
        }}
      >
        <WifiOutlinedIcon />
        <Typography
          variant="caption"
          sx={{ fontSize: "1rem", marginLeft: "1%" }}
        >
          Wifi
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "1%",
        }}
      >
        <DirectionsCarOutlinedIcon />
        <Typography
          variant="caption"
          sx={{ fontSize: "1rem", marginLeft: "1%" }}
        >
          Free parking on premises
        </Typography>
      </div>
    </Box>
  );
};

export default Amenities;
