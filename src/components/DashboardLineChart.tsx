import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const revenueProfitData = [
  { month: 'Jul 24', revenue: 80, profit: 30 },
  { month: 'Aug 24', revenue: 82, profit: 32 },
  { month: 'Sep 24', revenue: 85, profit: 35 },
  { month: 'Oct 24', revenue: 90, profit: 38 },
  { month: 'Nov 24', revenue: 95, profit: 40 },
  { month: 'Dec 24', revenue: 100, profit: 45 },
  { month: 'Jan 25', revenue: 81.6, profit: 33 },
  { month: 'Feb 25', revenue: 98, profit: 42 },
  { month: 'Mar 25', revenue: 99, profit: 43 },
  { month: 'Apr 25', revenue: 97, profit: 41 },
  { month: 'May 25', revenue: 96, profit: 40 },
  { month: 'Jun 25', revenue: 95, profit: 39 },
];

const DashboardLineChart = () => (
  <Paper sx={{ p: 2 }}>
    <Typography variant="body2" fontWeight={500} mb={1}>Revenue & Profit Trend</Typography>
    <Box sx={{ height: 180 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={revenueProfitData}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#1976d2" name="Revenue" />
          <Line type="monotone" dataKey="profit" stroke="#e57373" name="Profit Trend" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  </Paper>
);

export default DashboardLineChart;
