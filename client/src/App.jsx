import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import des composants

// Home, AdminTable, AdminForm, Media, NotFound
import Home from './views/Home';
import AdminTables from './views/AdminTables';
import AdminForms from './views/AdminForms';
import Medias from './views/Medias';
import NotFound from './views/NotFound';
import HeaderMain from './components/HeaderMain'

import io from 'socket.io-client';
import './App.css';
const ioClient = io.connect('http://localhost:4000');

export default function App() {
	const socket = io('http://127.0.0.1:4000');

	function sendMessage() {
		socket.emit('send-message', 'salut les potos');
	}

	socket.on('message', (data) => {
		console.log(data);
	});

	return (
		<React.Fragment>
			<HeaderMain />
			<main id="content_main">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/medias" component={Medias} />
						<Route path= '/admin/:endpoint(medias|medias)/:mode' component={AdminForms}/>
						<Route path="*" component={NotFound} />
					</Switch>
				<input />
				<button onClick={sendMessage}>pr00t</button>
			</main>
		</React.Fragment>
	);
}
