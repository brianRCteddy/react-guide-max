import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
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
			<h2>Hi I'm a React App</h2>
			<p>{props.title}</p>
			<p className={styleClasses.join(' ')}>This is really working</p>
			<button className={btnClass} onClick={props.clicked}>
				Toggle Button
			</button>
		</div>
	);
};

export default cockpit;
