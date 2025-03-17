import React from "react";
import { Grid, Card, CardMedia, Box, Typography } from "@mui/material";

const images = [
  "/assets/Gallery/gallery1.jpg",
  "/assets/Gallery/gallery2.jpg",
  "/assets/Gallery/gallery3.jpg",
  "/assets/Gallery/gallery4.jpg",
  "/assets/Gallery/gallery5.jpg",
  "/assets/Gallery/gallery6.jpg",
  "/assets/Gallery/gallery66.jpg",
  "/assets/Gallery/gallery11.jpg",
  "/assets/Gallery/gallery8.jpg",
  "/assets/Gallery/gallery9.jpg",
  "/assets/Gallery/gallery10.jpg",
  "/assets/Gallery/gallery7.jpg",
];

const Gallery = () => {
  return (
    <Box>
      <Box>
        <Typography
          variant="h3"
          color="initial"
          sx={{ textAlign: "center", my: 3 }}
        >
          Gallery
        </Typography>
      </Box>
      <Grid container spacing={2} padding={2}>
        {images.map((src, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                height: "100%",
                boxShadow: 3,
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 16,
                },
              }}
            >
              <CardMedia
                component="img"
                image={src}
                alt={`Gallery ${index}`}
                sx={{ width: "100%", height: "auto", objectFit: "cover", }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
