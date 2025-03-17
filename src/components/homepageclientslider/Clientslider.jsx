import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const clients = [
  {
    id: 1,
    name: "Google",
    logo: "/assets/slider/google1.png",
  },
  {
    id: 2,
    name: "Wipro",
    logo: "/assets/slider/wipro2.png",
  },
  {
    id: 3,
    name: "Infosys",
    logo: "/assets/slider/infosys3.png",
  },
  {
    id: 4,
    name: "Accenture",
    logo: "/assets/slider/accenture4.png",
  },
  {
    id: 5,
    name: "Capgemini",
    logo: "/assets/slider/capgemini.svg",
  },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowForwardIos
      onClick={onClick}
      style={{
        position: "absolute",
        right: 10,
        top: "50%",
        cursor: "pointer",
        color: "#333",
        zIndex: 10,
      }}
    />
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowBackIos
      onClick={onClick}
      style={{
        position: "absolute",
        left: 10,
        top: "50%",
        cursor: "pointer",
        color: "#333",
        zIndex: 10,
      }}
    />
  );
};

const ClientSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box
      sx={{ width: "80%", margin: "auto", textAlign: "center", mt: 4, pb: 3 }}
    >
      <Typography variant="h2" color="initial">
        Our Clients
      </Typography>
      <Slider {...settings}>
        {clients.map((client) => (
          <Card key={client.id} sx={{ padding: 4, textAlign: "center",boxShadow: "none", border: "none",}}>
            <img
              src={client.logo}
              alt={client.name}
              style={{ width: 250, height: 200, margin: "auto" }}
            />
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default ClientSlider;
