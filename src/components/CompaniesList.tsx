import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, IconButton, Button, Table, TableHead, TableRow, TableCell, TableBody, Chip, InputAdornment } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FilterListIcon from '@mui/icons-material/FilterList';
import Sidebar from './sidebar';
import TableChartIcon from '@mui/icons-material/TableChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AllInboxIcon from '@mui/icons-material/AllInbox';

const companies = [
  {
    name: 'Global Tech Solutions', ceo: 'Nichol James', revenue: '€245M', profit: '+€35M', ebitda: '+€25M', margin: '28.5%', marginUp: true, insights: ['Strong Growth', 'Growth Leader : Tech']
  },
  {
    name: 'Tech Innovation Corp', ceo: 'Alex Morgan', revenue: '€342M', profit: '+€40M', ebitda: '+€5M', margin: '22.3%', marginUp: true, insights: ['High Profitability', 'Good Growth']
  },
  {
    name: 'NexGen Innovations', ceo: 'Jordan Lee', revenue: '€224M', profit: '-€10M', ebitda: '+€12M', margin: '18.5%', marginUp: true, insights: ['Robust Expansion', 'Tech sector leader']
  },
  {
    name: 'Synergy Solutions', ceo: 'Martin Luthar', revenue: '€85M', profit: '+€32M', ebitda: '+€20M', margin: '13.6%', marginUp: false, insights: ['Poor Expansion', 'Loss making']
  },
  {
    name: 'Vertex Global Services', ceo: 'Jatin Mehta', revenue: '€120M', profit: '-€12M', ebitda: '+€10M', margin: '5.4%', marginUp: false, insights: ['Restructuring Phase', 'Strategic Pivot']
  },
  {
    name: 'Nordic Systems AB', ceo: 'Jay Dublin', revenue: '€310M', profit: '-€2M', ebitda: '+€15M', margin: '0.6%', marginUp: false, insights: ['Struggling sector: Marketing', 'Loss-Making Company']
  },
  {
    name: 'Quantum Computing Inc', ceo: 'Jay Dublin', revenue: '€90M', profit: '+€15M', ebitda: '+€2M', margin: '30.1%', marginUp: true, insights: ['Market Leader', 'Cost Optimization']
  },
  {
    name: 'Pinnacle Systems', ceo: 'Jay Dublin', revenue: '€275M', profit: '+€50M', ebitda: '+€6M', margin: '19.8%', marginUp: true, insights: ['Reliable Returns', 'Strong Balance Sheet']
  },
  {
    name: 'Pacific Solutions Ltd', ceo: 'Jay Dublin', revenue: '€400M', profit: '-€5M', ebitda: '+€9M', margin: '16.2%', marginUp: true, insights: ['Solid Financial Track Record', 'Investor-Friendly']
  },
  {
    name: 'Innovatech Dynamics', ceo: 'Jay Dublin', revenue: '€90M', profit: '+€20M', ebitda: '+€20M', margin: '9.7%', marginUp: false, insights: ['Liquidity Crunch', 'High Overheads']
  },
  {
    name: 'Technosphere Groups', ceo: 'Jay Dublin', revenue: '€230M', profit: '+€15M', ebitda: '+€20M', margin: '3.5%', marginUp: true, insights: ['Reliable Returns', 'Strength : Services']
  },
];

const CompaniesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const filteredCompanies = companies.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const pageCount = Math.ceil(filteredCompanies.length / pageSize);
  const pagedCompanies = filteredCompanies.slice((page - 1) * pageSize, page * pageSize);
  const handlePrev = () => setPage(p => Math.max(1, p - 1));
  const handleNext = () => setPage(p => Math.min(pageCount, p + 1));
  const handlePage = (p: number) => setPage(p);
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: '#f7f8fa' }}>
      <Sidebar />
      <Box sx={{ flex: 1, ml: '72px', p: 2 }}>
        {/* Header row: icon + label + right controls */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, px: 1 }}>
          <TableChartIcon sx={{ fontSize: 28, color: '#222', mr: 1 }} />
          <Typography variant="h6" fontWeight={700} sx={{ mr: 3 }}>
            List of Companies
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/* Quick Info, Bell, AI Chat */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 2 }}>
            <Button startIcon={<AllInboxIcon sx={{ color: '#d97706' }} />} sx={{ bgcolor: '#fff7e6', color: '#d97706', fontWeight: 500, borderRadius: 2, px: 2, textTransform: 'none', boxShadow: 0, border: 'none', minWidth: 0 }}>
              Quben Infra
            </Button>
            <IconButton sx={{ bgcolor: '#fff', borderRadius: 2, border: '1px solid #e0e0e0', p: 1 }}>
              <NotificationsNoneIcon sx={{ color: '#222' }} />
            </IconButton>
            <Button startIcon={<ChatBubbleOutlineIcon sx={{ color: '#f57c00' }} />} sx={{ bgcolor: '#fff7e6', color: '#f57c00', fontWeight: 500, borderRadius: 2, px: 2, textTransform: 'none', boxShadow: 0, border: 'none', minWidth: 0 }}>
              AI Chat
            </Button>
          </Box>
        </Box>
        {/* Controls row: search/filter/export/add company */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, px: 1 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search Companies"
            sx={{ mr: 1, width: 260, background: '#fff' }}
            InputProps={{
              sx: { borderRadius: 2, fontSize: 15 },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#bdbdbd' }} />
                </InputAdornment>
              ),
            }}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <IconButton color="primary" sx={{ bgcolor: '#f5faff', borderRadius: 2, border: '1px solid #e0e0e0', ml: 1, mr: 2 }}>
            <FilterListIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="outlined" sx={{ mr: 2, borderRadius: 2, textTransform: 'none', fontWeight: 500, px: 2 }}>
            &#8681; Export
          </Button>
          <Button variant="outlined" sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 500, px: 2, bgcolor: '#f5faff', border: '1px solid #e0e0e0' }}>
            + Add Company
          </Button>
        </Box>
      <Paper sx={{ minHeight: 120, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', position: 'relative', pb: 7 }}>
        <Table size="small" sx={{ minHeight: 80, verticalAlign: 'top' }}>
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>CEO/Key Person</TableCell>
              <TableCell>Revenue</TableCell>
              <TableCell>Profit</TableCell>
              <TableCell>EBITDA</TableCell>
              <TableCell>Gross Margin</TableCell>
              <TableCell>Key Insights</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pagedCompanies.map((c, idx) => (
              <TableRow key={idx} hover>
                <TableCell><Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><BusinessIcon sx={{ color: '#1976d2' }} />{c.name}</Box></TableCell>
                <TableCell><Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><PersonIcon sx={{ color: '#ab47bc' }} />{c.ceo}</Box></TableCell>
                <TableCell>{c.revenue}</TableCell>
                <TableCell sx={{ color: c.profit.startsWith('+') ? 'success.main' : 'error.main' }}>{c.profit}</TableCell>
                <TableCell>{c.ebitda}</TableCell>
                <TableCell sx={{ color: c.marginUp ? 'success.main' : 'error.main', display: 'flex', alignItems: 'center', gap: 1 }}>
                  {c.marginUp ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}{c.margin}
                </TableCell>
                <TableCell>
                  {c.insights.map((ins, i) => (
                    <Chip key={i} label={ins} size="small" sx={{ mr: 0.5, mb: 0.5 }} />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Interactive Pagination at bottom right */}
        <Box sx={{ position: 'absolute', right: 24, bottom: 16, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ color: '#888', fontSize: 14, mr: 1 }}>
            {filteredCompanies.length === 0
              ? '0'
              : `${(page - 1) * pageSize + 1}-${Math.min(page * pageSize, filteredCompanies.length)} of ${filteredCompanies.length}`}
          </Typography>
          <Button size="small" sx={{ minWidth: 0, px: 1, color: page === 1 ? '#ccc' : '#1976d2', fontWeight: 700, fontSize: 15 }} onClick={handlePrev} disabled={page === 1}>{'<'}</Button>
          {[...Array(pageCount)].map((_, i) => (
            <Button
              key={i}
              size="small"
              variant={page === i + 1 ? 'contained' : 'text'}
              sx={{ minWidth: 0, px: 1, bgcolor: page === i + 1 ? '#fff' : 'transparent', color: page === i + 1 ? '#222' : '#1976d2', fontWeight: page === i + 1 ? 700 : 500, boxShadow: 'none', fontSize: 15 }}
              onClick={() => handlePage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button size="small" sx={{ minWidth: 0, px: 1, color: page === pageCount ? '#ccc' : '#1976d2', fontWeight: 700, fontSize: 15 }} onClick={handleNext} disabled={page === pageCount}>NEXT {'>'}</Button>
        </Box>
      </Paper>
      </Box>
    </Box>
  );
};

export default CompaniesList;
