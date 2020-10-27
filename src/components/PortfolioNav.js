import React from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  // This group of buttons will be aligned to the right
  toolbarRight: {
    marginLeft: 'auto',
    marginRight: -12,
  },
  menuButton: {
    marginRight: 0,
  },
});

const PortfolioNav = () => {
  const classes = useStyles();
  return (
    <div class="nav">
      <AppBar position="static">
        <Toolbar>
          <Typography varient="title">Sandy Wilson</Typography>
          <div className={classes.toolbarRight}>
            <Button component={Link} to={'/about'} color="inherit">
              About
            </Button>
            <Button component={Link} to={'/portfolio'} color="inherit">
              Portfolio
            </Button>
            <Button component={Link} to={'/contact'} color="inherit">
              Contact Me
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PortfolioNav;
