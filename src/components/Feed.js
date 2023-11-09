import React from 'react';
import '../styles/Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';

import PermMediaIcon from '@mui/icons-material/PermMedia';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';

function Feed() {
    return (
        <div className='feed'>
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form >
                        <input type="text" placeholder='Start a post' />
                        <button type='submit'>Send</button>
                    </form>
                </div>

                <div className="feed_inputOptions">
                    <InputOption Icon={PermMediaIcon} title={'Media'} color={'#70B5F9'} />
                    <InputOption Icon={CalendarMonthIcon} title={'Event'} color={'#E7A33E'} />
                    <InputOption Icon={ArticleIcon} title={'Write Article'} color={'#e06847'} />
                </div>
            </div>
        </div>
    )
}

export default Feed
