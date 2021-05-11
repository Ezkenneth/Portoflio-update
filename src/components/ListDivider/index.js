import React from 'react';
import useStyles from '../Styling';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


export default function ListDividers() {
    const classes = useStyles();
  
    return (
      <List component="nav" className={classes.listDivider} aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary="Responsive" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Mobile-First" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="LightWeight" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Efficient" />
        </ListItem>
      </List>
    );
  }