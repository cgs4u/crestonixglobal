import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import teamImage from "/assets/team1.jpg"; // Replace with your image path
import collaborationImage from "/assets/collab.jpg"; // Replace with your image path

const AboutPageSections = () => {
  return (
    <Box>
      {/* Section 1: Image Left, Content Right */}
      <Container sx={{ my: 5 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src={teamImage}
              alt="Team Collaboration"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Building Together
            </Typography>
            <Typography>
              Our team thrives on collaboration, blending creativity and technical expertise to deliver exceptional SaaS solutions. Together, we turn challenges into opportunities.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Middle Quote Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          height: "20vh",
          my: 5,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontStyle: "italic", textAlign: "center", px: 2 }}
        >
          "Great things in business are never done by one person; they're done by a team of people."
        </Typography>
      </Box>

      {/* Section 2: Content Left, Image Right */}
      <Container sx={{ my: 5 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              The Power of Collaboration
            </Typography>
            <Typography>
              Every project we undertake is a testament to the synergy between our team and our clients. We believe in building partnerships that foster innovation and growth.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={collaborationImage}
              alt="Collaboration"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPageSections;
