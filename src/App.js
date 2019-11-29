import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//this.statements
class App extends Component {
	state = {
		persons: [
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
	};

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
					<p>This is really working</p>
				</header>
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
