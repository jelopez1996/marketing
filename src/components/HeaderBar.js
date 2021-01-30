import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderLinks from './HeaderLinks'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo} from '../assets/LadyCo.svg'


const useStyles = {
  appBar: {
    boxShadow: "none"
  },
  appBarAlt: {
    backgroundColor: "#FFFFFF",
  },
}

export default function HeaderBar() {
  const classes = useStyles;
  const pageIsScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 5,
  })

  return (
    <div>
      <AppBar position="fixed" color="transparent" style={!pageIsScrolled ? classes.appBar: classes.appBarAlt } >
        <Toolbar>
              <a href="/">
                <Logo viewBox="20 100 300 120" width="200px" height="70px"/>
              </a>
            <HeaderLinks/>
        </Toolbar>
      </AppBar>
    </div>
  );
}