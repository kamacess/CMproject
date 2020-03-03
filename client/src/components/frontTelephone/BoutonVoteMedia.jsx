import React from 'react'

export default function BoutonVoteMedia(props) {


    function handleVoteMedia(){
        props.socket.emit('send-media', Date());
        console.log("j'ai compris qu'il fallait handleVote Media")
    }

    props.socket.on('registerTel',  function(mediaRecu){
        console.log("registertel",mediaRecu);
    });

    return (
        <div>
            <button className="vote" onClick= {handleVoteMedia}>
                VOTER pour CE media
            </button>
        </div>
    )
}
