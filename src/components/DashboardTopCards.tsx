import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const DashboardTopCards = () => (
  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
    <Paper sx={{ flex: 1, p: 2 }}>
      <Typography variant="body2" color="textSecondary">Consolidated Revenue</Typography>
      <Typography variant="h5" fontWeight={700}>€24.5B</Typography>
      <Typography variant="body2" color="success.main">▲ +12.5%</Typography>
    </Paper>
    <Paper sx={{ flex: 1, p: 2 }}>
      <Typography variant="body2" color="textSecondary">Net Profit</Typography>
      <Typography variant="h5" fontWeight={700}>€40.5M</Typography>
      <Typography variant="body2" color="success.main">▲ +8.3% YoY</Typography>
    </Paper>
    <Paper sx={{ flex: 1, p: 2 }}>
      <Typography variant="body2" color="textSecondary">EBITDA Margin</Typography>
      <Typography variant="h5" fontWeight={700}>14.6%</Typography>
      <Typography variant="body2" color="error.main">▼ -3.6% YoY</Typography>
    </Paper>
    <Paper sx={{ flex: 1, p: 2 }}>
      <Typography variant="body2" color="textSecondary">Working Capital</Typography>
      <Typography variant="h5" fontWeight={700}>€25.7M</Typography>
      <Typography variant="body2" color="error.main">▼ -3.3% YoY</Typography>
    </Paper>
  </Box>
);

export default DashboardTopCards;
