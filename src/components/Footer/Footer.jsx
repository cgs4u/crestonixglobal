import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(4, 0),
  borderTop: `1px solid ${theme.palette.divider}`
}));

const FlexContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
}));

const FooterSection = styled(Box)(({ theme }) => ({
  flex: '1 1 200px',
  minWidth: '200px',
}));

const LogoImage = styled('img')({
  height: 40,
  marginBottom: 16
});

const Footer = () => {
  return (
    <FooterBox sx={{bgcolor:"#5a189a",color:"white"}}>
      <Container maxWidth="lg">
        <FlexContainer>
          <FooterSection>
            <LogoImage src="/logo.png" alt="Ecuity Exousia" />
          </FooterSection>

          <FooterSection>
            <Typography variant="h6" gutterBottom>
              COMPANY
            </Typography>
            <Link href="/services" color="inherit" display="block" sx={{ mb: 1 }}>
              Services
            </Link>
            <Link href="/about" color="inherit" display="block">
              About
            </Link>
          </FooterSection>

          <FooterSection>
            <Typography variant="h6" gutterBottom>
              LEGAL
            </Typography>
            <Link href="/terms" color="inherit" display="block">
              Terms & Conditions
            </Link>
          </FooterSection>

          <FooterSection>
            <Typography variant="h6" gutterBottom>
              SOCIAL
            </Typography>
            <Link href="https://linkedin.com" color="inherit" display="block" sx={{ mb: 1 }}>
              LinkedIn
            </Link>
            <Link href="https://x.com" color="inherit" display="block">
              X
            </Link>
          </FooterSection>

          <FooterSection>
            <Typography variant="h6" gutterBottom>
              CONTACT
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>ecuityexousia.in</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>CELL: 8790819049</Typography>
            <Typography variant="body2">
              #402,4th Floor, Manjeera, Trinity,
              KPHB Phase-III,
              Kukatpally,Hyderabad,Telangana - 500072
            </Typography>
          </FooterSection>
        </FlexContainer>
      </Container>
    </FooterBox>
  );
};

export default Footer;