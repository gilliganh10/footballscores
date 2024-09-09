import React from 'react';
import Table from '../components/display/Table';
import { Box, Typography, Container } from '@mui/material';

const TablePage = () => {
  const columns = [
    { field: 'position', headerName: 'Pos', width: 70 },
    { field: 'team', headerName: 'Team', width: 200 },
    { field: 'played', headerName: 'P', width: 70 },
    { field: 'won', headerName: 'W', width: 70 },
    { field: 'drawn', headerName: 'D', width: 70 },
    { field: 'lost', headerName: 'L', width: 70 },
    { field: 'goalsFor', headerName: 'GF', width: 70 },
    { field: 'goalsAgainst', headerName: 'GA', width: 70 },
    { field: 'goalDifference', headerName: 'GD', width: 70 },
    { field: 'points', headerName: 'Pts', width: 70 },
  ];

  const rows = [
    { id: 1, position: 1, team: 'Manchester City', played: 38, won: 29, drawn: 5, lost: 4, goalsFor: 94, goalsAgainst: 33, goalDifference: 61, points: 92 },
    { id: 2, position: 2, team: 'Arsenal', played: 38, won: 26, drawn: 6, lost: 6, goalsFor: 88, goalsAgainst: 43, goalDifference: 45, points: 84 },
    { id: 3, position: 3, team: 'Manchester United', played: 38, won: 23, drawn: 6, lost: 9, goalsFor: 58, goalsAgainst: 43, goalDifference: 15, points: 75 },
    { id: 4, position: 4, team: 'Newcastle', played: 38, won: 19, drawn: 14, lost: 5, goalsFor: 68, goalsAgainst: 33, goalDifference: 35, points: 71 },
    { id: 5, position: 5, team: 'Liverpool', played: 38, won: 19, drawn: 10, lost: 9, goalsFor: 75, goalsAgainst: 47, goalDifference: 28, points: 67 },
    // Add more rows as needed
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Premier League Table
        </Typography>
        <Box sx={{ width: '100%', maxWidth: 900 }}>
          <Table rows={rows} columns={columns} pageSize={20} />
        </Box>
      </Box>
    </Container>
  );
};

export default TablePage;