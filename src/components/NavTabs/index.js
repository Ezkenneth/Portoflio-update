import React from 'react';
import PropTypes from 'prop-types';
import useStyles from "../Styling";
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';




export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState('/home');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <Paper className={classes.navTabs}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home"
          component={Link}
          to="/home"
          value="/home" />
        <Tab label="Projects"
          component={Link}
          to="/projects"
          value="/projects" />
        <Tab label="Contact"
          component={Link}
          to="/contact"
          value="/contact" />
      </Tabs>
    </Paper >
    );
  }

   
