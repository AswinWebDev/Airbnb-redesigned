import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { addWishList, removeWishList } from "../store";
import "./CardList.css";
import { Link } from "react-router-dom";
import CarouselContainer from "./CarouselContainer";

const CardList = () => {
  const allJson = useSelector((state) => {
    return state.jsonData;
  });

  const jsonTypeVal = useSelector((state) => {
    return state.jsonType;
  });

  const allLocation = useSelector((state) => {
    return state.jsonLocation;
  });
  // price filter //
  const priceFilter = useSelector((state) => {
    return state.filterPrice;
  });

  // wishlist //
  const wishlistItems = useSelector((state) => {
    return state.wishList;
  });

  const dispatch = useDispatch();
  const handleWishList = (mov) => {
    wishlistItems.includes(mov)
      ? dispatch(removeWishList(mov))
      : dispatch(addWishList(mov));
  };

  // wishlist //
  const rendered = allJson
    .filter((mov) => {
      if (allLocation !== "flexible") {
        return mov.location === allLocation;
      }
      return mov.type === jsonTypeVal[0];
    })
    .filter((mov) => {
      return (
        mov.price <= priceFilter[1] * 100 && mov.price >= priceFilter[0] * 100
      );
    })

    .map((mov) => {
      return (
        <Grid xs={12} sm={4} item md={3}>
          <Card sx={{ maxWidth: 345, position: "relative" }}>
            <div
              onClick={() => {
                handleWishList(mov);
              }}
              style={{
                position: "absolute",
                top: "2%",
                right: "4%",
                zIndex: "9",
                opacity: "0.8",
              }}
            >
              <FavoriteSharpIcon
                style={{
                  color: wishlistItems.includes(mov) ? "red" : "inherit",
                }}
              />
            </div>
            {/* carousel */}
            <CarouselContainer mov={mov} />
            {/* carousel */}
            <Link
              to={`/place/${mov.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {mov.name},{" "}
                  {mov.location.charAt(0).toUpperCase() + mov.location.slice(1)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {mov.type.charAt(0).toUpperCase() + mov.type.slice(1)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1-7 Mar
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <strong>₹{mov.price} </strong>night
                </Typography>
              </CardContent>
            </Link>
            <CardActions></CardActions>
          </Card>
        </Grid>
      );
    });
  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem 0rem",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {rendered}
      </Grid>
    </Box>
  );
};

export default CardList;
