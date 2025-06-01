import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  styled,
  Link,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlineIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Footer from "../Footer/Footer";

// Full viewport dark wrapper
const OuterWrapper = styled(Box)({
  backgroundColor: "#121212",
  minHeight: "100vh",
  width: "100vw",
  paddingTop: 64,
  paddingBottom: 64,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
});

// Inner container for content, no background so dark shows on sides
const InnerContainer = styled(Container)({
  backgroundColor: "transparent",
  color: "#eee",
  paddingLeft: 24,
  paddingRight: 24,
  maxWidth: 1100,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
});

const FormContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1100px",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

const InputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(1),
  width: "100%",
}));

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    color: "#eee",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.7)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#BB86FC",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
  },
  width: "100%",
});

const MapContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "450px",
  marginTop: theme.spacing(6),
  "& iframe": {
    width: "100%",
    height: "100%",
    border: 0,
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0 0 15px rgba(187, 134, 252, 0.5)",
  },
  [theme.breakpoints.up("md")]: {
    width: "90vw",
    left: "calc(-50vw + 50%)",
  },
}));

// Simple keyframe animation for the title
const AnimatedTitle = styled(Typography)({
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: 48,
  fontSize: "3rem",
  background: "linear-gradient(270deg, #BB86FC, #6200EE, #BB86FC)",
  backgroundSize: "600% 600%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradientAnimation 8s ease infinite",
  "@keyframes gradientAnimation": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
});

const Contact = () => {
  return (
    <>
      <OuterWrapper>
        <InnerContainer>
          <AnimatedTitle variant="h1" component="h1">
          Crestonix Global Solutions
          </AnimatedTitle>

          <FormContainer>
            <Box
              sx={{
                display: "flex",
                gap: 4,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ bgcolor: "#1e1e2f", p: 4, borderRadius: 2, flex: 1 }}>
                <form>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 3,
                      my: { xs: 3 },
                    }}
                  >
                    <InputContainer sx={{ width: "300px" }}>
                      <PersonOutlineIcon sx={{ color: "#BB86FC", mt: 2 }} />
                      <StyledTextField
                        label="Your Name"
                        variant="outlined"
                        fullWidth
                      />
                    </InputContainer>

                    <InputContainer sx={{ width: "300px" }}>
                      <EmailOutlineIcon sx={{ color: "#BB86FC", mt: 2 }} />
                      <StyledTextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        fullWidth
                      />
                    </InputContainer>
                  </Box>

                  <InputContainer sx={{ mt: 3 }}>
                    <PhoneOutlinedIcon sx={{ color: "#BB86FC", mt: 2 }} />
                    <StyledTextField
                      label="Phone Number"
                      variant="outlined"
                      type="tel"
                      fullWidth
                    />
                  </InputContainer>

                  <InputContainer sx={{ mt: 3 }}>
                    <MessageOutlinedIcon sx={{ color: "#BB86FC", mt: 2 }} />
                    <StyledTextField
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                    />
                  </InputContainer>

                  <Button
                    variant="contained"
                    sx={{
                      mt: 4,
                      backgroundColor: "#BB86FC",
                      color: "#121212",
                      "&:hover": {
                        backgroundColor: "#9b59b6",
                        color: "#fff",
                      },
                      float: "right",
                      px: 5,
                      py: 1.5,
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    Submit
                  </Button>
                </form>
              </Box>

              <Box
                sx={{
                  width: { md: "350px" },
                  color: "#eee",
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Address
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.8 }}
                  gutterBottom
                >
                  407, 4th Floor, Jain Sadguru Capital Park, Beside Rameshwaram
                  Cafe, High-Tech City, Hyderabad, Telangana, 500081
                </Typography>

                <Box
                  sx={{
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    p: 1,
                    display: "flex",
                    gap: 2,
                    borderRadius: 1,
                    alignItems: "center",
                  }}
                >
                  <CallIcon sx={{ color: "#BB86FC" }} />
                  <Typography>+91 8096695559</Typography>
                </Box>

                <Box
                  sx={{
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    p: 1,
                    display: "flex",
                    gap: 2,
                    mt: 2,
                    borderRadius: 1,
                    alignItems: "center",
                  }}
                >
                  <EmailIcon sx={{ color: "#BB86FC" }} />
                  <Link
                    href="mailto:info@crestonixglobal.com"
                    underline="hover"
                    color="#BB86FC"
                  >
                    info@crestonixglobal.com
                  </Link>
                </Box>
              </Box>
            </Box>
          </FormContainer>

          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.434639910451!2d78.38556190352783!3d17.446881332094783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910d8d1c4f8b%3A0x6ef1b184af90fa3f!2sCapital%20Park!5e0!3m2!1sen!2sin!4v1735890288194!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Crestonix Global Location"
            />
          </MapContainer>
        </InnerContainer>
      </OuterWrapper>
    </>
  );
};

export default Contact;
