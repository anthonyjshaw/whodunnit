import React from "react";

const NotFound = () => {
	const styles = {fontSize: '2em', textAlign: 'center'}
	return (
		<div className='container container-fade-in-and-translate'>
			<h1 className='page-header'>404 Not Found</h1>
			<p style={styles}>Oops! The page you're looking for does not exist.</p>
		</div>

	);
}

export default NotFound;