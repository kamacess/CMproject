import React, {useState, useEffect} from "react";

export default function BoutonVoteMedia(props) {

    let localCle = "cle";

    const [cle, setCle] = useState(localCle);

    function handleVoteMedia(){
        props.socket.emit('send-media', Date());
        console.log("j'ai compris qu'il fallait handleVote Media")
    }

    props.socket.on('privateRegister', (newMessage) => {
        setCle([...cle, newMessage]);
        console.log(cle);
    });

    props.socket.on('privateRegister',  function(idRecu){
        console.log("MonprivateRegister",idRecu);
    });

    return (

        <div>
            <button className="vote" onClick= {handleVoteMedia}>
                VOTER pour CE media
            </button>
            --{cle}--
        </div>
    )
}
