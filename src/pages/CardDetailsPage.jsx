import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/system";
import {
  AppBar,
  Avatar,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Amenities from "./CardDetailsPageContent/Amenities";
import Aircover from "./CardDetailsPageContent/Aircover";
import AboutPlace from "./CardDetailsPageContent/AboutPlace";
import DatePicker from "./CardDetailsPageContent/DatePicker";
import YourCalender from "./CardDetailsPageContent/DatePicker";
import BookDate from "./CardDetailsPageContent/BookDate";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import HeaderContainer from "../components/header/HeaderContainer";
import SearchBar from "../components/SearchBar";
import CarouselContainer from "../components/CarouselContainer";

const CardDetailsPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const allJson = useSelector((state) => {
    return state.jsonData;
  });
  const params = useParams();
  const product = allJson.filter((mov) => {
    return mov.id == params.id;
  })[0];
  // console.log(product);
  // images //
  const itemData = [
    {
      img: product.carouselPic1,
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: product.carouselPic2,
      title: "Burger",
    },
    {
      img: product.carouselPic3,
      title: "Camera",
    },
    {
      img: product.carouselPic4,
      title: "Coffee",
      // cols: 2,
    },
    {
      img: product.carouselPic5,
      title: "Hats",
      // cols: 2,
    },
  ];

  // images //

  // calender states //
  const [checkInValue, setCheckInValue] = useState(dayjs("2022-05-17"));
  const [checkOutValue, setCheckOutValue] = useState(dayjs("2022-05-18"));
  // calender states //
  return (
    <Box sx={{ padding: "0 3%" }}>
      {/* <SearchBar /> */}
      <Box>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: "1.3rem", fontWeight: "600" }}
        >
          Stunning Place To Stay in{" "}
          {product.location.charAt(0).toUpperCase() + product.location.slice(1)}
        </Typography>
        <Typography>
          *Superhost{" "}
          <strong style={{ textDecoration: "underline" }}>
            {product.name.charAt(0).toUpperCase() + product.name.slice(1)},{" "}
            {product.location.charAt(0).toUpperCase() +
              product.location.slice(1)}
          </strong>
        </Typography>
      </Box>
      {!isSmallScreen ? (
        <Box>
          <ImageList variant="quilted" cols={4} rowHeight={200}>
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img src={item.img} alt={item.title} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      ) : (
        <CarouselContainer mov={product} />
      )}

      {/* under image  */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Entire Villa hosted by Ash
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="caption" sx={{ fontSize: "1rem" }}>
                3 guests . 1 bedroom . 2 beds . 1 bathroom
              </Typography>
              <Avatar>A</Avatar>
            </div>
            <Divider sx={{ marginTop: "22px" }} />
            <Box marginBottom={3} marginTop={2}>
              {/* dedicated workspace..... */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <StoreMallDirectoryOutlinedIcon />
                <Typography
                  variant="caption"
                  sx={{ fontSize: "1rem", marginLeft: "1%" }}
                >
                  Dedicated workspace
                  <Typography variant="subtitle2" sx={{ opacity: "60%" }}>
                    A common area with wifi that’s well suited for working.
                  </Typography>
                </Typography>
              </div>
              {/*  */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: "2%",
                }}
              >
                <LocationOnOutlinedIcon />
                <Typography
                  variant="caption"
                  sx={{ fontSize: "1rem", marginLeft: "1%" }}
                >
                  Great location
                  <Typography variant="subtitle2" sx={{ opacity: "60%" }}>
                    90% of recent guests gave the location a 5-star rating.
                  </Typography>
                </Typography>
              </div>
              {/*  */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: "2%",
                }}
              >
                <CalendarMonthOutlinedIcon />
                <Typography
                  variant="caption"
                  sx={{ fontSize: "1rem", marginLeft: "1%" }}
                >
                  Free cancellation before 23 Apr
                </Typography>
              </div>
            </Box>
            <Divider />
            {/* aircover */}
            <Aircover />
            {/* show more */}
            <AboutPlace />
            {/* what this place offers */}
            <Amenities />
            <Divider />
            {/* datepicker */}
            <YourCalender
              checkInValue={checkInValue}
              checkOutValue={checkOutValue}
              setCheckInValue={setCheckInValue}
              setCheckOutValue={setCheckOutValue}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <AppBar
            position="sticky"
            sx={{
              backgroundColor: "white",
              color: "black",
            }}
          >
            <BookDate
              product={product}
              checkInValue={checkInValue}
              checkOutValue={checkOutValue}
              setCheckInValue={setCheckInValue}
              setCheckOutValue={setCheckOutValue}
            />
          </AppBar>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardDetailsPage;
