import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import des composants 

// Home, AdminTable, AdminForm, Media, NotFound
import Home from './views/Home';
import AdminTables from './views/AdminTables';
import AdminForm from './views/AdminForms';
import Medias from './views/Medias';
import NotFound from './views/NotFound';



import io from "socket.io-client";
import './App.css';
const ioClient = io.connect("http://localhost:4000")

export default function App() {
	
	const socket = io("http://127.0.0.1:4000");

	function sendMessage() {		
		socket.emit("send-message", "salut les potos")
	}

	socket.on("message", data => {
		console.log(data)
	})

	
	return (
	<React.Fragment>
				<main id="content_main">
					<Router>
						<Switch>
					<Route exact path='/' component = {Home} />
					<Route path='/medias' component = {AdminTables} />
					<Route path='*' component = {NotFound} />
					</Switch>
					</Router>
		
				<input />
				<button onClick={sendMessage}>pr00t</button>
	
			</main>
	</React.Fragment>
	)
	}
