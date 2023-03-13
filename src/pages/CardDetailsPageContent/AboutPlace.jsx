import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

const AboutPlace = () => {
  return (
    <Box>
      <Typography variant="subtitle1" marginBottom={1} sx={{ opacity: "60%" }}>
        ★A stay straight out of the pages of a Ruskin Bond novel.
      </Typography>
      <Typography variant="subtitle1" marginBottom={2} sx={{ opacity: "60%" }}>
        One of the most successful Airbnbs in India
      </Typography>
      <Typography variant="subtitle1" marginBottom={2} sx={{ opacity: "60%" }}>
        • In Tandi, a village above Jibhi
      </Typography>
      <Typography variant="subtitle1" marginBottom={2} sx={{ opacity: "60%" }}>
        • Tree inside. A balcony, double bed, and a remarkably clean, modern
        bathroom.
      </Typography>
      {/* show more model here */}
      <Typography marginBottom={2}>show more {">"} </Typography>
      {/* show more model here */}
      <Divider />
    </Box>
  );
};

export default AboutPlace;
