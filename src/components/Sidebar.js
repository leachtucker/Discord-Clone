import React, { useState, useEffect } from 'react';

import SidebarChannel from './SidebarChannel';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { SignalCellularAlt, InfoOutlined, Call, Mic, Settings, Headset } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

import './Sidebar.css';

import db, { auth } from '../firebase/firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    // EVENT HANDLERS
    const handleAddChannel = () => {
        const channelName = prompt('Enter a new channel name');

        if (channelName) {
            db.collection('channels').add({
                channelName: channelName
            });
        }
    };

    useEffect(()=> {
        db.collection('channels').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    channel: doc.data()
                }
            }));
        });
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Chat Room #1</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelsList">
                    {
                        channels.map(channel => {
                            return <SidebarChannel key={channel.id} id={channel.id} channelName={channel.channel.channelName} />
                        })
                    }
                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAlt
                    className="sidebar__voiceIcon"
                    fontSize="large"
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutlined />
                    <Call />
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar onClick={() => auth.signOut()} src={user.photo} />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>
                </div>
                <div className="sidebar__profileIcons">
                    <Mic />
                    <Headset />
                    <Settings />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;