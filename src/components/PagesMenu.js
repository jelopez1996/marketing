import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import MainTheme from '../MainTheme'


const useStyles = {
  button: {
    marginTop: "40px",
    marginLeft: "15px",
    height: "30px",
    width: "80px",
    textTransform: "none",
    fontSize: "20px",
    fontWeight: 600,
    color: "black",
    "&:hover": {
      color: "white"
    }
  },
}
export default function PagesMenu({name, props}) {

  const classes = useStyles;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const buildMenuItems = (links) => {

    var menuItems = []
    const propKeys = Object.keys(links)
    propKeys.forEach(key => {
      menuItems.push(<MenuItem onClick={handleClose} key={key} component={Link} to={links[key]} >{key}</MenuItem>)
    })
    return menuItems
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={classes.button}>
        {name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        { buildMenuItems(props)}

      </Menu>
    </div>
  );
}

