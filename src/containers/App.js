import React, { Component } from 'react';
import classes from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

//this.statements
class App extends Component {
	state = {
		people: [
			{ id: '1231sd', name: 'Max', age: 28 },
			{ id: 'sdfsfw', name: 'Ted', age: 25 },
			{ id: 'lemfmol', name: 'Yema', age: 2 }
		],
		otherState: 'some other value',
		showPeople: false
	};

	deletePersonHandler = (personIndex) => {
		//const people = this.state.people.slice();
		const people = [ ...this.state.people ];
		people.splice(personIndex, 1);
		this.setState({ people: people });
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.people.findIndex((p) => {
			return p.id === id;
		});

		const person = { ...this.state.people[personIndex] };

		person.name = event.target.value;

		const people = [ ...this.state.people ];
		people[personIndex] = person;

		this.setState({ people: people });
	};

	togglePeopleHandler = () => {
		const doesShow = this.state.showPeople;
		this.setState({ showPeople: !doesShow });
	};

	render() {
		let people = null;

		if (this.state.showPeople) {
			people = (
				<People
					people={this.state.people}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
				/>
			);
		}

		return (
			<div className={classes.App}>
				<Cockpit
					showPeople={this.state.showPeople}
					people={this.state.people}
					clicked={this.togglePeopleHandler}
				/>
				{people}
			</div>
		);
	}
}

export default App;
