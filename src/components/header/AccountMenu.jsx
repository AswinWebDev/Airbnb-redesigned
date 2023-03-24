import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useState } from "react";
import { signInWithGoogle, signOutUser } from "../../Firebase";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetWishList } from "../../store";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const name = localStorage.getItem("name");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          border: "1px solid rgba(255, 255, 255, .5)",
          boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
          borderRadius: "30px",
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <DehazeIcon />
            <Avatar sx={{ width: 32, height: 32, marginLeft: "20px" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {!name ? (
          <>
            <MenuItem onClick={signInWithGoogle} sx={{ fontWeight: "bold" }}>
              Sign in
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem>Notifications</MenuItem>
            <MenuItem>Trips</MenuItem>
            <Link
              to={"/wishlist"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>Wishlist</MenuItem>
            </Link>
          </>
        )}
        <Divider />
        <MenuItem>Airbnb your home</MenuItem>
        <MenuItem>Host an Experience</MenuItem>
        <MenuItem>Help</MenuItem>
        <Divider />

        {name ? (
          <>
            <Link
              to={"/account"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>Account</MenuItem>
            </Link>
            <MenuItem
              onClick={() => {
                dispatch(resetWishList());
                signOutUser();
              }}
            >
              Log Out
            </MenuItem>{" "}
          </>
        ) : null}
      </Menu>
    </Box>
  );
}
