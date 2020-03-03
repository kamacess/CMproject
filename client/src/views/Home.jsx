import React from 'react';
import ListActionBack from './../components/frontLargeScreen/ListActionBack';
import io from 'socket.io-client';
// import { Link } from 'react-router-dom';
import './../styles/style.css';

const ioClient = io.connect('http://localhost:4000');
export default function Home() {

	const socket = io('http://127.0.0.1:4000');

	function sendMessage() {
		socket.emit('send-message', 'salut les potos');
	}


    return (
        <div className="home">
            <main>
        TON COMPOSANT REACT MAIN

        <ListActionBack socket={socket}/>
            <button onClick={sendMessage}>pr00t2THE M4XXXX</button>
    </main>

    <aside>
        <h2>was passiert???</h2>
    
        <ul>
            <li> emotional alligator has voted </li>
            <li>medium crab has voted</li>
            <li>necessary zebra has prouted</li>
            <li>ambitious mongoose has voted</li>
            <li>busy hamster has voted</li>
            <li>bewitched pig has prouted</li>
            <li>supportive bee has voted</li>
        </ul>
    </aside>
            
        </div>
    )
}
