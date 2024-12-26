import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";


export default function Card4() {
  return (
    <Card sx={{ maxWidth: 345, height:380,background: "linear-gradient(to right bottom,#d4bbfc,#7251b5)",p:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="/assets/app-development.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dedicated Support
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Our expert team is here for you 24/7. From onboarding to
            troubleshooting, we ensure your experience with our platform is
            smooth and hassle-free.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}
