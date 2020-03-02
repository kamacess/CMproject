import React from 'react';
import ListActionBack from './../components/frontLargeScreen/ListActionBack';
import io from 'socket.io-client';
const ioClient = io.connect('http://localhost:4000');
// import { Link } from 'react-router-dom';

export default function Home() {

	const socket = io('http://127.0.0.1:4000');

	function sendMessage() {
		socket.emit('send-message', 'salut les potos');
	}

	socket.on('message', (data) => {
		console.log(data);
	});

    return (
        <div className="home">
            <h1>Le nom du biniou</h1>
            <img src="./../../assets/yellow-cat.png" alt="the yellow cat smiles at you"/>
            <ListActionBack />
            <button onClick={sendMessage}>pr00t</button>
        </div>
    )
}
