import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import logo from '../images/music.jpg';
import {  Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: `linear-gradient(#cfd9df,#e2ebf0)`,
    color: 'grey',
  },
  bigAvatar: {
    margin: 30,
    width: 100,
    height: 100,
  },
}));
function SideMenu() {
  const classes = useStyles();

  return (
    <Drawer
      open={true}
      variant='permanent'
      anchor='left'
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Grid container justify='center' alignItems='center'>
        <Avatar
          src={logo}
          className={classes.bigAvatar}
        />
      </Grid>
      <List>

          <ListItem button key='Home'>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <RouterLink title="Home" className={classes.link} to='/'>Home</RouterLink>

          </ListItem>
          <ListItem button key='Signout'>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary='Sign Out' />
          </ListItem>


      </List>
    </Drawer>
  );
}

export default SideMenu;
