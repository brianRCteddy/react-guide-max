import React, { PureComponent } from 'react';
import Person from './Person/Person';

class People extends PureComponent {
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('People.js - getDerivedStateFromProps');
	// 	return state;
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('People.js - shouldComponentUpdate');
	// 	if (
	// 		nextProps.people !== this.props.people ||
	// 		nextProps.clicked !== this.props.clicked ||
	// 		nextProps.changed !== this.props.changed
	// 	) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('People.js - getSnapshotBeforeUpdate');
		return { message: 'Snapshot' };
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('People.js - componentDidUpdate');
		console.log(snapshot);
	}

	componentWillUnmount() {
		console.log('People.js - componentWillUnmount');
	}

	render() {
		console.log('People.js - Rendering...');
		return this.props.people.map((person, index) => {
			return (
				<Person
					key={person.id}
					name={person.name}
					age={person.age}
					click={() => this.props.clicked(index)}
					changed={(event) => this.props.changed(event, person.id)}
					isAuth={this.props.isAuthenticated}
				/>
			);
		});
	}
}

export default People;
