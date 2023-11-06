import React from 'react';
import '../styles/HeaderOption.css';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function HeaderOption({ avatar, Icon, title }) {
    return (
        <div className='headerOption'>
            {Icon && <Icon className='headerOption_icon' />}
            {avatar && <AccountCircleRoundedIcon className='headerOption_icon' src={avatar} />}
            <h3 className='headerOption_title'>{title}</h3>
        </div>
    )
}

export default HeaderOption
