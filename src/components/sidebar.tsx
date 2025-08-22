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
      {/* Logo */}
      <Box sx={{ mb: 3 }}>
        <img src="/logo192.png" alt="FlowState Logo" style={{ height: 32 }} />
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
