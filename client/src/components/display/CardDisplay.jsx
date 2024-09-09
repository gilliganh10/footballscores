import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxWidth: '275px',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const CardHeader = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const CardContent = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  wordBreak: 'break-word', // Allow long words to break and wrap
});

const CardDisplay = ({ cards }) => {
  return (
    <Box sx={{ width: '50%', maxWidth: '700px', margin: '0 auto' }}>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid xs={12} sm={6} key={index}>
            <Item>
              <CardHeader>
                <Typography variant="h6" component="div" noWrap>
                  {card.title}
                </Typography>
              </CardHeader>
              <CardContent>
                <Typography variant="body1" gutterBottom sx={{ wordWrap: 'break-word' }}>
                  {card.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ wordWrap: 'break-word' }}>
                  {card.subtitle}
                </Typography>
              </CardContent>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardDisplay;