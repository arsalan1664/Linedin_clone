import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import db from './firebase';
import {serverTimestamp} from 'firebase/firestore';
import Post from './Post';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

function Feed() {
    const user = useSelector(selectUser)
    const[input,setInput] = useState('')
    const[post,setPost] = useState([])

    useEffect(()=>{
        db.collection("post").onSnapshot((snapshot)=>{
            setPost(snapshot.docs.map((doc)=>(
                {
                    id: doc.id,
                    data: doc.data(),

                }
            )))
        })
    } ,[])

    const sendPost = e => {
        e.preventDefault();
        db.collection("post").add({
            name: user.displayName,
            discriptions: user.email,
            message: input,
            photoURL: user.photoURL ||'',
            timestamp: serverTimestamp(),
        })
    }
  return (

    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon/>
                <form>
                    <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
                    <button type='submit' onClick={sendPost}>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title={'Photo'} color='#70b5f9'/>
                <InputOption Icon={SubscriptionsIcon} title={'Video'} color='#e7a33e'/>
                <InputOption Icon={EventNoteIcon} title={'Event'} color='#c0cbcd'/>
                <InputOption Icon={CalendarViewDayIcon} title={'Write_Article'}color='#7fc15e'/>
            </div>
        </div>
        {post.map(({ id, data: { name, discriptions, message, photoURL }}) => ( 
            <Post
                key= {id}
                name={name}
                discriptions={discriptions}
                message={message}
                photoURL={photoURL}
            />
        ))}
    </div>
  )
}

export default Feed