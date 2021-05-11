import React from "react"; 
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from "../Styling";
import Grid from '@material-ui/core/Grid';
import CardMedia from "@material-ui/core/CardMedia"

export default function Biocard() {
    const classes = useStyles();

    return(
        <Card className={classes.bioCard} variant="outlined" elevation={12}>
            <CardContent className={classes.bioCardContent}>
            <Typography variant="h5" >
                        Bio:
                    </Typography>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                <Typography variant="p" style={{marginTop: 2}}> 
                        Hey! Welcome to my Portfolio; I'm a FullStack Web Dev <br />
                        Hoarder of Hobbies, Trader by the name of Jack and a <br />
                        Man with a Passion. <br />
                        <br />
                        Take a look through my projects and leave me a message <br />
                        If you'd like some work done! 
                    </Typography>
                    
                </Grid>
                <Grid item xs={4}>
                <CardMedia
          className={classes.bioMedia}
          component="img"
          image="assets/images/bio.jpg"
          title="Project Screenshot"
          
        />
                </Grid>
              
                
                
            </Grid>
            </CardContent>
        </Card>
    )
}