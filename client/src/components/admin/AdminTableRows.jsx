import React from 'react';
import { Link } from 'react-router-dom';
// custom tools
// import FormatDate from './../FormatDate';

export const RowMedia = ({ data }) => {
	const avg = data.avg ? data.avg.toFixed(2) : null;
	return (
		<React.Fragment>
			<td>
				<Link className="link" to={`/medias/${data._id}`}>
					{data.name}
				</Link>
			</td>
			<td>title</td>
			<td><FormatDate date= date_of_publication /></td> */}
			<td>type</td>
			<td>author</td>
			<td>resources</td>
			<td>preview</td>
			<td>media_url</td>
			<td>description</td>
			<td>duration</td>
			<td>wine_association</td>
			<td>{data.style ? data.style.name : 'no style yet'}</td>
			<td>{avg || 'unrated'}</td>
		</React.Fragment>
        
	);
};

export const getTableRowsTemplate = (endpoint, deleteClbk, editClbk) => {
	const rowTemplate = {
		medias: RowMedia
	}[endpoint];

	return rowTemplate;
};
