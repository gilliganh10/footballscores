import React, { useState, useEffect } from 'react';
import apiClient from '../api.js';
import CardDisplay from '../components/display/CardDisplay.jsx';
import { Container, Typography } from '@mui/material';

const CardsPage = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        setLoading(true);
        const response = await apiClient.post('/api/cards');
        const fixtureCards = response.data.fixtures.map(fixture => ({
          title: 'Premier League Fixture',
          value: `${fixture.home_team} vs ${fixture.away_team}`,
          subtitle: 'Upcoming Match'
        }));
        setFixtures(fixtureCards);
      } catch (err) {
        setError('Failed to fetch fixtures. Please try again later.');
        console.error('Error fetching fixtures:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFixtures();
  }, []);

  if (loading) {
    return <Typography align="center" sx={{ py: 2 }}>Loading fixtures...</Typography>;
  }

  if (error) {
    return <Typography align="center" color="error" sx={{ py: 2 }}>{error}</Typography>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Premier League Fixtures
      </Typography>
      <CardDisplay cards={fixtures} />
    </Container>
  );
};

export default CardsPage;