import React from 'react';

import { BrowserRouter , Route, Switch} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Artist  from './Artist.js' ;

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
}));

function Welcome() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.content}>
      <Typography variant='h6' className={classes.title}>
	      This is a simple web application  that provides a snapshot of the hottest artists, songs and musical trends
        </Typography>
      </div>
    </main>
    </React.Fragment>
  );
}

export default Welcome;
