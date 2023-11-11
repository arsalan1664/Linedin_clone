import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './userSlice';
import { auth } from './firebase';
import Button from '@mui/material/Button';

function Header() {
  const dispatch = useDispatch();

  const logoutToApp = () => {
    dispatch(logout());
    auth.signOut();
    alert('Logout successful')
  }

  return (
    <div>
        <div className="header">

            <div className="header__left">
                <img 
                src="https://pngmind.com/wp-content/uploads/2019/08/Linkedin-Logo-Png-Transparent-Background-1.png" 
                alt="Linkedin__Logo" 
                />
                <div className="header__search">
                    <SearchIcon/>
                    <input type="Text" />
                </div>
            </div>

            <div className="header__right">
              <HeaderOption title='Home' Icon= {HomeIcon}/>
              <HeaderOption title='My Network' Icon={SupervisorAccountIcon}/>
              <HeaderOption title='Jobs' Icon={BusinessCenterIcon}/>
              <HeaderOption title='Messaging' Icon={MessageIcon}/>
              <HeaderOption title='Notifications' Icon={NotificationsIcon}/>
              <Button  onClick={logoutToApp}>
              <HeaderOption title='Me' avatar={true}/>
              </Button>
            </div>          
        </div>


    </div>
  )
}

export default Header