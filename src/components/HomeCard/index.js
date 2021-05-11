import React from "react"; 
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from "../Styling";
import Grid from "@material-ui/core/Grid";

export default function HomeCard() {
    const classes = useStyles();

    return(
        <Card className={classes.homeCard} variant="outlined" elevation={12}>
            <CardContent className={classes.homeCardContent}>
            <Grid container spacing={3}>
                <Grid item xs={10}>
                    <Typography variant="h2" gutterBottom>
                        EzCoding Hub
                    </Typography>
                    <hr />
                    <Typography variant="h6">
                        Coding Made Easy
                    </Typography>
                </Grid>
            </Grid>
            </CardContent>
        </Card>
    )
}