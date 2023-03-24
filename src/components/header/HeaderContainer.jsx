import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import AccountMenu from "./AccountMenu";
import airbnbSvg from "../../assets/airbnb.svg";
import { Link } from "react-router-dom";
import Filter from "../Filter";
import { useSelector } from "react-redux";

const HeaderContainer = ({ handleToggle, setValue }) => {
  const allLocation = useSelector((state) => {
    return state.jsonLocation;
  });
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  return (
    <Box marginBottom={3}>
      <Stack direction="row" spacing={1} height={60} sx={{ display: "flex" }}>
        <Box
          sx={{
            margin: "0",
            marginTop: "1%",
            display: { xs: "none", sm: "block" },
            marginRight: "auto",
          }}
        >
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <img src={airbnbSvg} alt="logo" style={{ height: "75%" }} />
          </Link>
        </Box>
        {/* search */}
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
          {!isSmallScreen ? (
            <Box
              paddingTop={1}
              paddingBottom={1}
              paddingLeft={2}
              paddingRight={2}
              sx={{
                border: "5px solid rgba(255, 255, 255, .5)",
                boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",

                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgba(255, 255, 255, .5)",
                },
              }}
            >
              <div
                onClick={() => {
                  setValue(0);
                  handleToggle();
                }}
              >
                <Typography
                  marginRight={2}
                  variant="subtitle2"
                  sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                >
                  {allLocation}
                </Typography>
              </div>
              <Divider orientation="vertical" flexItem />
              <div
                onClick={() => {
                  setValue(1);
                  handleToggle();
                }}
              >
                <Typography
                  marginX={2}
                  variant="subtitle2"
                  sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                >
                  Any week
                </Typography>
              </div>
              <Typography
                marginX={2}
                variant="subtitle2"
                sx={{ whiteSpace: "nowrap", fontWeight: "bold", opacity: 0.4 }}
              >
                Add guests
              </Typography>
              <SearchIcon
                fontSize="small"
                sx={{
                  border: "2px solid transparent",
                  borderRadius: "30px",
                  padding: "2%",
                  color: "white",
                  backgroundColor: "#ff385c",
                  flexShrink: 0,
                }}
              />
            </Box>
          ) : (
            <Box
              paddingTop={1}
              paddingBottom={1}
              paddingLeft={2}
              paddingRight={3}
              // width={300}
              sx={{
                border: "5px solid rgba(255, 255, 255, .5)",
                boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
                borderRadius: "30px",
                display: "flex",
                // justifyContent: "space-between",
                alignItems: "center",

                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgba(255, 255, 255, .5)",
                },
              }}
            >
              <div onClick={handleToggle} style={{ display: "flex" }}>
                <SearchIcon fontSize="small" sx={{ marginRight: "10%" }} />
                <Typography
                  marginRight={1}
                  paddingRight={25}
                  variant="subtitle2"
                  sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                >
                  {allLocation}
                </Typography>
              </div>

              <div
                style={{
                  border: "2px solid black",

                  borderRadius: "50%",
                  padding: "4%",
                  color: "black",
                  backgroundColor: "white",
                  flexShrink: 0,
                }}
              >
                <Filter />
              </div>
            </Box>
          )}
        </div>
        {/* search */}
        <div style={{ marginLeft: "auto" }}>
          <Box
            sx={{
              alignSelf: "center",
              alignItems: "center",
              display: { xs: "none", lg: "flex", xl: "flex" },
            }}
          >
            <Typography variant="subtitle2" marginRight={2} fontWeight={600}>
              Airbnb your home
            </Typography>
            <LanguageIcon sx={{ opacity: "70%", marginRight: "1rem" }} />
            <AccountMenu />
          </Box>
        </div>
      </Stack>
    </Box>
  );
};

export default HeaderContainer;
