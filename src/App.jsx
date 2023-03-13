import { Box, Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CardList from "./components/CardList";
import HeaderContainer from "./components/HeaderContainer";

import Navbar from "./components/Navbar";
import CardDetailsPage from "./pages/CardDetailsPage";
// import BookDate from "./pages/CardDetailsPageContent/BookDate";
import { addJson } from "./store";

const App = () => {
  const dispatch = useDispatch();
  const allJson = useSelector((state) => {
    return state.jsonData;
  });

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
  return (
    <Container maxWidth="xl">
      <Box sx={{ padding: "0 3%" }}>
        <Routes>
          <Route
            path="/"
            element={
              <Box>
                <HeaderContainer />
                <Navbar iconData={iconData} />
                <CardList />
              </Box>
            }
          />
          <Route path="/place/:id" element={<CardDetailsPage />} />
        </Routes>
      </Box>
    </Container>
  );
};

export default App;
