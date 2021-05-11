import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from '../Styling';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


export default function ContactForm() {
    const classes = useStyles();
    
return (
    <Container maxWidth="sm">
        <form className={classes.contactForm} noValidate autoComplete="off" >
      <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={12}>
          <TextField id="filled-basic" label="Name" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
          <TextField id="filled-basic" label="Email" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
          <TextField
          id="standard-multiline-static"
          label="Message"
          variant="filled"
          multiline
          fullWidth
          rows={4}
          
        />
          </Grid>
          <Grid item xs={12} alignItems="center">
              <Button variant="contained" color="primary">Submit</Button>
          </Grid>
          <Grid item xs={12}>
              <Grid container spacing={8}>
                  <Grid item xs={3}>
                    <Typography> <Link href="https://docs.google.com/document/d/1zeV7wa2M7xYTx8Wa5nizAST_dXGExpIH43nvj3_kc4k/edit?usp=sharing" color="inherit" variant="body1" target="_blank">
                        Resume
                          </Link></Typography>
                  </Grid>
                  <Grid item xs={3}>
                      <Typography >
                      <Link href="https://www.linkedin.com/in/ezkenneth/" color="inherit" variant="body1" target="_blank">
                        Linkedin
                          </Link>
                      </Typography>
                  </Grid>
                  <Grid item xs={3}>
                      <Typography >
                      <Link href="https://github.com/Ezkenneth" color="inherit" variant="body1" target="_blank">
                        Github
                          </Link>
                      </Typography>
                  </Grid>
                  <Grid item xs={3}>
                      <Typography >
                          <Link href="https://www.instagram.com/jekenneth/" color="inherit" variant="body1" target="_blank">
                        Instagram
                          </Link>
                      </Typography>
                  </Grid>
              </Grid>
          </Grid>
      
      
      </Grid>
      

     
    </form> </Container>
    
  );
}