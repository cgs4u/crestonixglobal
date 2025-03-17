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

const Terms = () => {
  const terms = [
    {
      title: "1. Agreement Scope",
      description:
        "Priacc Innovations agrees to deliver software products and/or services as outlined in specific client agreements.",
    },
    {
      title: "2. License and Usage",
      description:
        "The Client is granted a [non-exclusive/non-transferable] license to use the software as per the terms specified.",
    },
    {
      title: "3. Intellectual Property",
      description:
        "All software, designs, and related documentation remain the intellectual property of Priacc Innovations.",
    },
    {
      title: "4. Fees and Payment",
      description:
        "All fees must be paid as per the agreed-upon schedule. Late payments may incur penalties.",
    },
    {
      title: "5. Support and Maintenance",
      description:
        "Support and maintenance include bug fixes, updates, and patches as outlined in the agreement.",
    },
    {
      title: "6. Data Privacy",
      description:
        "Priacc Innovations is committed to safeguarding the Client’s data under applicable privacy laws.",
    },
    {
      title: "7. Confidentiality",
      description:
        "Both parties agree to maintain the confidentiality of all proprietary information shared during the relationship.",
    },
    {
      title: "8. Warranties and Disclaimers",
      description:
        "Priacc Innovations warrants that its software will perform as described in the documentation.",
    },
    {
      title: "9. Liability",
      description:
        "Priacc Innovations shall not be liable for indirect, incidental, or consequential damages.",
    },
    {
      title: "10. Termination",
      description:
        "Either party may terminate the agreement with 15 days written notice. The Client must cease using the software upon termination.",
    },
    {
      title: "11. Governing Law",
      description:
        "This agreement is governed by the laws of Telangana, India.",
    },
    {
      title: "12. Amendments",
      description:
        "Priacc Innovations reserves the right to modify these terms with prior notice.",
    },
    {
      title: "13. Dispute Resolution",
      description:
        "Disputes will first be addressed through negotiation. Unresolved disputes will go to arbitration.",
    },
    {
      title: "14. Force Majeure",
      description:
        "Priacc Innovations is not liable for delays caused by events beyond its control, including natural disasters.",
    },
    {
      title: "15. Entire Agreement",
      description:
        "This document constitutes the complete agreement between Priacc Innovations and the Client.",
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
          Terms and Conditions
        </Typography>

        <FlexBox>
          {terms.map((term, index) => (
            <Card key={index}>
              <Typography variant="h5" component="h2" gutterBottom>
                {term.title}
              </Typography>
              <Typography>{term.description}</Typography>
            </Card>
          ))}
        </FlexBox>
      </StyledContainer>
    
    </div>
  );
};

export default Terms;
