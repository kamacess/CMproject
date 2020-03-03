import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './../styles/avatar.css';

import { library } from '@fortawesome/fontawesome-svg-core';
library.add(far, fas, fab);

export default function Avatar() {
	const  invColor= 'rgb(12,42,150)';
	const avColor  = 'rgb(243,213,105)';
	const avatarIcon = 'allergies';

	const divStyle = {
		backgroundColor: avColor
	};
	return (
		<div style={divStyle} className="avatar">
			<div className="foo">
                <FontAwesomeIcon icon={avatarIcon} className="bar" color={invColor} size="3x" />
            </div>
		</div>
	);
}
