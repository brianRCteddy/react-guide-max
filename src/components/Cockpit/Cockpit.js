import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
	useEffect(
		() => {
			console.log('Cockpit.js - useEffect');
			//HTTP request....
			setTimeout(() => {
				alert('Saving data to cloud'), 1000;
			});
		},
		[ props.people ]
	);

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
