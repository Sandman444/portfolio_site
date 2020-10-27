import React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const PortfolioNav = () => {
  return (
    <div class="nav">
      <AppBar position="static">
        <Toolbar>
          <Typography>Sandy Wilson</Typography>
          <Button>About</Button>
          <Button>Portfolio</Button>
          <Button>Contact Me</Button>
          <IconButton edge="start" color="inherit">
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PortfolioNav;
