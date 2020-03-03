import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
let tata = 'media';

export default function DisplayPhoto(props) {

    const [media, setMedia] = useState(tata);

    //props.socket.on('private', (newMedia) => {
    //     //    setMedia([...media, newMedia]);
    //     //    console.log("kkkkkkkk",media);
    //     //});

    props.socket.on('private',  function(mediaRecu){
        //socket.broadcast.emit('message', message)
        //   socket.emit('message', message)
        setMedia( mediaRecu);
        console.log("kkkkkkkk",mediaRecu);
        console.log("kkkkkkkktata",tata);
    });

    return (
        <div className="list-media" id="liste-media">
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            <img src={media} />
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        </div>
    );
}