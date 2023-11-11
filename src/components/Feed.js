import React, { useEffect, useState } from 'react';
import '../styles/Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';

import PermMediaIcon from '@mui/icons-material/PermMedia';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { db } from '../firebase';
import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import { query, orderBy } from 'firebase/firestore';

// import firebase from 'firebase';


function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    const getInput = (e) => {
        setInput(e.target.value);
    }

    const fetchPost = async () => {
        try {
            const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
            const querySnapshot = await getDocs(q);

            const newData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name,
                description: doc.data().description,
                message: doc.data().message,
            }));

            setPosts(newData);
        } catch (error) {
            console.error('Error fetching documents: ', error);
        }
    }

    useEffect(() => {
        fetchPost();
    }, [])

    const sendPost = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, 'posts'), {
                name: 'Dora Babu',
                description: 'testing',
                message: input,
                timestamp: serverTimestamp(),
            });
            setInput('');
            fetchPost();
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    }

    return (
        <div className='feed'>
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form >
                        <input value={input} onChange={getInput} type="text" placeholder='Start a post' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className="feed_inputOptions">
                    <InputOption Icon={PermMediaIcon} title={'Media'} color={'#70B5F9'} />
                    <InputOption Icon={CalendarMonthIcon} title={'Event'} color={'#E7A33E'} />
                    <InputOption Icon={ArticleIcon} title={'Write Article'} color={'#e06847'} />
                </div>
            </div>

            {posts.map((post) => (
                <Post key={post.id}
                    name={post.name}
                    description={post.description}
                    message={post.message}
                />
            ))}
        </div>
    )
}

export default Feed
