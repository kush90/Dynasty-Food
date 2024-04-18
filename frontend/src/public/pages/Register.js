import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'; // Import Box component
import { TextField, Button } from "@mui/material";

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

const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    setFirstName(false)
    setLastName(false)
    setEmailError(false)
    setPasswordError(false)


    if (firstName == '') {
      setFirstNameError(true)
    }
    if (lastName == '') {
      setLastNameError(true)
    }
    if (email == '') {
      setEmailError(true)
    }
    if (password == '') {
      setPasswordError(true)
    }

    if (firstName && lastName && email && password) {
      console.log(firstName, lastName, email, password)
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }} style={{ height: '487px' }} className="register-height">
      <Grid container spacing={1}>
        {/* Column layout for web view */}
        <Grid item xs={12} md={6} lg={6} style={{ maxHeight: '465px' }} className='register-img'>
          {/* Apply margin using Box component */}
          <Box sx={{ height: '100%' }}>
            <Item sx={{ height: '100%' }} style={{ boxShadow: 'none' }}>
              {/* Use the ResponsiveImage component */}
              <ResponsiveImage src={logo} alt="Logo" />
            </Item>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} style={{ minHeight: '465px' }} className='register-form' >
          {/* Apply margin using Box component */}
          <Box sx={{ height: '100%' }}>
            <Item sx={{ height: '100%' }} style={{ boxShadow: 'none' }}>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <h2 style={{ color: '#781fde' }}>Register Form</h2>
                <TextField
                  label="First Name"
                  onChange={e => setFirstName(e.target.value)}
                  required
                  variant="outlined"
                  color="error"
                  type="text"
                  sx={{ mb: 3 }}
                  fullWidth
                  value={firstName}
                  error={firstNameError}
                />
                <TextField
                  label="Last Name"
                  onChange={e => setLastName(e.target.value)}
                  required
                  variant="outlined"
                  color="error"
                  type="text"
                  sx={{ mb: 3 }}
                  fullWidth
                  value={lastName}
                  error={lastNameError}
                />

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
                <Button variant="outlined" style={{ color: '#781fde', borderColor: '#781fde' }} type="submit">Register</Button>

              </form>
            </Item>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
