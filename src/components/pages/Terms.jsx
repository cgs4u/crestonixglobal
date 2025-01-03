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

const Terms = () => {
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

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            1. Agreement Scope
          </Typography>
          <Typography>
            Priacc Innovations agrees to deliver software products and/or
            services as outlined in specific client agreements. The Client
            agrees to use the software and services strictly for the purposes
            outlined in the agreement.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            2. License and Usage
          </Typography>
          <Typography>
            The Client is granted a [non-exclusive/non-transferable] license to
            use the software as per the terms specified. Redistribution, reverse
            engineering, or unauthorized modifications of the software are
            prohibited.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            3. Intellectual Property
          </Typography>
          <Typography>
            All software, designs, and related documentation remain the
            intellectual property of Priacc Innovations unless otherwise
            specified in a separate agreement. Client data entered into the
            software remains the property of the Client.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            4. Fees and Payment
          </Typography>
          <Typography>
            All fees must be paid as per the agreed-upon schedule. Late payments
            may incur a penalty of [X%] per month. Payments are non-refundable
            except as stated in the refund policy.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            5. Support and Maintenance
          </Typography>
          <Typography>
            Priacc Innovations will provide support as per the terms in the
            service level agreement (SLA). Maintenance includes bug fixes,
            updates, and patches as outlined in the agreement.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            6. Data Privacy
          </Typography>
          <Typography>
            Priacc Innovations is committed to safeguarding the Client’s data
            under [applicable privacy laws, e.g., GDPR, CCPA]. Details on data
            collection, usage, and protection are outlined in the Privacy
            Policy.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            7. Confidentiality
          </Typography>
          <Typography>
            Both parties agree to maintain the confidentiality of all
            proprietary information shared during the business relationship.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            8. Warranties and Disclaimers
          </Typography>
          <Typography>
            Priacc Innovations warrants that its software will perform as
            described in the documentation for few days after delivery. No
            warranties are made for third-party integrations or custom
            modifications.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            9. Liability
          </Typography>
          <Typography>
            Priacc Innovations shall not be liable for indirect, incidental, or
            consequential damages arising from the use of its software or
            services. The maximum liability shall not exceed the total fees paid
            by the Client for the software/service.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            10. Termination
          </Typography>
          <Typography>
            Either party may terminate the agreement with 15 days written
            notice. Upon termination, the Client must cease using the software
            and return or destroy all copies.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            11. Governing Law
          </Typography>
          <Typography>
            This agreement is governed by the laws of Jurisdiction in the state
            of Telangana, India.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            12. Amendments
          </Typography>
          <Typography>
            Priacc Innovations reserves the right to modify these terms with
            prior notice. Continued use of software/services constitutes
            acceptance of the modified terms.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            13. Dispute Resolution
          </Typography>
          <Typography>
            Any disputes will first be addressed through negotiation. If
            unresolved, disputes will be settled via arbitration in
            Jurisdiction.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            14. Force Majeure
          </Typography>
          <Typography>
            Priacc Innovations is not liable for delays or failures caused by
            events beyond its control, including natural disasters, acts of war,
            or government actions.
          </Typography>
        </Section>

        <Section>
          <Typography variant="h5" component="h2" gutterBottom>
            15. Entire Agreement
          </Typography>
          <Typography>
            This document constitutes the complete agreement between Priacc
            Innovations and the Client, superseding all prior agreements.
          </Typography>
        </Section>
      </StyledContainer>
      <Footer/>
    </div>
  );
};

export default Terms;
