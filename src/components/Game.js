import React from 'react'
import { useParams } from 'react-router-dom'
import '../css/game.css'

const tmi = require('tmi.js');
export default function Game() {
    const message=""
    const {twitch__name}=useParams();
    const client = new tmi.Client({
        connection: { reconnect: true },
        channels: [ twitch__name ]
    });
    
    client.connect();
    
    client.on('message', (channel, tags, message, self) => {

        
        message=`${tags['display-name']}: ${message}`
       
        document.querySelector('.message').innerText=message

    });
    
    return (
        
        <div className='game__page d-flex justify-content-center'>
            
            <div className="word">
                <h3>word</h3>
            </div>
            <div className="paint">
                <h3>draw here</h3>
                <h1>canvas</h1>
            </div>
            <div className='message'>
            <h3> empty</h3>
            </div>
        </div>
    )
}
