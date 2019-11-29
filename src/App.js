import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//this.statements
class App extends Component {
	state = {
		persons: [
<<<<<<< HEAD
			{
				name: 'Max',
				age: 28
			},
			{
				name: 'Ted',
				age: 25
			},
			{
				name: 'Yema',
				age: 2
			}
		]
	};

	//method
	switchNameHandler = (newName) => {
		//console.log('Was clicked!');
		this.setState({
			persons: [
				{
					name: newName,
					age: 28
				},
				{
					name: 'RC',
					age: 69
				},
				{
					name: 'Yema',
					age: 'Infinite'
				}
			]
		});
	};

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{
					name: 'Max',
					age: 28
				},
				//target - input element; value: entered value
				{
					name: event.target.value,
					age: 69
				},
				{
					name: 'Yema',
					age: 'Infinite'
				}
			]
		});
=======
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
>>>>>>> 1726380... module 4 version
	};

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

<<<<<<< HEAD
=======
		let persons = null;

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
		}

>>>>>>> 1726380... module 4 version
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
					<p>This is really working</p>
				</header>
<<<<<<< HEAD
				<button style={style} onClick={() => this.switchNameHandler('Maximillian!!!')}>
					Switch Button
				</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, 'Max!')}
					changed={this.nameChangedHandler}
				>
					Hobbies: Watch movies
				</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
=======
				<button style={style} onClick={this.togglePersonsHandler}>
					Switch Button
				</button>
				{persons}
>>>>>>> 1726380... module 4 version
			</div>
		);
	}
}

export default App;

//Function Components
// const App = (props) => {
// 	//always two elements and returns two elements
// 	const [ personsState, setPersonsState ] = useState({
// 		persons: [ { name: 'Max', age: 28 }, { name: 'Ted', age: 25 }, { name: 'Yema', age: 2 } ]
// 	});

// 	const [ othersState, setOthersState ] = useState('some other values');

// 	console.log(personsState, othersState);

// 	const switchNameHandler = () => {
// 		setPersonsState({
// 			persons: [ { name: 'Maximillian', age: 28 }, { name: 'RC', age: 69 }, { name: 'Yema', age: 'Infinite' } ]
// 			//DON'T MANUALLY DO THIS
// 			//otherState: personsState.otherState
// 		});
// 	};

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h1 className="App-title">Welcome to React</h1>
// 				<p>This is really working</p>
// 			</header>
// 			<button onClick={switchNameHandler}>Switch Button</button>
// 			<Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
// 			<Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
// 				Hobbies: Watch movies
// 			</Person>
// 			<Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
// 		</div>
// 	);
// };
<<<<<<< HEAD
=======

//method
// switchNameHandler = (newName) => {
// 	//console.log('Was clicked!');
// 	this.setState({
// 		persons: [ { name: newName, age: 28 }, { name: 'RC', age: 69 }, { name: 'Yema', age: 'Infinite' } ]
// 	});
// };
>>>>>>> 1726380... module 4 version
