import React from 'react';
import { Box, Typography, Select, MenuItem, Paper } from '@mui/material';

const DashboardHeader = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
    <img src="/logo192.png" alt="FlowState Logo" style={{ height: 32, marginRight: 12 }} />
    <Typography variant="h6" fontWeight={700} sx={{ flexGrow: 1 }}>Dashboard</Typography>
    <Select defaultValue="FY (2024-2025)" size="small" sx={{ mr: 2 }}>
      <MenuItem value="FY (2024-2025)">FY (2024-2025)</MenuItem>
    </Select>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Paper sx={{ px: 2, py: 1, bgcolor: '#fff7e6', color: '#d97706', fontWeight: 500 }}>Quben Infra</Paper>
      <Paper sx={{ px: 2, py: 1, bgcolor: '#ffe7e7', color: '#d32f2f', fontWeight: 500 }}>AI Chat</Paper>
    </Box>
  </Box>
);

export default DashboardHeader;
