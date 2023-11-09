import React from 'react';
import '../styles/Sidebar.css';
import { Avatar } from '@mui/material';

function Sidebar() {

    const recentItem = (topic) => {
        return (
            <div className="sidebar_recentItems">
                <span className='sidebar_hash'>#</span>
                <p>{topic}</p>
            </div>
        );
    }

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmSGjet8_p422wEQsNKkjLLuzVNEG07I-5Q&usqp=CAU" alt="" />
                <Avatar className='sidebar_avatar' />
                <h2>Dora Babu Kondala</h2>
                <h4>kondaladorababu@gmail.com</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>who viewed you</p>
                    <p className='sidebar_statNumber'>2,345</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on Post</p>
                    <p className='sidebar_statNumber'>2,345</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("react Js")}
                {recentItem('Software Engineering')}
                {recentItem('Design')}
                {recentItem('Developer')}
                {recentItem('Java Coding')}
                {recentItem('Coder')}
            </div>
        </div>
    )
}

export default Sidebar
