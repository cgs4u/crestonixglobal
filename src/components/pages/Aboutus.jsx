import { Box, Typography, Container, Grid } from "@mui/material";
import React from "react";
import AboutPageSections from "../About/AboutPageSections";
import Footer from "../Footer/Footer";

// Keyframes animation for fade and slide up
const fadeSlideUp = {
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
};

const Aboutus = () => {
  return (
    <Box
      sx={{
        bgcolor: "#121212", // very dark background
        color: "#eee",
        minHeight: "100vh",
        pt: { xs: 8, md: 12 },
        pb: 8,
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          px: 3,
          mb: 8,
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 32, md: 56 },
            fontWeight: "bold",
            background: "linear-gradient(90deg, #7b2ff7, #f107a3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "fadeSlideUp 1s ease forwards",
            opacity: 0,
            transform: "translateY(20px)",
            mb: 2,
            "@keyframes fadeSlideUp": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
            animationFillMode: "forwards",
          }}
        >
          Crestonix Global Solutions
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: 700,
            mx: "auto",
            color: "#ddd",
            animation: "fadeSlideUp 1.5s ease forwards",
            opacity: 0,
            transform: "translateY(20px)",
            mt: 1,
            "@keyframes fadeSlideUp": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
            animationFillMode: "forwards",
          }}
        >
          Delivering Cutting-Edge IT & Non-IT Services with Expertise in AI
          Internships and More — Empowering Your Business & Career Growth.
        </Typography>
      </Box>

      {/* Services Overview */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 6,
            textAlign: "center",
            color: "#fff",
            animation: "fadeSlideUp 2s ease forwards",
            opacity: 0,
            transform: "translateY(20px)",
            "@keyframes fadeSlideUp": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
            animationFillMode: "forwards",
          }}
        >
          Our Expertise & Offerings
        </Typography>

        <Grid container spacing={6}>
          {[
            {
              title: "IT Services",
              description:
                "We provide customized IT solutions including software development, cloud computing, cybersecurity, and digital transformation strategies tailored to your business needs.",
            },
            {
              title: "Non-IT Services",
              description:
                "Alongside IT, we offer a broad range of non-IT services including business consulting, process automation, and customer support solutions designed to streamline your operations.",
            },
            {
              title: "AI Internship Program",
              description:
                "Join our intensive AI Internship to gain hands-on experience in Artificial Intelligence, Machine Learning, and Data Science with real-world projects guided by industry experts.",
            },
          ].map(({ title, description }, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Box
                sx={{
                  bgcolor: "#1e1e1e",
                  p: 4,
                  borderRadius: 3,
                  height: "100%",
                  boxShadow:
                    "0 8px 16px rgba(123, 47, 247, 0.2), 0 8px 24px rgba(241, 7, 163, 0.2)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow:
                      "0 12px 28px rgba(123, 47, 247, 0.4), 0 12px 36px rgba(241, 7, 163, 0.4)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 2, fontWeight: "bold", color: "#e1bee7" }}
                >
                  {title}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6, color: "#ccc" }}>
                  {description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Our Story Section */}
      <Box
        sx={{
          bgcolor: "#1a1a1a",
          py: 10,
          px: { xs: 3, md: 12 },
          textAlign: "center",
          borderRadius: 3,
          maxWidth: 900,
          mx: "auto",
          color: "#ddd",
          boxShadow: "0 8px 16px rgba(0,0,0,0.5)",
          animation: "fadeSlideUp 2.5s ease forwards",
          opacity: 0,
          transform: "translateY(20px)",
          "@keyframes fadeSlideUp": {
            from: { opacity: 0, transform: "translateY(20px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
          animationFillMode: "forwards",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 4, color: "#fff" }}
        >
          Our Story
        </Typography>
        <Typography
          variant="h6"
          sx={{
            lineHeight: 1.8,
            fontWeight: 400,
            fontSize: { xs: 16, md: 20 },
            color: "#ccc",
          }}
        >
          At Crestonix Global Solutions, we believe in innovation that shapes the
          future. Since our inception, we have been committed to delivering
          comprehensive IT and Non-IT services designed to empower businesses and
          individuals alike. Our passion for excellence drives us to offer tailored
          solutions and industry-leading internship programs that bridge the gap
          between academic knowledge and practical experience. Together, we build
          success stories that last.
        </Typography>
      </Box>




    </Box>
  );
};

export default Aboutus;
