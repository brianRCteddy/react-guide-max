import React, { Component } from 'react';
import classes from './App.css';
import Person from './People/Person/Person';

//this.statements
class App extends Component {
	state = {
		persons: [
			{ id: '1231sd', name: 'Max', age: 28 },
			{ id: 'sdfsfw', name: 'Ted', age: 25 },
			{ id: 'lemfmol', name: 'Yema', age: 2 }
		],
		otherState: 'some other value',
		showPersons: false
	};

	deletePersonHandler = (personIndex) => {
		//const persons = this.state.persons.slice();
		const persons = [ ...this.state.persons ];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});

		const person = { ...this.state.persons[personIndex] };

		person.name = event.target.value;

		const persons = [ ...this.state.persons ];
		persons[personIndex] = person;

		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		let persons = null;
		let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								key={person.id}
								name={person.name}
								age={person.age}
								click={() => this.deletePersonHandler(index)}
								changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);

			btnClass = classes.Red;
		}

		//let styleClasses = [ 'green', 'bold' ].join(' ');
		const styleClasses = [];
		if (this.state.persons.length <= 2) {
			styleClasses.push(classes.red);
		}
		if (this.state.persons.length < 2) {
			styleClasses.push(classes.bold);
		}

		return (
			<div className={classes.App}>
				<h1>Styling React Components</h1>
				<h2>Hi I'm a React App</h2>
				<p className={styleClasses.join(' ')}>This is really working</p>
				<button className={btnClass} onClick={this.togglePersonsHandler}>
					Toggle Button
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
