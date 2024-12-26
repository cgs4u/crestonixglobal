import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

const services = [
  {
    title: "Frontend Services",
    description: "Design and develop dynamic, user-friendly interfaces using modern frameworks like React, Angular, and Vue. Create responsive designs tailored for an engaging user experience.",
  },
  {
    title: "Backend Services",
    description: "Build secure, scalable, and efficient server-side applications with technologies like Python, Java, and Node.js. Ensure seamless data management and API integration.",
  },
  {
    title: "Test Services",
    description: "Deliver high-quality software through robust testing with Selenium, Jest, and Cypress. Identify and resolve bugs to ensure flawless application performance.",
  },
  {
    title: "DevOps Services",
    description: "Automate your development workflow with CI/CD pipelines and infrastructure as code. Optimize deployment processes to achieve faster and more reliable software releases.",
  },
  {
    title: "Cloud Services",
    description: "Leverage the power of cloud computing with AWS, Azure, and Google Cloud. Implement scalable solutions, secure data storage, and cost-effective infrastructure management.",
  },
  {
    title: "Dedicated Support",
    description: "Provide tailored support for non-IT functions, ensuring smooth operations. Includes help desk services, data entry, and administrative assistance for your business needs.",
  },
];

const ServicesSection = () => {
  return (
    <Box
      sx={{
        py: 5,
        px: { xs: 2, sm: 4, md: 8 }, // Adds gap on left and right sides
        backgroundColor: "#F5F5F5",
      }}
    >
     
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#FFFFFF",
                height: "280px", // Increased height
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign:"center",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#6A1B9A",
                  color:"white"
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold",  mb: 1 }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{  lineHeight: 1.6 }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
