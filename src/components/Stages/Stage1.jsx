import React from "react";
import { Box, Stack, Typography, Container } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const Stage1 = () => {
  const stages = [
    {
      icon: <LightbulbIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Ideation & Research",
      content:
        "We start by understanding your vision and conducting in-depth market research. Our team identifies trends, gathers insights, and brainstorms innovative solutions tailored to your needs.",
    },
    {
      icon: <DesignServicesIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Design & Prototyping",
      content:
        "Our designers craft intuitive, user-friendly designs that reflect your brand identity. We create prototypes to visualize the product and refine features based on your feedback.",
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Development & Testing",
      content:
        "Our expert developers bring the design to life with clean, efficient code. Rigorous testing ensures your product is robust, scalable, and ready for the market.",
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Launch & Support",
      content:
        "We assist with a seamless product launch and provide continuous support. Our team ensures your product performs flawlessly and evolves with your business.",
    },
  ];

  return (
    <Stack spacing={4} direction={{ xs: "column", md: "column", lg: "row" }}
    sx={{ justifyContent: "center", alignItems: "center", px: "50px",py:2 }}>
      {stages.map((stage, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 3,
            border: "1px solid #e0e0e0",
            borderRadius: "12px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            flexDirection:"column",
            justifyContent:"space-evenly",
            bgcolor:"white",
            height:"400px",
            transition:"transform 0.5s ease",
            ":hover":{
                transform: "scale(1.05)", // Slightly increase the scale
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // Add a stronger shadow
                bgcolor:"#386641",
                color:"white"
            }
          }}
          
        >
          <Box sx={{bgcolor:"#d9d6d4",p:2,borderRadius:'50%'}}>{stage.icon}</Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {stage.title}
            </Typography>
            <Typography variant="h6" sx={{ mt: 1,fontSize:18 }}>
              {stage.content}
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default Stage1;
