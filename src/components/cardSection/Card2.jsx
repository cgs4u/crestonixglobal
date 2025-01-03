import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

export default function Card2() {
  return (
    <Card sx={{ maxWidth: 345 , height:380,background: "linear-gradient(to right bottom,#d4bbfc,#7251b5)",p:2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="/assets/AIcard.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            AI-Powered Insights
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Leverage the power of artificial intelligence to gain actionable
            insights. Make data-driven decisions with our advanced analytics and
            reporting tools.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}
