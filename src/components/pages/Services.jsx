import { Box, Typography, Grid, Button } from "@mui/material";
import React from "react";
import ServicesSection from "../../ServicesSection/ServicesSection";
import Projects from "./Projects";

// Example image URLs - replace with your own assets or paths
const itServiceImg = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60";
const nonItServiceImg = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60";

const Services = () => {
  return (
    <Box
      sx={{
        bgcolor: "#121212",
        color: "#eee",
        minHeight: "100vh",
        px: { xs: 3, md: 10 },
        pt: 8,
        pb: 12,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: "55vh", md: "70vh" },
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          mb: 10,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 36, md: 64 },
            fontWeight: 700,
            color: "#7b2ff7",
            animation: "fadeSlideUp 1.8s ease forwards",
            opacity: 0,
            transform: "translateY(20px)",
            "@keyframes fadeSlideUp": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          Crestonix Services All Over The World
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: 18, md: 24 },
            maxWidth: 700,
            color: "#ccc",
            animation: "fadeSlideUp 2.2s ease forwards",
            opacity: 0,
            transform: "translateY(20px)",
          }}
        >
          Delivering comprehensive IT and Non-IT solutions that drive innovation,
          efficiency, and growth across industries worldwide.
        </Typography>
      </Box>

      {/* IT Services Section */}
      <Grid
        container
        spacing={6}
        alignItems="center"
        sx={{ mb: 12 }}
      >
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={itServiceImg}
            alt="IT Services"
            sx={{
              width: "100%",
              borderRadius: 3,
              boxShadow: "0 8px 30px rgba(123, 47, 247, 0.5)",
              filter: "brightness(0.85)",
              transition: "filter 0.3s ease",
              "&:hover": { filter: "brightness(1)" },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#7b2ff7",
              mb: 3,
              animation: "fadeSlideLeft 1.5s ease forwards",
              opacity: 0,
              transform: "translateX(-20px)",
              "@keyframes fadeSlideLeft": {
                "0%": { opacity: 0, transform: "translateX(-20px)" },
                "100%": { opacity: 1, transform: "translateX(0)" },
              },
            }}
          >
            Advanced IT Services
          </Typography>
          <Typography sx={{ mb: 2, color: "#ddd" }}>
            We offer custom software development, cloud solutions, cybersecurity,
            and AI-powered tools to revolutionize your business operations.
          </Typography>
          <Typography sx={{ mb: 2, color: "#ddd" }}>
            Our expert team crafts scalable and secure applications with
            cutting-edge technologies, ensuring you stay ahead in the digital era.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
          >
            Explore IT Services
          </Button>
        </Grid>
      </Grid>

      {/* Non-IT Services Section */}
      <Grid
        container
        spacing={6}
        alignItems="center"
        sx={{ mb: 12, flexDirection: { xs: "column-reverse", md: "row" } }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#7b2ff7",
              mb: 3,
              animation: "fadeSlideRight 1.5s ease forwards",
              opacity: 0,
              transform: "translateX(20px)",
              "@keyframes fadeSlideRight": {
                "0%": { opacity: 0, transform: "translateX(20px)" },
                "100%": { opacity: 1, transform: "translateX(0)" },
              },
            }}
          >
            Comprehensive Non-IT Services
          </Typography>
          <Typography sx={{ mb: 2, color: "#ddd" }}>
            From business consulting and process automation to customer support
            and training programs, we help you optimize every aspect of your business.
          </Typography>
          <Typography sx={{ mb: 2, color: "#ddd" }}>
            Our solutions are designed to increase efficiency and improve
            operational workflows with a human-centered approach.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
          >
            Explore Non-IT Services
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={nonItServiceImg}
            alt="Non IT Services"
            sx={{
              width: "100%",
              borderRadius: 3,
              boxShadow: "0 8px 30px rgba(123, 47, 247, 0.5)",
              filter: "brightness(0.85)",
              transition: "filter 0.3s ease",
              "&:hover": { filter: "brightness(1)" },
            }}
          />
        </Grid>
      </Grid>

      {/* Projects Section */}
      <Box
        sx={{
          bgcolor: "#2a105a",
          borderRadius: 3,
          p: { xs: 4, md: 6 },
          mb: 8,
          boxShadow: "0 8px 30px rgba(123, 47, 247, 0.7)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 5,
            fontWeight: 700,
            color: "#e0b0ff",
            animation: "fadeSlideUp 3s ease forwards",
            opacity: 0,
            transform: "translateY(20px)",
          }}
        >

        </Typography>

      </Box>


    </Box>
  );
};

export default Services;
