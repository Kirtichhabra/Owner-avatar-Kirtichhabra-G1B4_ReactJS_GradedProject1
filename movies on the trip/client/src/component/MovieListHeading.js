import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='col pl-1'>
			<h5>{props.heading}</h5>
		</div>
	);
};
// shows the heading in the top of the movies and favourite
export default MovieListHeading;
//in this case it contains a prop called heading to show the heading and the main functionality behind this is written in HomePage