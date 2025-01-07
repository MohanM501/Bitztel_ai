import { Button, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        justifyContent: "space-between",
        padding: "20px 40px",
      }}
    >
      <Box>
        <Link to="/">
          <Button variant="text">Home</Button>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          gap: { xs: "20px", sm: "20px", md: "40px" },
        }}
      >
        <Link to="/login">
          <Button
            variant="outlined"
            sx={{ fontSize: { xs: "10px", sm: "14px" } }}
          >
            Log In
          </Button>
        </Link>
        <Link to="/signup">
          <Button
            variant="outlined"
            sx={{ fontSize: { xs: "10px", sm: "14px" } }}
          >
            Sign Up
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NavbarComp;
