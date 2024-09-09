import React from 'react';
import { Typography, Card, CardContent, Button, Grid, Box } from '@mui/material';

const ProgressCard = ({ title, value, subtitle }) => (
  <Card elevation={3} sx={{ height: '100%' }}>
    <CardContent>
      <Typography variant="h6" component="div">
        {title}
      </Typography>
      <Typography variant="h3" component="div" sx={{ my: 2 }}>
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
    </CardContent>
  </Card>
);

const ProgressDashboard = ({ title, cards, actionText, onActionClick }) => {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', p: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <ProgressCard {...card} />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        onClick={onActionClick}
        sx={{
          backgroundColor: '#6a1b9a',
          '&:hover': {
            backgroundColor: '#4a148c',
          },
        }}
      >
        {actionText}
      </Button>
    </Box>
  );
};

export default ProgressDashboard;