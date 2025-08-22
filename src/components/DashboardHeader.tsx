import React from 'react';
import { Box, Typography, Select, MenuItem, Paper, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const DashboardHeader = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
    {/* Custom dashboard label icon: rounded rectangle with two vertical lines */}
    <Box sx={{ bgcolor: '#fff', borderRadius: 2, p: '4px 8px', mr: 1, display: 'flex', alignItems: 'center', border: '1.5px solid #212936' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="5" stroke="#212936" stroke-width="2" fill="#fff" />
        <rect x="7" y="8" width="2" height="8" rx="1" fill="#212936" />
        <rect x="15" y="8" width="2" height="8" rx="1" fill="#212936" />
      </svg>
    </Box>
    {/* Dashboard label */}
    <Typography variant="h6" fontWeight={700} sx={{ mr: 2 }}>Dashboard</Typography>
    {/* Year filter */}
    <Select defaultValue="FY (2024-2025)" size="small" sx={{ mr: 2, minWidth: 160 }}>
      <MenuItem value="FY (2024-2025)">FY (2024-2025)</MenuItem>
    </Select>
    {/* Right side: Quben Infra, Notifications, AI Chat */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
      <Paper sx={{ px: 2, py: 1, bgcolor: '#fff7e6', color: '#d97706', fontWeight: 500, boxShadow: 'none' }}>Quben Infra</Paper>
      <IconButton sx={{ bgcolor: '#fff', borderRadius: 2, border: '1px solid #e0e0e0', p: 1 }}>
        <NotificationsNoneIcon sx={{ color: '#212936' }} />
      </IconButton>
      <Paper sx={{ px: 2, py: 1, bgcolor: '#ffe7e7', color: '#d32f2f', fontWeight: 500, boxShadow: 'none' }}>AI Chat</Paper>
    </Box>
  </Box>
);

export default DashboardHeader;
