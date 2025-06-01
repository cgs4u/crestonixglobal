import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import logoo from "/logoo.png";
import logoo1 from "/logoo1.png"; // Add this logo if not imported

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const goTo = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Left Logo */}
          <Box
            sx={{
              height: 50,
              mr: 2,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <img
              src={logoo}
              alt="Logo"
              style={{ height: "100%", objectFit: "contain" }}
            />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/aboutus" },
                { label: "Services", path: "/services" },
                { label: "Careers", path: "/careers" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contactus" },
              ].map((item) => (
                <MenuItem key={item.label} onClick={() => goTo(item.path)}>
                  <Typography textAlign="center">{item.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Center Navigation Buttons */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/aboutus" },
              { label: "Services", path: "/services" },
              { label: "Careers", path: "/careers" },
              { label: "Contact", path: "/contactus" },
            ].map((item) => (
              <Button
                key={item.label}
                onClick={() => goTo(item.path)}
                sx={{
                  my: 2,
                  color: "white",
                  fontWeight: 500,
                  "&:hover": { scale: "1.1" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Right Logo */}
          <Box
            sx={{
              height: 50,
              ml: 2,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <img
              src={logoo1}
              alt="Right Logo"
              style={{ height: "100%", objectFit: "contain" }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
