import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import BottomBar from "./components/BottomBar";
import CardList from "./components/CardList";
import HeaderContainer from "./components/header/HeaderContainer";
import HeaderSearch from "./components/header/HeaderSearch";
import Stays from "./components/header/Stays";
import StaysRegion from "./components/header/StaysRegion";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import AccountPage from "./pages/AccountPage";
import CardDetailsPage from "./pages/CardDetailsPage";
// import BookDate from "./pages/CardDetailsPageContent/BookDate";
import { addJson } from "./store";

const App = () => {
  const dispatch = useDispatch();
  const allJson = useSelector((state) => {
    return state.jsonData;
  });
  // console.log(allJson);

  const [iconData, setIconData] = useState();
  useEffect(() => {
    (async () => {
      const responseIcon = await axios.get(
        "https://api.npoint.io/4150eacd15ff232a759b"
      );
      // console.log(responseIcon.data.icons);
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
      <Box sx={{ padding: "0 3%" }}>
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
        </Routes>
      </Box>
    </Container>
  );
};

export default App;
