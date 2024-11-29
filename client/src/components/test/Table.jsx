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
    team: team.Club,
    played: team.Played,
    won: team.Won,
    drawn: team.Drawn,
    lost: team.Lost,
    goalsFor: team.GF,
    goalsAgainst: team.GA,
    goalDifference: team.GD,
    points: team.Points,
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
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h6" component="h2" gutterBottom>
        League Table
      </Typography>
      <Box sx={{ width: '100%', maxWidth: 900 }}>
        <Table 
            rows={rows} 
            columns={columns} 
            pageSize={20}
            rowsPerPageOptions={[20]}
            disableSelectionOnClick
            autoHeight
            hideFooter
        />
      </Box>
    </Box>
  );
};

export default TestTable;
