import React, { useEffect, useState } from 'react';
import ChatHeader from './ChatHeader';
import Message from './Message';
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons';
import './Chat.css';

import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectchannelName } from '../features/appSlice';
import firebase from 'firebase';
import db from '../firebase/firebase';

import { v4 as uuid } from 'uuid';

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectchannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    // EVENT HANDLERS
    const onChange = evt => {
        setInput(evt.target.value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        db.collection('channels').doc(channelId).collection('messages')
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
            id: uuid(),
        });
        setInput('');
    }

    useEffect(() => {
        if (channelId) {
            db.collection('channels').doc(channelId).collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            });
        }
    }, [channelId]);

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />
            <div className="chat__messages">
                {
                    messages.map(msg => {
                        return <Message key={msg.id} timestamp={msg.timestamp} message={msg.message} user={msg.user} />
                    })
                }
            </div>
            <div className="chat__input">
                <AddCircle fontSize="large" />
                <form onSubmit={onSubmit}>
                    <input disabled={!channelId} value={input} onChange={onChange} placeholder={`Message #${channelName}`} />
                    <button disabled={!channelId} className="chat__inputButton" type="submit">Send Message</button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcard fontSize="large" />
                    <Gif fontSize="large" />
                    <EmojiEmotions fontSize="large" />
                </div>
            </div>
        </div>
    );
};

export default Chat;