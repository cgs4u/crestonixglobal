import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function Faqs() {
  return (
    <div style={{ background: "linear-gradient(to right bottom,#2f184b,#7251b5)", padding:"50px 20px",borderRadius:"10px" }}>
      <Accordion sx={{ background: "linear-gradient(to right bottom,#2f184b,#7251b5)",color:"white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" sx={{ fontSize: { xs: 20, md: 25 } }}>
            What services do you offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{fontSize:{md:20}}}>
          We offer a wide range of SaaS development services, including product
          ideation, design, development, and post-launch support.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background: "linear-gradient(to right bottom,#2f184b,#7251b5)",color:"white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={{ fontSize: { xs: 20, md: 25 } }}>
            How long does it take to develop a product?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{fontSize:{md:20}}}>
          The timeline for product development depends on the complexity of the
          project. On average, it takes 4-8 weeks for an MVP and additional time
          for advanced features.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background: "linear-gradient(to right bottom,#2f184b,#7251b5)",color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" sx={{ fontSize: { xs: 20, md: 25} }}>
            Do you provide ongoing support after the product is launched?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{fontSize:{md:20}}}>
          Yes, we provide continuous support and maintenance to ensure your
          product performs optimally and evolves with your business needs.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background: "linear-gradient(to right bottom,#2f184b,#7251b5)",color:"white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" sx={{ fontSize: { xs: 20, md: 25 } }}>
            What is your pricing model?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{fontSize:{md:20}}}>
          We offer flexible pricing models, including fixed-price projects, time
          and material, and subscription-based models, tailored to your
          requirements.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background: "linear-gradient(to right bottom,#2f184b,#7251b5)",color:"white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" sx={{ fontSize: { xs: 20, md: 25 } }}>
            How do you ensure data security?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{fontSize:{md:20}}}>
          We follow industry best practices and implement robust security
          measures, including encryption, regular audits, and compliance with
          GDPR and other standards.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
