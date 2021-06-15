import React from "react";
import Carousel from 'react-elastic-carousel';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import useStyles from '../components/Styling';
import Grid from '@material-ui/core/Grid';
function Projects() {

  const classes = useStyles();
  return (
   <div>
     <CssBaseline />
     <Carousel className={classes.carousel}>
        <Card className={classes.projectCard} elevation={12} variant="outlined" >
        <CardMedia
          className={classes.projectMedia}
          image="assets/images/gaido.PNG"
          title="Project Screenshot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            GAIDO
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A front end website which uses the zomato API and google maps API to locate restaurants and then guide users to them.
          This application takes in users input; a location. The user is then given a list of restaurants in that area. The user can click on the restaurant to be presented a card. The user can then click locate to track the location of the restuarant relative to themselves and find transport to the site. API calls are made to pull that information and display them, APIs in use are Zomato and Google Maps.  

          </Typography>
        </CardContent>
        <CardActions className={classes.projectActions}>
      
        <Button size="small" color="primary" href="https://github.com/Ezkenneth/GAIDO" target="_blank">
          See More
        </Button>
        <Button size="small" color="primary" href="https://ezkenneth.github.io/GAIDO/" target="_blank">
          Deployed Link
        </Button>
        
      </CardActions>
      <hr></hr>
      <Grid container spacig={3}className={classes.roleText}>
          <Grid item xs={6}><Typography variant="h6" color="textPrimary"  >
         Role:
          </Typography></Grid>
          <Grid item xs={6}><Typography variant="body" color="textSecondary"  >
         Lead Developer
          </Typography></Grid>
          <Grid item xs={6}>  <Typography variant="h6" color="textPrimary"  >
         Technologies Used:
          </Typography></Grid>
          <Grid item xs={6}>
          <Typography variant="body" color="textSecondary"  >
        HTML, CSS, JS, Bulma, APIs.
          </Typography>
          </Grid>
      </Grid>
    
        </Card>
        <Card className={classes.projectCard} elevation={12} variant="outlined" >
        <CardMedia
          className={classes.projectMedia}
          image="assets/images/pokestay.png"
          title="Project Screenshot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pokestay
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
          Pokemon STAY makes databases fun! Users can select their starter Pokemon. Upon creating their account, users are then taken to the members page where random "wild" Pokemon appear from our database.Future versions will allow users to add wild Pokemon to their party of 6 and leverage attack/defense/HP stats to enable battles.
          </Typography>
        </CardContent>
        <CardActions className={classes.projectActions}>
       
        <Button size="small" color="primary"  href="https://github.com/kirsralk/Group4-Project2" target="_blank">
          See More
        </Button>
        <Button size="small" color="primary"  href="https://group4-project2.herokuapp.com/" target="_blank">
          Deployed Link
        </Button>
      </CardActions>
      <hr></hr>
      <Grid container spacig={3}className={classes.roleText}>
          <Grid item xs={6}><Typography variant="h6" color="textPrimary"  >
         Role:
          </Typography></Grid>
          <Grid item xs={6}><Typography variant="body" color="textSecondary"  >
         Backend Developer
          </Typography></Grid>
          <Grid item xs={6}>  <Typography variant="h6" color="textPrimary"  >
          Technologies Used:
          </Typography></Grid>
          <Grid item xs={6}>
          <Typography variant="body" color="textSecondary"  >
          JS, NodeJS, Express, Handlebars, MySQL, REST APIs
          </Typography>
          </Grid>
      </Grid>
        </Card>
        <Card className={classes.projectCard} elevation={12} variant="outlined" >
        <CardMedia
          className={classes.projectMedia}
          image="assets/images/budget.PNG"
          title="Project Screenshot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Budget App
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          An application that can be used to track spending and earnings over time- using mongodb and manifests and service worker to enable offline functionality. The user can add expenditures and incomes using the input fields.
          </Typography>
        </CardContent>
        <CardActions className={classes.projectActions}>
      
        <Button size="small" color="primary"  href="https://github.com/Ezkenneth/Budget-Tracker" target="_blank">
          See More
        </Button>
        <Button size="small" color="primary"  href="https://obscure-spire-11105.herokuapp.com/" target="_blank">
          Deployed Link
        </Button>
      </CardActions>
      <hr></hr>
      <Grid container spacig={3}className={classes.roleText}>
          <Grid item xs={6}><Typography variant="h6" color="textPrimary"  >
         Role:
          </Typography></Grid>
          <Grid item xs={6}><Typography variant="body" color="textSecondary"  >
         Developer
          </Typography></Grid>
          <Grid item xs={6}>  <Typography variant="h6" color="textPrimary"  >
          Technologies Used:
          </Typography></Grid>
          <Grid item xs={6}>
          <Typography variant="body" color="textSecondary"  >
          HTML, CSS, JS, NodeJS, Express, PWA, MongoDB, GIT, REST APIs
          </Typography>
          </Grid>
      </Grid>
        </Card>
        <Card className={classes.projectCard} elevation={12} variant="outlined" >
        <CardMedia
          className={classes.projectMedia}
          image="assets/images/workout.PNG"
          title="Project Screenshot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Fitness Tracker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A Fitness Tracker which logs and charts exercises performed and saves them to a Mongo Database. Equiped with a service worker and manifests to enable offline functionality. The user can add workouts (and continue them) - specifying if it is cardio or weight lifting.
          </Typography>
        </CardContent>
        <CardActions className={classes.projectActions}>
        
        <Button size="small" color="primary"  href="https://github.com/Ezkenneth/Workout-Tracker" target="_blank">
          See More
        </Button>
        <Button size="small" color="primary"  href="https://obscure-spire-11105.herokuapp.com/" target="_blank">
          Deployed Link
        </Button>
      </CardActions>
      <hr></hr>
      <Grid container spacig={3}className={classes.roleText}>
          <Grid item xs={6}><Typography variant="h6" color="textPrimary"  >
         Role:
          </Typography></Grid>
          <Grid item xs={6}><Typography variant="body" color="textSecondary"  >
          Developer
          </Typography></Grid>
          <Grid item xs={6}>  <Typography variant="h6" color="textPrimary" >
          Technologies Used:
          </Typography></Grid>
          <Grid item xs={6}>
          <Typography variant="body" color="textSecondary"  >
          HTML, CSS, JS, NodeJS, Express, PWA, MongoDB, GIT, REST APIs
          </Typography>
          </Grid>
      </Grid>
        </Card>
        <Card className={classes.projectCard} elevation={12} variant="outlined" >
        <CardMedia
          className={classes.projectMedia}
          image="assets/images/notes.PNG"
          title="Project Screenshot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Notes App
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          An application that can be used to write, save, and delete notes - it uses express backend, as well as a JSON file to save and store data.
          </Typography>
        </CardContent>
        <CardActions className={classes.projectActions}>
        
        <Button size="small" color="primary"  href="https://github.com/Ezkenneth/Notes-App" target="_blank">
          See More
        </Button>
        <Button size="small" color="primary"  href="https://vast-harbor-22173.herokuapp.com/" target="_blank">
          Deployed Link
        </Button>
      </CardActions>
      <hr></hr>
      <Grid container spacig={3}className={classes.roleText}>
          <Grid item xs={6}><Typography variant="h6" color="textPrimary"  >
         Role:
          </Typography></Grid>
          <Grid item xs={6}><Typography variant="body" color="textSecondary"  >
          Developer
          </Typography></Grid>
          <Grid item xs={6}>  <Typography variant="h6" color="textPrimary"  >
          Technologies Used:
          </Typography></Grid>
          <Grid item xs={6}>
          <Typography variant="body" color="textSecondary"  >
          HTML, CSS, JS, NodeJS, Express, PWA, MySQL, GIT, REST APIs
          </Typography>
          </Grid>
      </Grid>
        </Card>
       
      
      
        
     </Carousel>
   </div>
  );
}

export default Projects;
