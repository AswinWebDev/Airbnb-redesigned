import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Aircover = () => {
  return (
    <Box marginTop={3}>
      <img
        src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
        alt="image"
        width={130}
      />
      <Typography
        variant="subtitle1"
        sx={{ opacity: "90%" }}
        marginTop={1}
        marginBottom={2}
      >
        Every booking includes free protection from Host cancellations, listing
        inaccuracies, and other issues like trouble checking in.
      </Typography>
      {/* model here */}
      <Typography marginBottom={2}>learn more</Typography>
      {/* model here */}
      <Divider />
    </Box>
  );
};

export default Aircover;
