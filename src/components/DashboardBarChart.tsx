import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const marginTrendsData = [
  { month: 'Jan', revenue: 85.6, opEx: 71.2, cogs: 78.3 },
  { month: 'Feb', revenue: 90.2, opEx: 73.1, cogs: 80.1 },
  { month: 'Mar', revenue: 95.1, opEx: 75.0, cogs: 82.5 },
  { month: 'Apr', revenue: 100.3, opEx: 77.8, cogs: 85.0 },
  { month: 'May', revenue: 98.7, opEx: 76.5, cogs: 83.2 },
  { month: 'Jun', revenue: 97.2, opEx: 75.9, cogs: 82.0 },
];

const DashboardBarChart = () => (
  <Paper sx={{ p: 2 }}>
    <Typography variant="body2" fontWeight={500} mb={1}>Margin Trends (Last 6 Months)</Typography>
    <Box sx={{ height: 180 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={marginTrendsData}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#1976d2" name="Revenue" />
          <Bar dataKey="opEx" fill="#ffb300" name="Operating Expense" />
          <Bar dataKey="cogs" fill="#64b5f6" name="COGS" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  </Paper>
);

export default DashboardBarChart;
