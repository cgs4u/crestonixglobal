import { Box, Typography } from "@mui/material";
import React from "react";
import ServicesSection from "../../ServicesSection/ServicesSection";
import Footer from "../Footer/Footer";
import heroimg from "/assets/servicesHero.jpg"

const Services = () => {
  return (
    <div>
      <Box
        sx={{
          height: "70vh",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 35, md: 70 },
            bgcolor: "#6A1B9A",
            fontWeight: 700,
            color: "white",
            p: 3,
            borderRadius: 2,
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: 18, md: 25 }, width: "65vw" }}
        >
          Discover a suite of innovative solutions designed to streamline your
          operations, enhance productivity, and drive success. Let us transform
          your vision into reality.
        </Typography>
      </Box>
      <ServicesSection />
      <Footer/>
    </div>
  );
};

export default Services;
