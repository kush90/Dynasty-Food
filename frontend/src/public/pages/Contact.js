import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'; // Import Box component
import { TextField, Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import { sendEmail } from '../../Helper';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");



  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Open the snackbar
    setEmailError(false)
    setMessageError(false)
    setNameError(false)
    if (email == '') {
      setEmailError(true)
    }
    if (name == '') {
      setNameError(true)
    }
    if (message == '') {
      setMessageError(true)
    }

    if (email && name && message) {
      console.log(email, name, message)
      let result = await sendEmail({ name, email, message });
      if (result.status === 200) {
        setEmail('');
        setName('');
        setMessage('');
        setLoading(false); // Open the snackbar
        setResult(result)

      }
      else setLoading(false)
    }

  }

  return (
    <Box sx={{ flexGrow: 1 }} style={{ height: '500px' }} className="contact-height">
      <Grid container spacing={2}>
        {/* First column with one row */}
        <Grid item xs={12} sm={4} className='contact-map' style={{ height: '485px', boxShadow: 'none' }}>
          <Paper sx={{ height: '100%', boxShadow: 'none' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d31005.338306978625!2d100.42957368526942!3d13.738582220865275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x30e2975de6ed80f1%3A0x682c8e189aa0344d!2zUENQUStSOVEgTWluaSBCaWcgQyAtIEJhbmcgV2FlayA2Miwg4Lia4Liy4LiH4LmB4Lin4LiBIDYyIEJhbmcgV2FlaywgUGhhc2kgQ2hhcm9lbiwgQmFuZ2tvayAxMDE2MA!3m2!1d13.7370776!2d100.43848779999999!5e0!3m2!1sen!2sth!4v1712725795509!5m2!1sen!2sth" width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Paper>
        </Grid>

        {/* Second column with two rows */}
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <Paper style={{ padding: 10, minHeight: '145px', boxShadow: 'none' }}>
                <Typography variant="h6" gutterBottom style={{ color: '#781fde' }}>
                  Contact Address
                </Typography>
                {/* <Box className="contact-address"> */}
                <Typography variant="body1" className='font-size' sx={{ mb: 1 }}>
                  <strong>Email:</strong> example@example.com
                </Typography>
                <Typography className='font-size' variant="body1" sx={{ mb: 1 }}>
                  <strong>Phone:</strong> +123 456 7890
                </Typography>
                <Typography className='font-size' variant="body1" sx={{ mb: 1 }}>
                  <strong>Address:</strong> 123 Main St, City, Country
                </Typography>
                {/* </Box> */}
              </Paper>
            </Grid>
            <Grid item xs={12} className='contact-form'>
              <Paper style={{ padding: 10, height: '268px', boxShadow: 'none' }}>

                {result && (
                  <Snackbar
                    open={true}
                    autoHideDuration={3000} // Adjust the duration as needed
                    onClose={() => setResult(null)} // Close the snackbar
                    message="Your message was sent successfully."
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Position the snackbar at the top right
                  >
                    <Alert onClose={() => setResult(null)} severity="success">
                      Your message was sent successfully.
                    </Alert>
                  </Snackbar>
                )}
                <form onSubmit={handleSubmit}>
                  <Typography variant="h6" gutterBottom style={{ color: '#781fde' }}>
                    Contact Form
                  </Typography>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                      <TextField
                        label="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                        variant="outlined"
                        color="error"
                        type="text"
                        fullWidth
                        value={name}
                        error={nameError}
                        sx={{ mb: 1 }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        variant="outlined"
                        color="error"
                        type="email"
                        fullWidth
                        value={email}
                        error={emailError}
                        sx={{ mb: 1 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        variant="outlined"
                        color="error"
                        fullWidth
                        multiline
                        rows={3}
                        value={message}
                        error={messageError}
                        sx={{ mb: 1 }}

                      />
                    </Grid>
                  </Grid>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                    <Button disabled={loading}

                      variant="outlined" type="submit"
                      style={{
                        color: '#781fde',
                        borderColor: '#781fde',
                        opacity: (loading) ? 0.5 : 1, // Adjust opacity when disabled
                      }}>  {!loading ? 'Submit' : 'Loading ..'}
                    </Button>

                  </Box>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
