import React from 'react';

import io from 'socket.io-client';
import Aside from './../components/frontLargeScreen/Aside'
import DisplayGraph from './../components/frontLargeScreen/DisplayGraph'
// import { Link } from 'react-router-dom';
import './../styles/style.css';
import DisplayPhoto from "../components/frontLargeScreen/DisplayPhoto";
import './../styles/device.css';
const ioClient = io.connect('http://localhost:4000');
export default function Home() {

	const socket = io('http://127.0.0.1:4000');

	socket.emit("register", "iamfront" );

	function sendMessage() {
		socket.emit('send-message', 'salut les potos');
	}

    return (
        <div className="home">
            <main>
                TON COMPOSANT REACT MAIN
                <button onClick={sendMessage}>pr00t2THE M4XXXX</button>
                <DisplayPhoto  socket={socket}/>
                <DisplayGraph  socket={socket}/>
            </main>
            <Aside socket={socket} />
            
        </div>
    )
}
