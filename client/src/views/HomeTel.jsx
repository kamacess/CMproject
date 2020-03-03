import React from 'react';
import EcranActionTel from '../components/frontTelephone/EcranActionTel';
import io from 'socket.io-client';
import EcranRange from "../components/frontTelephone/EcranRange";
const ioClient = io.connect('http://localhost:4000');
const uuidv4 = require("uuid/v4");

// import { Link } from 'react-router-dom';

export default function HomeTel() {

    //générer un id unique
    const idUnique = getUniqueId();

    function  getUniqueId() {
        return uuidv4();
    }

    const socket = io('http://127.0.0.1:4000');
    socket.emit("registerTel", idUnique );



    return (
        <div className="home-tel">
            <h1>BonGEOurrE</h1>
            <EcranActionTel socket = {socket} />
            <EcranRange socket = {socket} />
        </div>
    )
}