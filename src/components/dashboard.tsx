import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './sidebar';
import DashboardHeader from './DashboardHeader';
import DashboardTopCards from './DashboardTopCards';
import DashboardLineChart from './DashboardLineChart';
import DashboardBarChart from './DashboardBarChart';
import DashboardEntityTable from './DashboardEntityTable';
import DashboardInsights from './DashboardInsights';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: '#f7f8fa' }}>
      <Sidebar />
      <Box sx={{ flex: 1, ml: '72px', p: 2 }}>
        <DashboardHeader />
        <DashboardTopCards />
        <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'stretch', minHeight: 0 }}>
          {/* Left column: line chart above table */}
          <Box sx={{ flex: 2.5, display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
            <DashboardLineChart />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <DashboardEntityTable />
            </Box>
          </Box>
          {/* Right column: bar chart above insights */}
          <Box sx={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: 2, minWidth: 400, maxWidth: 520 }}>
            <DashboardBarChart />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <DashboardInsights />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
