import { AddCircle } from '@material-ui/icons';
import React from 'react';

import './Chat.css';
import ChatHeader from './ChatHeader';


function Chat() {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat__messages">

            </div>

            <div className="chat__input">
                <AddCircle fontSize="large" />
                <form>
                    <input placeholder="Message #YOUTUBE" />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
