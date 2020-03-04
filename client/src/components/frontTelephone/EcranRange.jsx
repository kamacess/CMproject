import React, { useState, useEffect } from 'react';
import ElementRange from './ElementRange';
import './../../styles/range.css';

const montyPython = {
    name: 'Monty Python',
    value: 5
};

const bowie = {
    name: 'David Bowie',
    value: 5
};

const truffaut = {
    name: 'François Truffaut',
    value: 5
};

const beaubourg = {
    name: 'Centre Beaubourg',
    value: 5
};

const tokyo = {
    name: 'Tokyo',
    value: 5
};

export default function EcranRange(props) {
	let localCle = 'cle';

	const [ cle, setCle ] = useState(localCle);

	const [ choices, setChoices ] = useState([ tokyo, montyPython, truffaut, bowie, beaubourg,  ]);

	function handleVoteMedia(e) {
        e.preventDefault();
		props.socket.emit('send-media', choices);
		console.log("j'ai compris qu'il fallait handleVote Media");
    }
    
    function handleRangeInput(value, name) {
        let choicesToUpdate = [... choices.filter(choice => choice.name !== name), {name: name, value : value}];
        setChoices([...choicesToUpdate.sort((a, b) => a.name < b.name ? +1 : -1)], console.log(choices)) 
    }

	props.socket.on('privateRegister', (newMessage) => {
		setCle([ ...cle, newMessage ]);
		console.log(cle);
	});

	props.socket.on('privateRegister', function(idRecu) {
		console.log('MonprivateRegister', idRecu);
	});



	return (
		<div>
			<button className="vote" onClick={handleVoteMedia}>
				VOTER pour CE media
			</button>
			--{cle}--
			<form onSubmit={handleVoteMedia}>
				{choices.map((choice, k) => {
                    {console.log(choice)}
                return <ElementRange clbk={handleRangeInput} choice={choice} key={k}/>})	
            }

				<button type="submit" onClick={handleVoteMedia}>
					This is how well I know these things
				</button>
			</form>
		</div>
	);
}
