//footballscores\client\src\components\test\Table.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import Table from '../display/Table'; // Reuse the Table component
import data from './TableData'; // Import the test data

const TestTable = () => {
    console.log("data="+data)
    // Map the data to the format required for the DataGrid
  const rows = data.map((team, index) => ({
    id: index + 1, // DataGrid requires an `id` field
    position: team.Position,
    team: team.Team,
    played: team.p_total,
    won: team.w_total,
    drawn: team.d_total,
    lost: team.l_total,
    goalsFor: team.f_total,
    goalsAgainst: team.a_total,
    goalDifference: team.gd_total,
    points: team.pts_total,
  }));

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

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Test League Table
      </Typography>
      <Box sx={{ width: '100%', maxWidth: 900 }}>
        <Table rows={rows} columns={columns} pageSize={20} />
      </Box>
    </Box>
  );
};

export default TestTable;
