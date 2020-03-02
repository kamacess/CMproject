import React from 'react'

export default function BoutonVote(props) {


    function handleVote(){
            props.socket.emit('send-message', Date());
            console.log("j'ai compris qu'il fallait handleVote")
    }

    return (
        <div>
            <button className="vote" onClick= {handleVote}>
                VOTER pour CE media                
            </button>
        </div>
    )
}
