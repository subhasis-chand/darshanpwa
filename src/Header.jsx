import {
    AppBar,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography
  } from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import HomeIcon from '@mui/icons-material/Home';
  import InfoIcon from '@mui/icons-material/Info';
  import ContactMailIcon from '@mui/icons-material/ContactMail';
  import './App.css';
  
  const Header = ({ label = 'Sanatan Darshan' }) => {
    const navigate = useNavigate();
  
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen(true);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      setOpen(false);
    }
  
    const handleClickMenu = (path) => {
      handleClose();
      navigate(path);
    }
  
    const headerMenuStyle = { color: 'coral', marginRight: '15px' };
  
    return (
      <AppBar style={{ backgroundColor: '#ff8000', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem
              style={{ width: '75vw' }}
            >
              <div>
                <span className="HeaderText1">Sanatan Darshan</span>
              </div>
            </MenuItem>
            <Divider />
            <div style={{ maxHeight: '55vh', overflow: 'scroll' }}>
            <MenuItem onClick={() => handleClickMenu('/')}>
                <HomeIcon style={headerMenuStyle} />
                <span className="MenubarText">
                  Home Page
                </span>
              </MenuItem>
              <MenuItem onClick={() => handleClickMenu('/aboutus')}>
                <InfoIcon style={headerMenuStyle} />
                <span className="MenubarText">
                  About Us
                </span>
              </MenuItem>
              <MenuItem onClick={() => handleClickMenu('/contactus')}>
                <ContactMailIcon style={headerMenuStyle} />
                <span className="MenubarText">
                  Contact Us
                </span>
              </MenuItem>
              
            </div>
            <br />
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span className='AppHeaderText'>
              {label}
            </span>
          </Typography>
        </Toolbar>
  
      </AppBar>
    );
  }
  
  export default Header;