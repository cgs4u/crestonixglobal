import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

export default function Card3() {
  return (
    <Card sx={{ maxWidth: 345, height:380,bgcolor:"#F5EEE9",p:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="/assets/integration.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Effortless Integrations
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Integrate with your favorite tools effortlessly. Our platform
            supports seamless connections with CRMs, payment gateways, and more
            to streamline your workflow.
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
