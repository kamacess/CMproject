import React from 'react';
import ActionTel from './../components/frontTelephone/ActionTel';
import io from 'socket.io-client';
import BoutonVoteMedia from "../components/frontTelephone/BoutonVoteMedia";
const ioClient = io.connect('http://localhost:4000');

// import { Link } from 'react-router-dom';

export default function Home() {
    const socket = io('http://127.0.0.1:4000');


    return (
        <div className="home">
            <h1>Sur le tel</h1>
            <ActionTel socket = {socket} />
            <BoutonVoteMedia socket = {socket} />
        </div>
    )
}