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

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#fff",
  color: "#000",
  padding: theme.spacing(6, 2),
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const FormContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
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
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(23, 22, 22, 0.23)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(31, 25, 25, 0.87)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(0, 0, 0, 0.74)",
  },
  width: "100%",
});

const MapContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "450px",
  "& iframe": {
    width: "100%",
    height: "100%",
    marginTop: theme.spacing(6),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },
  [theme.breakpoints.up("md")]: {
    // On medium screens and up, make it span 100vw and adjust the left alignment
    width: "90vw",
    left: "calc(-50vw + 50%)", // Aligns the map to span across the viewport
  },
}));

const Contact = () => {
  return (
    <div>
      <StyledContainer>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 6,
          }}
        >
          Contact Us
        </Typography>

        <FormContainer>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box sx={{ bgcolor: "#461e5c", p: 3 }}>
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
                    <PersonOutlineIcon sx={{ color: "white", mt: 2 }} />
                    <StyledTextField
                      label="Your Name"
                      variant="outlined"
                      fullWidth
                      sx={{ bgcolor: "white" }}
                    />
                  </InputContainer>

                  <InputContainer sx={{ width: "300px" }}>
                    <EmailOutlineIcon sx={{ color: "white", mt: 2 }} />
                    <StyledTextField
                      label="Mail"
                      variant="outlined"
                      type="email"
                      fullWidth
                      sx={{ bgcolor: "white" }}
                    />
                  </InputContainer>
                </Box>

                <InputContainer sx={{ mt: 3 }}>
                  <PhoneOutlinedIcon sx={{ color: "white", mt: 2 }} />
                  <StyledTextField
                    label="Phone Number"
                    variant="outlined"
                    type="tel"
                    fullWidth
                    sx={{ bgcolor: "white" }}
                  />
                </InputContainer>
                {/* <InputContainer sx={{ mt: 3 }}>
                  <PhoneOutlinedIcon sx={{ color: "black", mt: 2 }} />
                  <StyledTextField
                    label="Phone Number"
                    variant="outlined"
                    type="tel"
                    fullWidth
                    sx={{ bgcolor: "white" }}
                  />
                </InputContainer> */}

                <InputContainer sx={{ mt: 3 }}>
                  <MessageOutlinedIcon sx={{ color: "white", mt: 2 }} />
                  <StyledTextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{ bgcolor: "white" }}
                  />
                </InputContainer>

                <Button
                  variant="contained"
                  sx={{
                    mt: 4,
                    backgroundColor: "#fff",
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "rgba(23, 22, 22, 0.9)",
                      color: "#fff",
                    },
                    float: "right",
                    px: 4,
                    py: 1,
                  }}
                >
                  Submit
                </Button>
              </form>
            </Box>
            <Box sx={{ width: { md: "350px" } }}>
              <Box>
                <Typography variant="h4">Address</Typography>
                <Typography
                  variant="h5"
                  sx={{ width: { md: "350px" }, lineHeight: { md: 2 }, my: 3 }}
                >
                  407,4th Floor, Jain Sadguru Capital Park, Beside Rameshwaram
                  Cafe,High-Tech City, hyderabad,Telangana,500081
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "1px solid #adb5bd",
                  p: 1,
                  display: "flex",
                  gap: 2,
                }}
              >
                <CallIcon />
                <Typography>+91 9121047857</Typography>
              </Box>
              <Box
                sx={{
                  border: "1px solid #adb5bd",
                  p: 1,
                  display: "flex",
                  gap: 2,
                  mt: 2,
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
            </Box>
          </Box>
        </FormContainer>
        <Box sx={{ flex: 1, py: 3 }}>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1131.6102529718426!2d78.38556190352783!3d17.446881332094783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910d8d1c4f8b%3A0x6ef1b184af90fa3f!2sCapital%20Park!5e0!3m2!1sen!2sin!4v1735890288194!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Capital Park location"
            />
          </MapContainer>
        </Box>
      </StyledContainer>
      
    </div>
  );
};

export default Contact;
