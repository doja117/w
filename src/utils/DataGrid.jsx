import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export const ExecHeadsTable = ({ rows, columns, onRowClick, selectedRowId }) => (
  <Box sx={{ height: 400, width: '33%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      getRowId={(row) => row.id}
      onRowClick={onRowClick}
      rowClassName={(params) =>
        params.id === selectedRowId ? 'selected-row' : ''
      }
      sx={{
        '& .selected-row': {
          backgroundColor: 'lightblue !important',
        },
      }}
    />
  </Box>
);

export const GroupTable = ({ data }) => {
  const columns = [
    { field: 'exec_head', headerName: 'Executive Head', width: 200 },
    { field: 'exec_head_desc', headerName: 'Description', width: 300 },
  ];

  return (
    <Box sx={{ height: 400, width: '33%' }}>
      <DataGrid rows={data} columns={columns} pageSize={5} />
    </Box>
  );
};
