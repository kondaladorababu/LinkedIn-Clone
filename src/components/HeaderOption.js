import React from 'react';
import '../styles/HeaderOption.css';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function HeaderOption({ avatar, Icon, title }) {
    return (
        <div className={`headerOption ${avatar && 'avatar_mobile_icon'} ${title}`}>
            {Icon && <Icon className='headerOption_icon' />}
            {avatar && <AccountCircleRoundedIcon className={`headerOption_icon ${avatar && 'avatar_mobile'}`} src={avatar} />}
            <h3 className={`headerOption_title ${avatar && 'avatar_mobileTitle'} ${title === 'Messaging' ? title + 'Title' : title}`}>{title}</h3>
        </div>
    )
}

export default HeaderOption
