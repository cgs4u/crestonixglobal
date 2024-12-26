import { Box, Typography } from "@mui/material";
import React from "react";
import AboutPageSections from "../About/AboutPageSections";
import Footer from "../Footer/Footer";

const Aboutus = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "#461e5c",
          color:"white",
          height: "70vh",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap:4
        }}
      >
        <Typography variant="h2" sx={{ fontSize: { xs: 35, md: 70 } }}>
          Shaping the Future of Technology
        </Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: 18, md: 25 },width:"65vw" }}>
          We are dedicated to crafting innovative SaaS solutions that empower
          businesses to excel. Our mission is to transform ideas into impactful
          digital experiences
        </Typography>
      </Box>
      <AboutPageSections/>
      <Footer/>
    </div>
  );
};

export default Aboutus;
