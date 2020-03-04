import React from 'react';
import './../../styles/range.css'


export default function ElementRange({choice, clbk}) {
    const id = choice.name.split(" ").join("-").toLowerCase();
	return (
	
			<div className="range-elem flex-ctnr">
				<input type="range"  name={choice.name} min="0" max="5" onChange={(e) => clbk(e.target.value, choice.name)} />
				<label htmlFor={id}>{choice.name}</label>
			</div>
		
	);
}
