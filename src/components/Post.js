import React from 'react';
import '../styles/Post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className='post'>
            <div className="post_header">
                <Avatar />
                <div className="Post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="Post_body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
                <InputOption Icon={ThumbUpOutlinedIcon} title={'Like'} color={'grey'}/>
                <InputOption Icon={CommentIcon} title={'Comment'} color={'grey'} />
                <InputOption Icon={LoopOutlinedIcon} title={'Repost'} color={'grey'} />
                <InputOption Icon={SendOutlinedIcon} title={'Send'} color={'grey'} />
            </div>
        </div>
    )
}

export default Post
