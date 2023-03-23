import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../Firebase";

const BottomBar = () => {
  const [value, setValue] = useState(0);
  const name = localStorage.getItem("name");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
    >
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <Tab
          icon={<SearchIcon />}
          label="Explore"
          sx={{
            color: "black",
            "&:selected": { color: "red" },
            "&:focus": { color: "red" },
          }}
        />
      </Link>
      <Tab
        icon={<FavoriteBorderOutlinedIcon />}
        label="Wishlists"
        sx={{
          color: "black",
          "&:selected": { color: "red" },
          "&:focus": { color: "red" },
        }}
      />
      {!name ? (
        <Tab
          icon={<AccountCircleOutlinedIcon />}
          label="Profile"
          sx={{
            color: "black",
            "&:selected": { color: "red" },
            "&:focus": { color: "red" },
          }}
          onClick={signInWithGoogle}
        />
      ) : (
        <Link to={`/account`} style={{ textDecoration: "none" }}>
          <Tab
            icon={<AccountCircleOutlinedIcon />}
            label="Profile"
            sx={{
              color: "black",
              "&.Mui-selected": { color: "red" },
              "&:focus": { color: "red" },
            }}
          />
        </Link>
      )}
    </Tabs>
  );
};

export default BottomBar;
