import React from "react";
import { Box, Stack, Typography, Container } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BusinessIcon from '@mui/icons-material/Business';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Projects = () => {
  const stages = [
    {
      icon: <BusinessIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Broker Leads",
      content:
        "We find leads such as emails, cities, and phone numbers to improve client business, using the source of the broker's name and website link.",
        skills:"Lead Generation,Google,Google Search,Email"
    },
    {
      icon: <RestaurantIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Project Restaurants",
      content:
        "We are sourcing high-quality HD food images using restaurant names and locations for clients to develop their websites.",
        skills:"Google,Google Search,Google Maps"
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Data Scrapping",
      content:
        "We are scraping large amounts of data every day using LinkedIn to help our clients easily identify people on the platform.",
        skills:"LinkedIn,LinkedIn Lead Generation,Lead Generation,Data Scraping"
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      title: "Content Generation",
      content:
        "We used to upload the emails and names based on the clients' data into the client's website.",
        skills:"Copy & Paste,Content Upload"
    },
  ];

  return (
    <Stack
      spacing={4}
      direction={{ xs: "column", md: "column", lg: "row" }}
      sx={{ justifyContent: "center", alignItems: "center", px: "10px", py: 2, }}
    >
      {stages.map((stage, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 3,
            border: "1px solid #e0e0e0",
            borderRadius: "12px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            flexDirection: "column",
            justifyContent: "space-evenly",
            bgcolor: "white",
            height: "400px",
            transition: "transform 0.5s ease",
            ":hover": {
              transform: "scale(1.05)", // Slightly increase the scale
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // Add a stronger shadow
              bgcolor: "#386641",
              color: "white",
            },
           width:"300px"
          }}
        >
          <Box sx={{ bgcolor: "#d9d6d4", p: 2, borderRadius: "50%" }}>
            {stage.icon}
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {stage.title}
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, fontSize: 18 }}>
              {stage.content}
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, fontSize: 18 }}>
              <Typography variant="h6" color="initial" sx={{ fontWeight: "bold" }}>Skills and deliverables
              </Typography>{stage.skills}
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default Projects;
