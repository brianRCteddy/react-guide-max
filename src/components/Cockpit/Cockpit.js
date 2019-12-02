import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
	//let styleClasses = [ 'green', 'bold' ].join(' ');
	const styleClasses = [];
	let btnClass = '';
	if (props.showPeople) {
		btnClass = classes.Red;
	}

	if (props.people.length <= 2) {
		styleClasses.push(classes.red);
	}
	if (props.people.length < 2) {
		styleClasses.push(classes.bold);
	}
	return (
		<div className={classes.Cockpit}>
			<h1>Styling React Components</h1>
			<h2>Hi I'm a React App</h2>
			<p className={styleClasses.join(' ')}>This is really working</p>
			<button className={btnClass} onClick={props.clicked}>
				Toggle Button
			</button>
		</div>
	);
};

export default cockpit;
