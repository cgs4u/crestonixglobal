import { Box, Typography } from "@mui/material";
import React from "react";
import ServicesSection from "../../ServicesSection/ServicesSection";
import Footer from "../Footer/Footer";
import heroimg from "/assets/servicesHero.jpg";
import Projects from "./Projects";

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
      <Box
        sx={{
          bgcolor: "#461e5c",

          display: { md: "flex" },
          flexDirection: { md: "column" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            m: 3,
            fontSize: { xs: 30, md: 50 },
            py: 3,
            fontWeight: { xs: 300, md: 700 },
            color: "white",
          }}
        >
          Our Projects
        </Typography>
        <Projects />
      </Box>
      <ServicesSection />
    </div>
  );
};

export default Services;
