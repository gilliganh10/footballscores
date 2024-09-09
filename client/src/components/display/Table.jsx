import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ rows, columns, pageSize = 10, ...props }) => {
  return (
    <div style={{ height: 400}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        disableSelectionOnClick
        {...props}
      />
    </div>
  );
};

export default Table;