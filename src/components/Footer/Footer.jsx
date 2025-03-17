import React from "react";
import { Box, Container, Typography, Link, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate, useNavigation } from "react-router";
import EmailIcon from "@mui/icons-material/Email";
import Aboutus from "../pages/Aboutus";

const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(4, 0),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const FlexContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(4),
}));

const FooterSection = styled(Box)(({ theme }) => ({
  flex: "1 1 200px",
  minWidth: "200px",
}));

const LogoImage = styled("img")({
  height: 80,
  marginBottom: 16,
});

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterBox sx={{ bgcolor: "#461e5c", color: "white" }}>
      <Container maxWidth="lg">
        <FlexContainer>
          <FooterSection>
            <LogoImage src="/logoo.png" alt="Ecuity Exousia" />
          </FooterSection>

          <FooterSection>
            <Typography variant="h6" gutterBottom>
              COMPANY
            </Typography>
            {/* <Link
              href="/services"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Services
            </Link> */}
            {/* <Link href="/aboutus" color="inherit" display="block">
              About
            </Link> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                
                justifyContent:"center",
                alignItems:"start"
              }}
            >
              <Button sx={{padding:0,color:"white"}} onClick={() => navigate("/services")}>Services</Button>
              <Button sx={{padding:0,color:"white"}} onClick={() => navigate("/aboutus")}>About</Button>
            </Box>
          </FooterSection>

          <FooterSection>
            <Typography variant="h6" gutterBottom>
              LEGAL
            </Typography>
            <Button
              onClick={() => navigate("/terms")}
              color="inherit"
              display="block"
            >
              Terms & Conditions
            </Button>
            <Button
              onClick={() => navigate("privacypolicy")}
              color="inherit"
              display="block"
            >
              Privacy Policy
            </Button>
          </FooterSection>

          <FooterSection>
            <Typography variant="h6" gutterBottom>
              SOCIAL
            </Typography>
            <Link
              href="https://www.linkedin.com/company/priacc-innovations-pvt-ltd/"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.instagram.com/priacc_innovations/profilecard/?igsh=MWYxNmVlZ2d3NXd3NA=="
              color="inherit"
              display="block"
              target="_blank"
            >
              Instagram
            </Link>
          </FooterSection>

          <FooterSection>
            <Typography variant="h6" gutterBottom>
              CONTACT
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              priaccinnovations.com
            </Typography>
            <Typography variant="body2">CELL: 9121047857</Typography>
            <Box
              sx={{
                py: 1,
                display: "flex",
                gap: 2,
              }}
            >
              <EmailIcon />
              <Link
                href="info@priaccinnovations.com"
                underline="hover"
                color="primary"
              >
                info@priaccinnovations.com
              </Link>
            </Box>
            <Typography variant="body2">
              407,4th Floor, Jain Sadguru Capital Park, Beside Rameshwaram
              Cafe,High-Tech City, hyderabad,Telangana,500081
            </Typography>
          </FooterSection>
        </FlexContainer>
      </Container>
    </FooterBox>
  );
};

export default Footer;
