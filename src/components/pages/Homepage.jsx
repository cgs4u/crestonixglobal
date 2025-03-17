import React from "react";
import "./Homepage.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import hero2Img from "/assets/Homepage/7081473.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../cardSection/Card";
import CardComponent from "../cardSection/Card";
import Card2 from "../cardSection/Card2";
import Card3 from "../cardSection/Card3";
import Card4 from "../cardSection/Card4";
import Stage1 from "../Stages/Stage1";
import Faqs from "../FAQS/Faqs";
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";
import ClientSlider from "../homepageclientslider/Clientslider";

const Homepage = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".heroText", {
      // y: 360,
      scale: 0,
      duration: 1,
      opacity: 0,
    });
    gsap.from(".heroSubText", {
      // x:- 360,
      scale: 0,
      duration: 1,
      opacity: 0,
      delay: 0.5,
    });
    gsap.from(".home2Text", {
      opacity: 0,
      x: -100,
      duration: 3,
      scrollTrigger: {
        trigger: ".home2",
        start: "top 70%",
        end: "top 30%",
        // markers: true,
        toggleActions: "play none none none",
        scrub: true,
      },
    });
    gsap.from(".home2Img", {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".home2",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  },[]);
  return (
    <div className="homepage">
      <Box className="heroHome"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography
          className="heroText"
          variant="h1"
          sx={{
            color: "white",
            textAlign: "center",
            maxWidth: { xs: "700px", xl: "600px" },
            fontSize: { xs: "40px" },
            fontWeight: "bold",
          }}
        >
          Innovative Software Solutions for Your Business
        </Typography>
        <Typography
          variant="p"
          className="heroSubText"
          sx={{
            color: "white",
            textAlign: "center",
            maxWidth: { xs: "700px", xl: "900px" },
            fontSize: { xs: "20px", xl: "20px" },
            p: "33px",
          }}
        >
          Expert web and App development services in Hyderabad
        </Typography>
        <Button
          variant="outlined"
          className="heroBtn"
          sx={{
            color: "white",
            border: "1px solid white",
            borderRadius: "15px",
            px: "30px",
          }}
        >
          Explore
        </Button>
      </Box>
      <Box
        className="home2"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", xl: "row" },
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "10px",
          bgcolor: "#461e5c",
          color: "white",
        }}
      >
        <Box
          className="home2Text"
          sx={{ mx: 2, textAlign: "center", p: { xs: 5 } }}
        >
          <h1>Innovative Software Solutions Provider</h1>
          <p>
            Based in hyderabad We specialize in saas Applications,IT and NonIT
            services
          </p>
        </Box>
        <Box className="home2Img" sx={{ width: "400px", p: {md:"30px"} }}>
          <img
            className="homeHeroImg"
            src={hero2Img}
            alt=""
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
      <Container sx={{ my: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            my: "60px",
            gap: "20px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "black",
              textAlign: "center",
              fontWeight: 600,
              fontSize: { xs: 40, md: 70 },
            }}
          >
            Smart features for your business
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontSize: { md: "18px", xs: "16px" },
              width: { md: "700px", xs: "350px" },
              textAlign: "center",
            }}
          >
            We focus on helping you to make useful content more accessible with
            an utlimate goal for a good sharing profit as a content creator
          </Typography>
        </Box>
        <Stack
          spacing={3}
          direction={{ xs: "column", md: "column", lg: "row" }}
          sx={{ justifyContent: "center", alignItems: "center", p: "10px" }}
        >
          <CardComponent  />
          <Card2 />
          <Card4 />
        </Stack>
      </Container>
      <Box
        sx={{
          bgcolor: "#461e5c",
          
          display: { md: "flex" },
          flexDirection: { md: "column" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              m: 3,
              fontSize: { xs: 30, md: 50 },
              py: 3,
              fontWeight: { xs: 300, md: 700 },
              color:"white"
            }}
          >
            How We Bring Your Product to Life
          </Typography>
        </Box>
        <Stage1 />
      </Box>
      <Container
        sx={{ 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          mb:2
        }}
      >
        <Box >
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: 25, md: 60 }, fontWeight: { xs: 600 } }}
          >
            Frequently asked questions:
          </Typography>
        </Box>
        <Faqs />
      </Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right ,#C9D6FF,#E2E2E2)",
        }}
      >
        <Stack sx={{height:{md:"90%"},justifyContent:"center"}}>
          <Box>
            <Typography
              variant="h3"
              sx={{ textAlign: "center", fontWeight: "700",fontSize:{xs:30,md:60},py:5 }}
            >
              Our clients feedbacks
            </Typography>
            <Reviews />
          </Box>
        </Stack>
      </div>
      <div>
        <ClientSlider/>
      </div>
    </div>
  );
};

export default Homepage;
