import React, {useState} from 'react';
import EcranActionTel from '../components/frontTelephone/EcranActionTel';
import io from 'socket.io-client';
import EcranRange from "../components/frontTelephone/EcranRange";
import Chat from './../components/Chat'
import './../styles/tel.css';
import Avatar from '../components/Avatar';

const ioClient = io.connect('http://localhost:4000');
const uuidv4 = require("uuid/v4");

// import { Link } from 'react-router-dom';

export default function HomeTel() {
    const [socket,setSocket] = useState( io('http://127.0.0.1:4000'))
    //générer un id unique
    const idUnique = getUniqueId();

    function  getUniqueId() {
        return uuidv4();
    }

    socket.emit("registerTel", idUnique );

    // socket.on('private   Register', data => {
    //     console.log(data)
    // }
    // )



    return (
        <div className="home-tel">
            <h1>BonGEOurrE</h1>
            <p>you are</p><Avatar />
            <EcranActionTel socket = {socket} />
            <EcranRange socket = {socket} />
            <Chat />
        </div>
    )
}