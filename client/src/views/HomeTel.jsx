import React from 'react';
import ActionTel from './../components/frontTelephone/ActionTel';
import io from 'socket.io-client';
import BoutonVoteMedia from "../components/frontTelephone/BoutonVoteMedia";
const ioClient = io.connect('http://localhost:4000');
const uuidv4 = require("uuid/v4");

// import { Link } from 'react-router-dom';

export default function HomeTel() {

    //generer un id unique
    const idUnique = getUniqueId();

    function  getUniqueId() {
        return uuidv4();
    }

    const socket = io('http://127.0.0.1:4000');
    socket.emit("registerTel", idUnique );



    return (
        <div className="home-tel">
            <h1>Sur le tel</h1>
            <input type="hidden" value={idUnique} name="uniqueIdCM" />
            <ActionTel socket = {socket} />
            <BoutonVoteMedia socket = {socket} />
        </div>
    )
}