import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import BottomBar from "./components/BottomBar";
import CardList from "./components/CardList";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Wishlist from "./components/Wishlist";
import AccountPage from "./pages/AccountPage";
import CardDetailsPage from "./pages/CardDetailsPage";
import { addJson } from "./store";

const App = () => {
  const dispatch = useDispatch();

  const [iconData, setIconData] = useState();
  useEffect(() => {
    (async () => {
      const responseIcon = await axios.get(
        "https://api.npoint.io/4150eacd15ff232a759b"
      );

      setIconData(responseIcon.data.icons);

      /////////--------Fetchng JSON DATA and updating in state----------////////////
      const responseData = await axios.get(
        "https://api.npoint.io/f52d07fffd3aa78c8583"
      );
      dispatch(addJson(responseData.data.data));
    })();
    /////////--------Fetchng JSON DATA and updating in state----------////////////
  }, []);
  //////////// -------- bottom bar data --------////////////
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("sm"));
  //////////// -------- bottom bar data --------////////////
  return (
    <Container maxWidth="xl">
      <Box sx={{ padding: isSmallerScreen ? "0%" : "1% 3%" }}>
        <SearchBar />
        {/* bottom bar */}
        {isSmallerScreen && (
          <div
            style={{
              position: "fixed",
              bottom: "0",
              width: "100%",
              zIndex: "999",
              backgroundColor: "white",
            }}
          >
            <BottomBar />
          </div>
        )}
        {/* bottom bar */}
        <Routes>
          <Route
            path="/"
            element={
              <Box>
                <Navbar iconData={iconData} />
                <CardList />
              </Box>
            }
          />
          <Route path="/place/:id" element={<CardDetailsPage />} />
          <Route path={"/account"} element={<AccountPage />} />
          <Route path={"/wishlist"} element={<Wishlist />} />
        </Routes>
      </Box>
    </Container>
  );
};

export default App;
