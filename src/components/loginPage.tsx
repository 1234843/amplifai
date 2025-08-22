import React from 'react';
import { Button, TextField, Paper, Typography, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    // You can add authentication logic here
    navigate('/dashboard');
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
        <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
          <Box mb={2} display="flex" alignItems="center">
            <img src="/logo192.png" alt="FlowState Logo" style={{ height: 32, marginRight: 8 }} />
            <Typography variant="h5" fontWeight={700} color="primary">FlowState</Typography>
          </Box>
          <Typography variant="h6" gutterBottom>Login</Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            Enter your email below to login to your account.
          </Typography>
          <TextField
            label="Business Email Address"
            placeholder="username@domain.com"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            placeholder="Enter Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Box display="flex" justifyContent="flex-end" mb={2}>
            <Link href="#" variant="body2">Forgot your password?</Link>
          </Box>
          <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }} onClick={handleLogin}>
            Login
          </Button>
          <Typography variant="body2" align="center">
            Don't have an account? <Link href="#">Sign up</Link>
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ flex: 1, background: '#163A5F', color: '#fff', display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <Box sx={{ p: 6 }}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            Drive Better Decisions<br />with Centralized Performance & Account Intelligence.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;