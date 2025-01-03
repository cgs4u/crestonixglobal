import { Box, Container, Typography } from "@mui/material";
import React from "react";
import AboutPageSections from "../About/AboutPageSections";
import Footer from "../Footer/Footer";

const Aboutus = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "#461e5c",
          color: "white",
          height: "70vh",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography variant="h2" sx={{ fontSize: { xs: 35, md: 70 } }}>
          Shaping the Future of Technology
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: 18, md: 25 }, width: "65vw" }}
        >
          We are dedicated to crafting innovative SaaS solutions that empower
          businesses to excel. Our mission is to transform ideas into impactful
          digital experiences
        </Typography>
      </Box>
      <Box sx={{ px: 8 }}>
        <Typography variant="h5" sx={{ py: 2, fontWeight: 700 }}>
          Our Story
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: { md: 600, xs: 400 },
            fontSize: { md: 45, xs: 30 },
          }}
        >
          "Empowering the Future: Our Journey of Innovation and Excellence"
        </Typography>
        <Box>
          <Typography variant="h6" sx={{ py: 5 ,fontSize:{xs:18},px:{md:4}}}>
            Our rebranded identity signifies not only a new name but also a
            renewed dedication to providing exceptional, tailored solutions. Our
            team, which consists of seasoned professionals with decades of
            combined experience, is equipped to handle a wide range of
            challenges and deliver solutions that drive business success. From
            advanced software development and strategic consulting to
            sophisticated real-time analytics, we are dedicated to helping
            businesses of all sizes achieve their goals with precision and
            efficiency.
          </Typography>
        </Box>
      </Box>
      <AboutPageSections />
      <Footer />
    </div>
  );
};

export default Aboutus;
