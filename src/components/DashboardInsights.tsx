import React from 'react';
import { Paper, Typography, Divider, Box } from '@mui/material';

const DashboardInsights = () => (
  <Paper sx={{ p: 2, bgcolor: '#fff7e6', height: '89%' }}>
    <Typography variant="body2" fontWeight={500} mb={1}>Insights</Typography>
    <Divider sx={{ mb: 1 }} />
    <Box mb={2}>
      <Typography variant="subtitle2" color="warning.main" fontWeight={700} mb={1}>Monthly Variance Summaries</Typography>
      <Typography variant="body2" mb={1}>
        Helix Digital Innovations reported an 2% decline in profit this month, primarily driven by increased logistics expenses.
      </Typography>
    </Box>
    <Box mb={2}>
      <Typography variant="subtitle2" color="warning.main" fontWeight={700} mb={1}>Recommended Actions</Typography>
      <Typography variant="body2" mb={1}>
        Reduce payroll cost in <span style={{ color: '#f57c00' }}>Creative Technologies</span> by 12% to improve efficiency.
      </Typography>
    </Box>
    <Box mb={2}>
      <Typography variant="subtitle2" color="warning.main" fontWeight={700} mb={1}>Market Trends</Typography>
      <Typography variant="body2" mb={1}>
        Quantum Innovations LLC has seen a 15% increase in customer demand, attributed to the launch of their new product line.
      </Typography>
    </Box>
    <Box>
      <Typography variant="subtitle2" color="warning.main" fontWeight={700} mb={1}>Future Projections</Typography>
      <Typography variant="body2">
        Analysis predicts a 10% growth in revenue for <span style={{ color: '#f57c00' }}>Helix Digital Innovations</span> next quarter, as new partnerships are expected to enhance market reach.
      </Typography>
    </Box>
  </Paper>
);

export default DashboardInsights;
