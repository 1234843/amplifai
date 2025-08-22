import React from 'react';
import { Paper, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar, Box } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DevicesIcon from '@mui/icons-material/Devices';
import PublicIcon from '@mui/icons-material/Public';

const entityData = [
  { name: 'NextGen Software Ltd.', icon: <BusinessIcon sx={{ color: '#ff7043' }} />, revenue: '€68.3M', profit: '€8.1M', ebitda: '26.5%', cash: '€6.8M', wc: 52 },
  { name: 'Global Tech Solutions', icon: <PublicIcon sx={{ color: '#ffa726' }} />, revenue: '€62.6M', profit: '€6.3M', ebitda: '19.3%', cash: '€4.5M', wc: 76 },
  { name: 'Innovetive Tech Solutions', icon: <EmojiObjectsIcon sx={{ color: '#29b6f6' }} />, revenue: '€54.6M', profit: '€5.3M', ebitda: '18.5%', cash: '€3.8M', wc: 45 },
  { name: 'Creative Design Group', icon: <DesignServicesIcon sx={{ color: '#66bb6a' }} />, revenue: '€36.5M', profit: '€4.1M', ebitda: '0.9%', cash: '€2.3M', wc: 88 },
  { name: 'Digital Dynamics Inc.', icon: <DevicesIcon sx={{ color: '#ab47bc' }} />, revenue: '€30.2M', profit: '€3.9M', ebitda: '-3.9%', cash: '€1.9M', wc: 25 },
  { name: 'Helix Digital Innovations', icon: <EmojiObjectsIcon sx={{ color: '#fbc02d' }} />, revenue: '€22.3M', profit: '€0.3M', ebitda: '-1.5%', cash: '€0.8M', wc: 36 },
];

const DashboardEntityTable = () => (
  <Paper sx={{ mb: 2, p: 2, minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
    <Typography variant="body2" fontWeight={500} mb={1}>Entity-wise Performance</Typography>
    <TableContainer sx={{ minHeight: 280 }}>
      <Table size="small" sx={{ minHeight: 280 }}>
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell>Revenue</TableCell>
            <TableCell>Net Profit</TableCell>
            <TableCell>EBITDA</TableCell>
            <TableCell>Cash Flow(€M)</TableCell>
            <TableCell>WC Cycle (Days)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entityData.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {row.icon}
                  {row.name}
                </Box>
              </TableCell>
              <TableCell>{row.revenue}</TableCell>
              <TableCell>{row.profit}</TableCell>
              <TableCell sx={{ color: row.ebitda.startsWith('-') ? 'error.main' : 'success.main' }}>{row.ebitda}</TableCell>
              <TableCell>{row.cash}</TableCell>
              <TableCell>{row.wc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
);

export default DashboardEntityTable;
