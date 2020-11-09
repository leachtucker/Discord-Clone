import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons';
import React from 'react';

import ChatHeader from './ChatHeader';
import Message from './Message';


import './Chat.css';

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
            </div>

            <div className="chat__input">
                <AddCircle fontSize="large" />
                <form>
                    <input placeholder="Message #YOUTUBE" />
                    <button className="chat__inputButton" type="submit">Send Message</button>
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
