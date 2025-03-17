import React from "react";
import { Box, Container, Typography, styled } from "@mui/material";
import Footer from "../Footer/Footer";

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(6, 3),
  backgroundColor: "#f9f9f9",
  color: "#333",
  minHeight: "100vh",
}));

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
}));

const Card = styled(Box)(({ theme }) => ({
  flex: "1 1 calc(33.333% - 16px)", // Adjusts the card width
  backgroundColor: "#fff",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(3),
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[6],
  },
  [theme.breakpoints.down("md")]: {
    flex: "1 1 calc(50% - 16px)", // Adjust width for tablets
  },
  [theme.breakpoints.down("sm")]: {
    flex: "1 1 100%", // Full width for mobile
  },
}));

const PrivacyPolicy = () => {
  const policies = [
    {
      title: "1. Data Collection",
      description:
        "We collect personal data such as name, email, and contact information to provide services.",
    },
    {
      title: "2. Usage of Data",
      description:
        "Collected data is used for improving our services, communication, and customer support.",
    },
    {
      title: "3. Data Sharing",
      description:
        "We do not share your data with third parties without your consent, except as required by law.",
    },
    {
      title: "4. Cookies",
      description:
        "Our website uses cookies to enhance user experience and analyze website traffic.",
    },
    {
      title: "5. Data Security",
      description:
        "We implement advanced security measures to protect your data from unauthorized access.",
    },
    {
      title: "6. Third-Party Services",
      description:
        "We may use third-party services for analytics, which may collect anonymized data.",
    },
    {
      title: "7. User Rights",
      description:
        "You have the right to access, update, or delete your data by contacting our support team.",
    },
    {
      title: "8. Changes to Policy",
      description:
        "We reserve the right to update this policy with prior notice to users.",
    },
    {
      title: "9. Data Retention",
      description:
        "We retain your data only as long as necessary to fulfill the purposes outlined in this policy.",
    },
    {
      title: "10. Contact Information",
      description:
        "For privacy concerns or queries, please contact us at support@priaccinnovations.com.",
    },
  ];

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

        <FlexBox>
          {policies.map((policy, index) => (
            <Card key={index}>
              <Typography variant="h5" component="h2" gutterBottom>
                {policy.title}
              </Typography>
              <Typography>{policy.description}</Typography>
            </Card>
          ))}
        </FlexBox>
      </StyledContainer>
    
    </div>
  );
};

export default PrivacyPolicy;
