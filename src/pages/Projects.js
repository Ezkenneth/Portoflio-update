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
          </Typography>
        </CardContent>
        <CardActions className={classes.projectActions}>
      
        <Button size="small" color="primary" href="https://github.com/Ezkenneth/GAIDO" target="_blank">
          See More
        </Button>
      </CardActions>
        </Card>
        <Card className={classes.projectCard} elevation={12} variant="outlined" >
        <CardMedia
          className={classes.projectMedia}
          image="assets/images/pokestay.PNG"
          title="Project Screenshot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pokestay
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Pokemon STAY makes databases fun! Users can select their starter Pokemon. Upon creating their account, users are then taken to the members page where random "wild" Pokemon appear from our database.
          </Typography>
        </CardContent>
        <CardActions className={classes.projectActions}>
       
        <Button size="small" color="primary"  href="https://github.com/kirsralk/Group4-Project2" target="_blank">
          See More
        </Button>
      </CardActions>
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
          An application that can be used to track spending and earnings over time- using mongodb and manifests and service worker to enable offline functionality.
          </Typography>
        </CardContent>
        <CardActions className={classes.projectActions}>
      
        <Button size="small" color="primary"  href="https://github.com/Ezkenneth/Budget-Tracker" target="_blank">
          See More
        </Button>
      </CardActions>
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
          A Fitness Tracker which logs and charts exercises performed and saves them to a Mongo Database. Equiped with a service worker and manifests to enable offline functionality. 
          </Typography>
        </CardContent>
        <CardActions className={classes.projectActions}>
        
        <Button size="small" color="primary"  href="https://github.com/Ezkenneth/Workout-Tracker" target="_blank">
          See More
        </Button>
      </CardActions>
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
      </CardActions>
        </Card>
       
      
      
        
     </Carousel>
   </div>
  );
}

export default Projects;
