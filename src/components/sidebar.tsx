import React from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TableChartIcon from '@mui/icons-material/TableChart';
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{
      width: 72,
      height: '100vh',
      bgcolor: '#163A5F',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      py: 2,
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 1000,
      boxShadow: 2,
    }}>
      {/* Custom blue diamond/arrow icon in dark square */}
      <Box sx={{ mb: 3, bgcolor: '#212936', borderRadius: 2, p: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="24" height="24" rx="8" fill="#fff" />
          <path d="M16 9L22 16L16 23L10 16L16 9Z" stroke="#3EC6FF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </svg>
      </Box>
      {/* Navigation Icons */}
      <IconButton sx={{ color: '#fff', mb: 2 }} onClick={() => navigate('/dashboard')}>
        <DashboardIcon />
      </IconButton>
      <IconButton sx={{ color: '#fff', mb: 2 }} onClick={() => navigate('/companies')}>
        <TableChartIcon />
      </IconButton>
      <IconButton sx={{ color: '#fff', mb: 2 }}>
        <InsightsIcon />
      </IconButton>
      <IconButton sx={{ color: '#fff', mb: 2 }}>
        <SettingsIcon />
      </IconButton>
      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: '60%', my: 2 }} />
      <Box sx={{ flexGrow: 1 }} />
      {/* User Avatar or Settings */}
      <IconButton sx={{ color: '#fff', mb: 2 }}>
        <AccountCircleIcon />
      </IconButton>
    </Box>
  );
};

export default Sidebar;
