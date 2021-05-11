import React from "react"; 
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from "../Styling";
import Accordion from "../Accordion";


export default function Subcard() {
    const classes = useStyles();

    return(
        <Card className={classes.subCard} variant="outlined" elevation={12}>
            <CardContent className={classes.subCardContent}>
                <Accordion />
            </CardContent>
        </Card>
    )
}