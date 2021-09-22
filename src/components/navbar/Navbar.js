import * as React from 'react';
import  { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import cwLogo from '../../assests/cw.jpeg'





export default function MenuAppBar() {
  // const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static">
        <Toolbar style={{justifyContent:'space-between'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          
          >
            <img src={cwLogo} alt="" style={{width:"40px",height:"40px"}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ────{' <ELCIN/> '}────
          </Typography>
          {auth && (
            <div >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                <MenuItem to="/login" onClick={handleClose}>Login</MenuItem>
                <MenuItem to="/register" onClick={handleClose}>Register</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

























// import React,{useState} from "react";
// import cw from "../../assests/cw.jpeg"
// import { FaUserAlt } from "react-icons/fa";
// import {Nav,NavLogo, NavUserIcon,NavBlog,Menu} from "./NavbarStyle"

// const Navbar = () => {
//   const [isOpen,setIsOpen] = useState(false)

//   return (
//     <Nav>
//       <NavLogo to="/">
//         <img src={cw} alt="" style={{width:"40px",heigh:"40px"}}/>
//       </NavLogo>
//       <NavBlog>
//       ────<i>{'<ELCIN/>'}</i> <span>Blog </span> ────
//       </NavBlog>
      
//       <Menu>
//         <NavUserIcon onClick={()=> setIsOpen(!isOpen)}/>
//         <span/>
//         <span/>
//         <span/>
//       </Menu>
//     </Nav>
//   );
// };

// export default Navbar;



