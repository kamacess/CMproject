import React, {useState, useEffect} from "react";

import io from 'socket.io-client';

// import { Link } from 'react-router-dom';
import './../styles/style.css';
import DisplayPhoto from "../components/frontLargeScreen/DisplayPhoto";
import DisplayGraph from './../components/frontLargeScreen/DisplayGraph';
import DisplayVideo from './../components/frontLargeScreen/DisplayVideo';
import Aside from './../components/frontLargeScreen/Aside';
import DisplayMedia from './../components/frontLargeScreen/DisplayMedia';


import './../styles/device.css';
// const ioClient = io.connect('http://localhost:4000');
export default function AdminDemoTel() {
    const [displayPhoto, setDisplayPhoto] = useState(false);
    const [socket, setSocket] = useState( io('http://127.0.0.1:4000'))

    useEffect(() => {
        socket.emit("registerAdmin", "iamadminmedia" );
    }, []);

    function handleAdminFront(xx) {
        socket.emit('FrontSequenceur', xx);
    }

    function handleAdminTel(xx) {
        socket.emit('telSequenceur', xx);
    }

    return (
        <div>
                <div className="FrontAdmin">
                    <button onClick={handleAdminFront(1)}>1</button>
                    <button onClick={handleAdminFront(2)}>2</button>
                    <button onClick={handleAdminFront(3)}>3</button>
                    <button onClick={handleAdminFront(4)}>4</button>
                    <button onClick={handleAdminFront(5)}>5</button>
                    <button onClick={handleAdminFront(6)}>6</button>
                    <button onClick={handleAdminFront(7)}>7</button>
                    <button onClick={handleAdminFront(8)}>8</button>
                    <button onClick={handleAdminFront(9)}>9</button>
                    <button onClick={handleAdminFront(10)}>10</button>
                    <button onClick={handleAdminFront(11)}>11</button>
                </div>
            <div className="FrontAdmin">
                <button onClick={handleAdminTel(1)}>1</button>
                <button onClick={handleAdminTel(2)}>2</button>
                <button onClick={handleAdminTel(3)}>3</button>
                <button onClick={handleAdminTel(4)}>4</button>
                <button onClick={handleAdminTel(5)}>5</button>
                <button onClick={handleAdminTel(6)}>6</button>
                <button onClick={handleAdminTel(7)}>7</button>
                <button onClick={handleAdminTel(8)}>8</button>
                <button onClick={handleAdminTel(9)}>9</button>
                <button onClick={handleAdminTel(10)}>10</button>
                <button onClick={handleAdminTel(11)}>11</button>
            </div>
        </div>
    )
}
