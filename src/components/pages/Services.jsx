import { Box, Typography } from "@mui/material";
import React from "react";
import ServicesSection from "../../ServicesSection/ServicesSection";

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffe082",
          height: "20vh",
          my: 5,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontStyle: "italic", textAlign: "center", px: 2 }}
        >
          Turning ideas into innovative solutions, one line of code at a time.
        </Typography>
      </Box>
    </div>
  );
};

export default Services;
