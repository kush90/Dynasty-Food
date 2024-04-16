import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'; // Import Box component
import { TextField, FormControl, Button } from "@mui/material";
import Typography from '@mui/material/Typography';

import logo from '../../assets/app.jpeg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ResponsiveImage = styled('img')({
  maxWidth: '100%',
  height: '100%',
  display: 'block',
});

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()

    setEmailError(false)
    setPasswordError(false)

    if (email == '') {
      setEmailError(true)
    }
    if (password == '') {
      setPasswordError(true)
    }

    if (email && password) {
      console.log(email, password)
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }} style={{height:'487px'}} className="login-height">
    <Grid container spacing={1}>
      {/* Column layout for web view */}
      <Grid item xs={12} md={6} lg={6} style={{ maxHeight: '465px' }} className='login-img'>
        {/* Apply margin using Box component */}
        <Box sx={{ height: '100%' }}>
          <Item sx={{ height: '100%' }} style={{ boxShadow: 'none' }}>
            {/* Use the ResponsiveImage component */}
            <ResponsiveImage src={logo} alt="Logo" />
          </Item>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6} style={{ minHeight: '465px' }} >
        {/* Apply margin using Box component */}
        <Box sx={{ height: '100%' }}>
          <Item sx={{ height: '100%' }} style={{ boxShadow: 'none' }}>
            <form autoComplete="off" onSubmit={handleSubmit} className='login-form'>
              <h2 style={{color:'#781fde'}}>Login Form</h2>
              <TextField
                label="Email"
                onChange={e => setEmail(e.target.value)}
                required
                variant="outlined"
                color="error"
                type="email"
                sx={{ mb: 3 }}
                fullWidth
                value={email}
                error={emailError}
              />
              <TextField
                label="Password"
                onChange={e => setPassword(e.target.value)}
                required
                variant="outlined"
                color="error"
                type="password"
                value={password}
                error={passwordError}
                fullWidth
                sx={{ mb: 3 }}
              />
              <Typography variant="a" sx={{
                textDecoration: 'underline',
                color: 'blue',
              }} style={{ float: 'left' }}>Forgot Password !</Typography>
              <Button variant="outlined" style={{color:'#781fde',borderColor:'#781fde'}} type="submit">Login</Button>

            </form>
          </Item>
        </Box>
      </Grid>
    </Grid>
    </Box>
  );
};

export default Login;
