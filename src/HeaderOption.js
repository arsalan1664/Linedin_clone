import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './userSlice'

function HeaderOption({ avatar , Icon ,  title }) {
  const user = useSelector(selectUser)
  return (
    <div className='headerOption'>
       {Icon && <Icon className="headerOption__icon"/> } 
       { avatar && (<Avatar className="headerOption__icon" src={user?.photoURL} >{user?.email[0]}</Avatar> )} 

        <h3 className='headerOption__title'> {title} </h3>

        
    </div>
  )
}

export default HeaderOption

// 