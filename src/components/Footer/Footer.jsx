import React from "react";
import { Box, Container, Typography, Link, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  padding: theme.spacing(4, 0),
  borderTop: `1px solid ${theme.palette.divider}`,
  color: "#fff",
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
    <FooterBox>
      <Container maxWidth="lg">
        <FlexContainer>
          <FooterSection>
            <LogoImage src="/logoo.png" alt="Ecuity Exousia" />
          </FooterSection>

          <FooterSection>
            <Typography variant="h6" gutterBottom>
              COMPANY
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              <Button sx={{ padding: 0, color: "white" }} onClick={() => navigate("/services")}>
                Services
              </Button>
              <Button sx={{ padding: 0, color: "white" }} onClick={() => navigate("/aboutus")}>
                About
              </Button>
            </Box>
          </FooterSection>

          <FooterSection>
            <Typography variant="h6" gutterBottom>
              LEGAL
            </Typography>
            <Button onClick={() => navigate("/terms")} sx={{ color: "white", padding: 0 }}>
              Terms & Conditions
            </Button>
            <Button onClick={() => navigate("/privacypolicy")} sx={{ color: "white", padding: 0 }}>
              Privacy Policy
            </Button>
          </FooterSection>

          <FooterSection>
            <Typography variant="h6" gutterBottom>
              CONTACT
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              crestonixglobal.com
            </Typography>
            <Typography variant="body2">CELL: 8096695559</Typography>
            <Box sx={{ py: 1, display: "flex", gap: 2, alignItems: "center" }}>
              <EmailIcon sx={{ color: "white" }} />
              <Link
                href="mailto:info@crestonixglobal.com"
                underline="hover"
                sx={{ color: "white" }}
              >
                info@crestonixglobal.com
              </Link>
            </Box>
            <Box sx={{ py: 1, display: "flex", gap: 2, alignItems: "center" }}>
              <WhatsAppIcon sx={{ color: "white" }} />
              <Link
                href="https://wa.me/918096695559"
                target="_blank"
                underline="hover"
                sx={{ color: "white" }}
              >
                WhatsApp Chat
              </Link>
            </Box>
            <Typography variant="body2">
              407, 4th Floor, Jain Sadguru Capital Park, Beside Rameshwaram Cafe,
              High-Tech City, Hyderabad, Telangana, 500081
            </Typography>
          </FooterSection>
        </FlexContainer>
      </Container>
    </FooterBox>
  );
};

export default Footer;