import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

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

const marginTrendsData = [
  { month: 'Jan', revenue: 85.6, opEx: 71.2, cogs: 78.3 },
  { month: 'Feb', revenue: 90.2, opEx: 73.1, cogs: 80.1 },
  { month: 'Mar', revenue: 95.1, opEx: 75.0, cogs: 82.5 },
  { month: 'Apr', revenue: 100.3, opEx: 77.8, cogs: 85.0 },
  { month: 'May', revenue: 98.7, opEx: 76.5, cogs: 83.2 },
  { month: 'Jun', revenue: 97.2, opEx: 75.9, cogs: 82.0 },
];

const DashboardTrends = () => (
  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
    <Paper sx={{ flex: 2, p: 2 }}>
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
    <Paper sx={{ flex: 1, p: 2 }}>
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
  </Box>
);

export default DashboardTrends;
