import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
	const toggleBtnImmRef = useRef(null);

	useEffect(() => {
		console.log('Cockpit.js - useEffect');
		//HTTP request....
		// setTimeout(() => {
		// 	alert('Saving data to cloud'), 1000;
		// });
		toggleBtnImmRef.current.click();
		return () => {
			console.log('Cockpit.js - cleanup work in useEffect');
		};
	}, []);

	useEffect(() => {
		console.log('Cockpit.js - 2nd useEffect');
		return () => {
			console.log('Cockpit.js - 2nd cleanup work in useEffect');
		};
	});

	const styleClasses = [];
	let btnClass = '';
	if (props.showPeople) {
		btnClass = classes.Red;
	}

	if (props.peopleLength <= 2) {
		styleClasses.push(classes.red);
	}
	if (props.peopleLength < 2) {
		styleClasses.push(classes.bold);
	}
	return (
		<div className={classes.Cockpit}>
			<h2>Hi I'm a React App</h2>
			<p>{props.title}</p>
			<p className={styleClasses.join(' ')}>This is really working</p>
			<button ref={toggleBtnImmRef} className={btnClass} onClick={props.clicked}>
				Toggle Button
			</button>
			<AuthContext.Consumer>{(context) => <button onClick={context.login}>Login</button>}</AuthContext.Consumer>
		</div>
	);
};

export default React.memo(cockpit);
