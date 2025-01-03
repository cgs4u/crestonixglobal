import React from "react";
import { Box, Container, Typography, styled } from "@mui/material";
import Footer from "../Footer/Footer";

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(6, 3),
  backgroundColor: "#f9f9f9",
  color: "#333",
  minHeight: "100vh",
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const PrivacyPolicy = () => {
  return (
    <div>
      <StyledContainer>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Privacy Policy
        </Typography>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            Your Privacy
          </Typography>
          <Typography>
            Your privacy is very important to us. We will protect your personal
            information at all times and use it only in accordance with our
            privacy policy.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            The Information We Collect
          </Typography>
          <Typography>
            <strong>Personal Information:</strong> We only collect the
            information when we offer you the letter or when you call and share
            the information with us. However, you are not forced to share your
            information if you don’t wish to.
          </Typography>
          <Typography sx={{ marginTop: 2 }}>
            <strong>Other Information:</strong> When you visit our site, our
            server automatically logs information that does not reveal your
            personal identity. But our server captures basic information like
            the IP address of the device, date & time of your visit, pages you
            have visited, and browser you are using.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            How We Use Your Information
          </Typography>
          <Typography>
            We use cookies to monitor your behavior on our website. We do this
            to understand and improve our webpage experience for users. We do
            not share or sell your information.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            Changes to This Policy
          </Typography>
          <Typography>
            If our policy information practices change, we will update the
            policy changes on this page of our website. If you are concerned
            about how your information is used, check this policy periodically.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography>
            If you have any questions regarding the policy, please feel free to
            reach us at{" "}
            <a
              href="mailto:hr@priaccinnovations.com"
              style={{ textDecoration: "none", color: "#0073e6" }}
            >
              hr@priaccinnovations.com
            </a>
            .
          </Typography>
        </Section>
      </StyledContainer>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
