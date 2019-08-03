import React, { useState } from 'react';
import logo from './assets/hero.jpg';
import computer1 from './assets/computer1.jpg'
import computer2 from './assets/computer2.jpg'
import computer2b from './assets/computer2b.jpg'
import closingPhoto from './assets/closing-photo.jpg'
import geometricBand from './assets/geometric-band.jpg'
import './App.css';
import { Grid, Container } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { makeStyles ,fade} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const theme = createMuiTheme({
  typography: {
    body1: {
      fontFamily: 'SourceSansProLight',
      fontSize: '18px'
    },
    h3: {
      fontFamily: 'SourceSansProRegular',
      fontSize: '24px',
      marginBottom: '20px'
    },
    h2: {
      fontFamily: 'SourceSansProRegular',
      fontSize: '36px',
      color: '#ffffff',
      marginTop: '50px'
    },
    body2: {
      fontFamily: 'SourceSansProLight',
      fontSize: '20px',
      color: '#ffffff',
      marginBottom: '50px'
    }
  },
  palette: {
    primary: {
      main: '#ee4023'
    },
    secondary: {
      main: '#0f0f0f',
    },
    third: {
      main: '#ffffff'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 700,
      lg: 1000,
      xl: 2000
    }
  }
});

function App() {

  const useStylesReddit = makeStyles(theme => ({
    root: {
      border: '0',
      overflow: 'hidden',
      borderRadius: 0,
      margin: 0,
      backgroundColor: '#fcfcfb',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&$focused': {
        backgroundColor: '#fff',
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
      '& fieldset': {
        borderRadius: 0
      }
    },
    focused: {},
  }));
  
  function RedditTextField(props) {
    const classes = useStylesReddit();
  
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
  }

  const useStyles = makeStyles(theme => ({
    button: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: '20px',
      borderRadius: 0
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px',
      position: 'relative'
    },
    headerTitle: {
      fontSize: '48px'
    },
    headerDescription: {
      fontSize: '24px'
    },
    white: {
      color: '#ffffff'
    },
    headerImageText: {
      fontSize: '42px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '33px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '20px',
      },
      position: 'absolute',
      top: '20px',
      left: '30px',
      textAlign: 'left'
    },
    footerText: {
      fontSize: '16px',
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      textAlign: 'center',
      "& a": {
        textDecoration: 'none',
        color: 'white'
      }
    },
    footer: {
      position: 'relative'
    },
    textField: {

    },
    closingArea: {
      position: 'relative'
    },
    closingAreaContent: {
      position: 'absolute',
      top: '50%',
      background: 'rgba(25, 25, 25, .5)',
      textAlign: 'center',
      right: 0,
      left: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  }));
  const classes = useStyles();
  const [flip, setFlip] = useState('row-reverse');
  const [computerImage, setComputerImage] = useState(computer2);

  return (
    <ThemeProvider theme={theme}>
      <Container className="App" maxWidth="lg">
        <Grid   container spacing={0} justify="space-between">
          <Grid className={classes.header} item xs={12}>
            <img className="App-img" src={logo} alt="logo" />
            <Typography className={`${classes.white} ${classes.headerImageText}`} variant="body1" component="p">
              Turn your videos & <br /> pictures into a movie <br /> with just one click
            </Typography>
            <Typography color="secondary" className={classes.headerTitle} variant="body1" component="h1">
              Tell Amazing Stories
            </Typography>
            <Typography color="secondary" className={classes.headerDescription} component="p">
              Editing Software that brings your videos and pictures together in one movie.
            </Typography>
          </Grid>
          <Grid container spacing={0} direction={flip}>
            <Grid item xs={12} md={6}>
              <Typography color="primary" variant="h3" component="h2">
                Customize your moments
              </Typography>
              <Typography color="secondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Typography>
              <Button onClick={() => { setFlip(flip == 'row' ? 'row-reverse' : 'row'); }} variant="outlined" color="primary" className={classes.button}>
                Flip
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <img className="App-img" src={computer1} alt="computer1" />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography color="primary" variant="h3" component="h2">
              Autometic Crop & Zoom
            </Typography>
            <Typography color="secondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
            <Button onClick={() => { setComputerImage(computerImage == computer2 ? computer2b : computer2); }} variant="outlined" color="primary" className={classes.button}>
              Change
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img className="App-img" src={computerImage} alt="computer1" />
          </Grid>
          <Grid className={classes.closingArea} item xs={12}>
            <img className="App-img" src={closingPhoto} />
            <Grid item className={classes.closingAreaContent} xs={10}>
              <Typography variant="h2" component="h4">
                Free Trial. No credit card. No Hassle.
              </Typography>
              <Typography variant="body2" component="p">
                Just enter your email address below and begin capturing moments
              </Typography>
              <RedditTextField
        label="Enter your email address"
        className={classes.margin}
        variant="filled"
        id="reddit-input"
      />
              <Button style={{marginTop: 0, height: '56px', marginBottom: '50px'}} variant="contained" color="primary" className={classes.button}>
                Start Free Trial
      </Button>
            </Grid>
          </Grid>
          <Grid style={{marginTop: '15px'}} item xs={12} className={classes.footer}>
            <img className="App-img" src={geometricBand} />
            <Typography className={`${classes.white} ${classes.footerText}`} component="p">
              <a href="#">Sitemap</a> | <a href="#">Legal</a> | <a href="#">Blog</a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
