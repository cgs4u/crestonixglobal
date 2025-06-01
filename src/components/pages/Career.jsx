import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

// New image URLs
const aiInternshipImg =
  "https://images.unsplash.com/photo-1537432376769-00a02a669738?auto=format&fit=crop&w=800&q=80";
const itCareerImg =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80";
const nonItCareerImg =
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80";

const careersData = {
  "AI Internship": [
    {
      title: "AI Research Intern",
      description: "Work on real-world AI projects with our expert team.",
    },
    {
      title: "Machine Learning Intern",
      description:
        "Build and deploy machine learning models in a collaborative environment.",
    },
  ],
  "IT Careers": [
    { title: "Frontend Developer", description: "React, JavaScript, UI/UX focus." },
    { title: "Backend Developer", description: "Node.js, databases, APIs." },
    { title: "DevOps Engineer", description: "CI/CD pipelines, cloud infrastructure." },
  ],
  "Non-IT Careers": [
    {
      title: "Business Analyst",
      description: "Bridge business goals with technology solutions.",
    },
    {
      title: "Communication Trainer",
      description: "Enhance skills for effective workplace communication.",
    },
    {
      title: "Project Manager",
      description: "Lead projects ensuring timely delivery and quality.",
    },
  ],
};

export default function Career() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contactus");
  };

  const handleJobClick = (jobTitle) => {
    alert(`You clicked on: ${jobTitle}\n\nJD and requirements page coming soon!`);
  };

  return (
    <Box
      sx={{
        bgcolor: "#121212",
        color: "white",
        minHeight: "100vh",
        px: { xs: 3, md: 10 },
        py: 8,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 6,
          animation: "fadeInDown 1.5s ease forwards",
          "@keyframes fadeInDown": {
            "0%": { opacity: 0, transform: "translateY(-30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        Careers at Crestonix Global Solutions
      </Typography>

      {/* Sections: AI Internship, IT Careers, Non-IT Careers */}
      <Grid container spacing={6}>
        {/* AI Internship */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "#1f1f1f",
              borderRadius: 2,
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              boxShadow: "0 0 15px #6a1b9a",
            }}
          >
            <Typography
              variant="h4"
              sx={{ mb: 3, fontWeight: 700, color: "#9c27b0" }}
            >
              AI Internship (Main Focus)
            </Typography>
            <Box
              component="img"
              src={aiInternshipImg}
              alt="AI Internship"
              sx={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 2,
                mb: 3,
              }}
            />
            {careersData["AI Internship"].map(({ title, description }) => (
              <Box
                key={title}
                sx={{
                  mb: 2,
                  cursor: "pointer",
                  p: 2,
                  borderRadius: 1,
                  bgcolor: "#2a2a2a",
                  "&:hover": { bgcolor: "#6a1b9a" },
                }}
                onClick={() => handleJobClick(title)}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                  {description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* IT Careers */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "#1f1f1f",
              borderRadius: 2,
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              boxShadow: "0 0 15px #3f51b5",
            }}
          >
            <Typography
              variant="h4"
              sx={{ mb: 3, fontWeight: 700, color: "#3f51b5" }}
            >
              IT Careers
            </Typography>
            <Box
              component="img"
              src={itCareerImg}
              alt="IT Careers"
              sx={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 2,
                mb: 3,
              }}
            />
            {careersData["IT Careers"].map(({ title, description }) => (
              <Box
                key={title}
                sx={{
                  mb: 2,
                  cursor: "pointer",
                  p: 2,
                  borderRadius: 1,
                  bgcolor: "#2a2a2a",
                  "&:hover": { bgcolor: "#3f51b5" },
                }}
                onClick={() => handleJobClick(title)}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                  {description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Non-IT Careers */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "#1f1f1f",
              borderRadius: 2,
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              boxShadow: "0 0 15px #009688",
            }}
          >
            <Typography
              variant="h4"
              sx={{ mb: 3, fontWeight: 700, color: "#009688" }}
            >
              Non-IT Careers
            </Typography>
            <Box
              component="img"
              src={nonItCareerImg}
              alt="Non IT Careers"
              sx={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 2,
                mb: 3,
              }}
            />
            {careersData["Non-IT Careers"].map(({ title, description }) => (
              <Box
                key={title}
                sx={{
                  mb: 2,
                  cursor: "pointer",
                  p: 2,
                  borderRadius: 1,
                  bgcolor: "#2a2a2a",
                  "&:hover": { bgcolor: "#009688" },
                }}
                onClick={() => handleJobClick(title)}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                  {description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleContact}
          sx={{ px: 5, py: 1.5, fontSize: "1.1rem" }}
        >
          Contact Us for More Info
        </Button>
      </Box>

    </Box>
  );
}
