import React from 'react';
import '../styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';

import HouseIcon from '@mui/icons-material/House';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className='header'>

            <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" placeholder='Title, skill or company' />
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={HouseIcon} title={'Home'} />
                <HeaderOption Icon={PeopleAltIcon} title={'My Network'} />
                <HeaderOption Icon={BusinessCenterIcon} title={'Jobs'} />
                <HeaderOption Icon={ChatIcon} title={'Messaging'} />
                <HeaderOption Icon={NotificationsIcon} title={'Notification'} />
                <HeaderOption avatar='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' title={'me'}/>
            </div>
        </div>
    )
}

export default Header
