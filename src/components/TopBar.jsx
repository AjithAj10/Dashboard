import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import './Dashboard.scss';
import Button from '@mui/material/Button';


const TopBar = () => {
  return (
    <div className='topBar'>
        <div className="search">
           <SearchOutlinedIcon /> <input type="text" className='search' placeholder='search here...' />
        </div>
        <div className="personal">
        <Button className='web' variant="contained">Website</Button>
        <Button className='eng' variant="contained">English</Button>
            <NotificationsNoneOutlinedIcon className='bell' />
            <div className="profile">
                <div className="avatar"></div>
                <div className="name">Hi Ajith</div>
                <div className="place">Palakkad</div>
            </div>
        </div>
    </div>
  )
}

export default TopBar