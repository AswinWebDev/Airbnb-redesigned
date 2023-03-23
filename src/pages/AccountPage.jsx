import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// icons here
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import FolderSpecialOutlinedIcon from "@mui/icons-material/FolderSpecialOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import styled from "styled-components";
import { signOutUser } from "../Firebase";
import { Link } from "react-router-dom";

const AccountPage = () => {
  // array of objects to render
  const accountPageContents = [
    {
      id: "1",
      icon: <CreditCardOutlinedIcon />,
      title: "Personal Info",
      details: "Provide personal details in how we can reach you",
    },
    {
      id: "2",
      icon: <ShieldOutlinedIcon />,
      title: "Login and security",
      details: "Update your password and security questions",
    },
    {
      id: "3",
      icon: <PaymentsOutlinedIcon />,
      title: "Payment methods",
      details: "Add or remove payment methods",
    },
    {
      id: "4",
      icon: <InsertDriveFileOutlinedIcon />,
      title: "Taxes",
      details: "View your tax documents",
    },
    {
      id: "5",
      icon: <CampaignOutlinedIcon />,
      title: "Notifications",
      details: "Manage your notification preferences",
    },
    {
      id: "6",
      icon: <RemoveRedEyeOutlinedIcon />,
      title: "Privacy",
      details: "Manage your privacy settings",
    },
    {
      id: "7",
      icon: <PublicOutlinedIcon />,
      title: "Global Preferences",
      details: "Set your language, currency and time zone",
    },
    {
      id: "8",
      icon: <DirectionsCarFilledOutlinedIcon />,
      title: "Travel for Work",
      details: "Manage your travel preferences",
    },
    {
      id: "9",
      icon: <FolderSpecialOutlinedIcon />,
      title: "Professional hosting tools",
      details: "Manage your professional hosting tools",
    },
    {
      id: "10",
      icon: <CardGiftcardOutlinedIcon />,
      title: "Referal credit and coupons",
      details: "View your referal credit and coupons",
    },
  ];

  const StyledDiv = styled("div")({
    height: "20vh",
    border: "1px solid #e6e6e6",
    borderRadius: "10px",
    padding: "1rem",
    margin: "1rem",
    boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.4)",
    },
  });
  const rendered = accountPageContents.map((mov) => {
    return (
      <Grid xs={12} sm={4} item md={3} key={mov.id}>
        <StyledDiv>
          <div style={{ marginBottom: "10%" }}>{mov.icon}</div>
          <Typography variant="subtitle1">{mov.title}</Typography>
          <Typography variant="subtitle2" sx={{ opacity: "50%" }}>
            {mov.details}
          </Typography>
        </StyledDiv>
      </Grid>
    );
  });
  return (
    <Box padding={5} marginBottom={5}>
      <Typography variant="h4">Account</Typography>
      <div style={{ display: "flex" }}>
        <Typography variant="subtitle1">
          {localStorage.getItem("name")}
        </Typography>
        <Typography variant="subtitle1">{" , "}</Typography>
        <div style={{ marginLeft: "1%" }}>
          <Typography variant="subtitle1">
            {localStorage.getItem("email")}
          </Typography>
        </div>
      </div>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {rendered}
        </Grid>
      </Box>
      <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
        <StyledDiv
          style={{ height: "3vh", textAlign: "center" }}
          onClick={() => {
            signOutUser();
          }}
        >
          Log Out
        </StyledDiv>
      </Link>
    </Box>
  );
};

export default AccountPage;
