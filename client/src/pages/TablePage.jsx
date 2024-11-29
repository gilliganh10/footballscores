import React from 'react';
import Table from '../components/display/Table';
import { Box, Typography, Container } from '@mui/material';
import TestTable from '../components/test/Table';

const TablePage = () => {
  

  return (
    <Container maxWidth="lg">
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', my: 4 }}>
       
        <TestTable/>
      </Box>
    </Container>
  );
};

export default TablePage;