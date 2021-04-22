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
        // "Alca: Hello, World!"
        message=`${tags['display-name']}: ${message}`
        document.querySelector('.message').innerText=message
        
    });
    
    return (
        
        <div>
            
            <h1>{twitch__name}</h1>

            <h3 className="message"> empty</h3>
        </div>
    )
}
