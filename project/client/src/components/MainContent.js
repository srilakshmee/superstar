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

function MainContent() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.content}>
	         <Switch>
          <Route path="/artist" component={Artist} />
          </Switch>
	        </div>
    </main>
    </React.Fragment>
  );
}

export default MainContent;
