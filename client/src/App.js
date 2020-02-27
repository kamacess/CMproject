import React from 'react';
import io from "socket.io-client";
import './App.css';
const ioClient = io.connect("http://localhost:4000")

//   constructor() {
//     super();
//     this.state = {
//       response: false,
//       endpoint: ""
//     };
//   }

//   componentDidMount() {
    // const { endpoint } = this.state;
    // const socket = socketIOClient(endpoint);
    // socket.on("Fconnection", socket => {
	// 	console.log("New client connected"));
//   }



	// const { response } = this.state;

    // document.getElementById("pr00t").click("message", funMessage => {
	// 	socket.emit("message", "Cécile va y arriver grâce au pouvoir de l'équipe")
	// });

	






export default function App() {
	
	const socket = io("http://127.0.0.1:4000");

	function sendMessage() {		
		socket.emit("send-message", "salut les potos")
	}

	socket.on("message", data => {
		console.log(data)
	})

	// console.log(document.getElementById("pr00t"));
	
	return (
	<div>
		<input></input>
		<button onClick={sendMessage}>pr00t</button>
	
		{/* <button onClick={receiveMessage}>pr00t2</button> */}

	
	</div>
	)
}
