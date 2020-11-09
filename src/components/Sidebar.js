import React from 'react';

import SidebarChannel from './SidebarChannel';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { SignalCellularAlt, InfoOutlined, Call, Mic, Settings, Headset } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

import './Sidebar.css';


function Sidebar() {
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
                    <AddIcon className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
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
                <Avatar />
                <div className="sidebar__profileInfo">
                    <h3>@tuck</h3>
                    <p>#thisIsMyID</p>
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
