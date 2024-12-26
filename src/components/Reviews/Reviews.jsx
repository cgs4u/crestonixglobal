import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

const CompanyBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
}));

const QuoteTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
  minHeight: 160,
}));

const AvatarBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(2),
}));

const LogoTypography = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const testimonials = [
  {
    company: 'Boltshift',
    logo: '⚡', // You can replace with actual logo component/image
    quote: "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
    author: 'Mark Zellers',
    role: 'CEO, Co-Founder',
    avatar: '/api/placeholder/48/48'
  },
  {
    company: 'Lightbox',
    logo: '📦', // You can replace with actual logo component/image
    quote: "This powerfull tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
    author: 'Natalia Larsson',
    role: 'Director of Sales',
    avatar: '/api/placeholder/48/48'
  },
  {
    company: 'Interlock',
    logo: '🔒', // You can replace with actual logo component/image
    quote: "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers than comply with this regulation and as we look to create our website and this builder just outstanding!",
    author: 'Sarah Edrissi',
    role: 'Lead Marketing',
    avatar: '/api/placeholder/48/48'
  }
];

const Reviews = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 2 }}>
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} md={4} key={index} sx={{width:{md:"350px",xs:"120px"},height:{md:450}}}>
          <StyledCard>
            <CardContent>
              <CompanyBox sx={{py:{md:2}}}>
                <LogoTypography variant="h5" component="span" sx={{fontSize:{xs:30,md:40}}}>
                  {testimonial.logo}
                </LogoTypography>
                <Typography variant="h6" component="span" sx={{fontSize:{xs:30,md:40}}}>
                  {testimonial.company}
                </Typography>
              </CompanyBox>
              
              <QuoteTypography variant="body1" sx={{fontSize:{md:20}}} >
                "{testimonial.quote}"
              </QuoteTypography>
              
              <AvatarBox>
                <StyledAvatar
                  src={testimonial.avatar}
                  alt={testimonial.author}
                />
                <Box>
                  <Typography variant="subtitle1">
                    {testimonial.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </Box>
              </AvatarBox>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Reviews;