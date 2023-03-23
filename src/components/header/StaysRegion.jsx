import {
  Backdrop,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation } from "../../store";

const StaysRegion = ({ setTempLocation, setValue }) => {
  const isSmallScreen = useMediaQuery("(max-width: 800px)");
  const dispatch = useDispatch();
  const allLocation = useSelector((state) => {
    return state.jsonLocation;
  });

  // console.log(allLocation);

  const region = [
    {
      id: 1,
      area: "flexible",
      img: "https://img.freepik.com/premium-vector/grey-political-world-map-vector-isolated-illustration_175838-1418.jpg?w=996",
    },
    {
      id: 2,
      area: "europe",
      img: "https://img.freepik.com/premium-photo/europe-map-communication-background-illustration-gray-communications-computer_208588-2183.jpg?w=740",
    },
    {
      id: 3,
      area: "russia",
      img: "https://img.freepik.com/premium-vector/high-quality-map-with-borders_97886-16280.jpg?w=740",
    },
    {
      id: 4,
      area: "brazil",
      img: "https://as2.ftcdn.net/v2/jpg/00/37/39/97/1000_F_37399794_Ox6KBucaqOHYqMvy0EHDg3xl6vkU4CLJ.jpg",
    },
    {
      id: 5,
      area: "australia",
      img: "https://as2.ftcdn.net/v2/jpg/00/98/36/99/1000_F_98369918_sG6F7mZzHEbwnzTr3NGvEdBRUXPdxuZg.jpg",
    },
    {
      id: 6,
      area: "canada",
      img: "https://as2.ftcdn.net/v2/jpg/02/56/04/47/1000_F_256044712_GQJdj2dVzkbUSy0ETQsJ56ntRKuWbHEh.jpg",
    },
    {
      id: 7,
      area: "italy",
      img: "https://as1.ftcdn.net/v2/jpg/01/03/55/84/1000_F_103558485_HSNbV4Lswu5BN5Hangj5rH4GvCHhvKm3.jpg",
    },
    {
      id: 8,
      area: "spain",
      img: "https://as2.ftcdn.net/v2/jpg/00/97/27/99/1000_F_97279984_sLtN7LJvavISmtO7c1lqvT8DzFiIaJoI.jpg",
    },
    {
      id: 9,
      area: "usa us",
      img: "https://img.freepik.com/premium-vector/united-states-america-map-usa_92497-383.jpg?w=740",
    },
    {
      id: 10,
      area: "france",
      img: "https://as1.ftcdn.net/v2/jpg/01/12/67/74/1000_F_112677457_59JE7lV3YsJ14fCgBKJFdPrLl9degqzc.jpg",
    },
    {
      id: 11,
      area: "india",
      img: "https://as1.ftcdn.net/v2/jpg/02/94/31/74/1000_F_294317404_UoC5t6Dujr7h3MlVGeNjsYj8N2PxhVw1.jpg",
    },
  ];
  const renderedRegion = region.map((mov) => {
    // console.log(mov);
    return (
      <Grid key={mov.id} xs={12} sm={3} item md={3}>
        <Card sx={{ maxWidth: 150 }}>
          <CardActionArea
            onClick={() => {
              setTempLocation(mov.area);
              setValue(null);
              // dispatch(addLocation(mov.area));
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={mov.img}
              alt="map image"
            />
            <CardContent>
              <Typography gutterBottom variant="subtitle1" component="div">
                {mov.area}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });
  return (
    // <>
    // <Backdrop open={isBoxActive} sx={{ zIndex: 9998, backgroundColor: "rgba(0, 0, 0, 0.5)" }} onClick={handleBoxToggle} />
    //   <Box> ...</Box>
    // </>
    <div>
      {!isSmallScreen ? (
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "23%",
            // transform: "translateX(-50%)",
            transform: "translateY(23%)",
            zIndex: "9999",
            width: "40rem",
            backgroundColor: "#fff",
            border: "1px solid rgba(255, 255, 255, .5)",
            boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
            borderRadius: "50px",
            padding: "2rem",
          }}
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            paddingTop={1}
            paddingBottom={1}
            paddingLeft={2}
            paddingRight={2}
          >
            {renderedRegion}
          </Grid>
        </Box>
      ) : (
        <Box
          sx={{
            // position: "absolute",
            // top: "0",
            // left: "23%",
            // transform: "translateX(-50%)",
            // transform: "translateY(23%)",
            // zIndex: "9999",
            // width: "40rem",
            backgroundColor: "#fff",
            border: "1px solid rgba(255, 255, 255, .5)",
            boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
            borderRadius: "50px",
            padding: "2rem",
          }}
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            paddingTop={1}
            paddingBottom={1}
            paddingLeft={2}
            paddingRight={2}
          >
            {renderedRegion}
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default StaysRegion;
