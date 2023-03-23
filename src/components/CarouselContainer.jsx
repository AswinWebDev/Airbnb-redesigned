import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Carousel } from "react-responsive-carousel";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="arrow-button prev-button"
    style={{ position: "absolute", top: "50%", left: "10px", zIndex: 2 }}
  >
    {<ArrowBackIosNewIcon sx={{ fontSize: "0.8rem", padding: "0px" }} />}
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="arrow-button next-button"
    style={{ position: "absolute", top: "50%", right: "10px", zIndex: 2 }}
  >
    {<ArrowForwardIosIcon sx={{ fontSize: "0.8rem", padding: "0px" }} />}
  </button>
);

const CarouselContainer = ({ mov }) => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      dynamicHeight={false}
      //
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && <PrevArrow onClick={onClickHandler} />
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && <NextArrow onClick={onClickHandler} />
      }
    >
      <div>
        <img
          src={mov.homeMainPic}
          alt="carousel-1"
          style={{
            height: 300,
            objectFit: "cover",
            borderRadius: 12,
          }}
        />
      </div>
      <div>
        <img
          src={mov.carouselPic1}
          alt="carousel-2"
          style={{
            height: 300,
            objectFit: "cover",
            borderRadius: 12,
          }}
        />
      </div>
      <div>
        <img
          src={mov.carouselPic2}
          alt="carousel-3"
          style={{
            height: 300,
            objectFit: "cover",
            borderRadius: 12,
          }}
        />
      </div>
      <div>
        <img
          src={mov.carouselPic3}
          alt="carousel-4"
          style={{
            height: 300,
            objectFit: "cover",
            borderRadius: 12,
          }}
          tyle
        />
      </div>
      <div>
        <img
          src={mov.carouselPic4}
          alt="carousel-5"
          style={{
            height: 300,
            objectFit: "cover",
            borderRadius: 12,
          }}
          tyle
        />
      </div>
      <div>
        <img
          src={mov.carouselPic5}
          alt="carousel-6"
          style={{ height: 300, objectFit: "cover", borderRadius: 4 }}
          tyle
        />
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
