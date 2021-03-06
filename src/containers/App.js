import React, { Component } from 'react';
import classes from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxillary from '../hoc/Auxillary';
import AuthContext from '../context/auth-context';

//this.statements
class App extends Component {
	constructor(props) {
		super(props);
		console.log('App.js - Constructor');
	}

	state = {
		people: [
			{ id: '1231sd', name: 'Max', age: 28 },
			{ id: 'sdfsfw', name: 'Ted', age: 25 },
			{ id: 'lemfmol', name: 'Yema', age: 2 }
		],
		otherState: 'some other value',
		showPeople: false,
		showCockpit: true,
		changeCounter: 0,
		isLogin: false
	};

	static getDerivedStateFromProps(props, state) {
		console.log('App.js - getDerivedStateFromProps', props);
		return state;
	}

	componentDidMount() {
		console.log('App.js - componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('App.js - shouldComponentUpdate');
		return true;
	}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('App.js - getSnapshotBeforeUpdate');
		return { message: 'Snapshot' };
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('App.js - componentDidUpdate');
		console.log(snapshot);
	}

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

		this.setState((prevState, props) => {
			return {
				people: people,
				changeCounter: prevState.changeCounter + 1
			};
		});
	};

	loginHandler = () => {
		this.setState({ isLogin: true });
	};

	togglePeopleHandler = () => {
		const doesShow = this.state.showPeople;
		this.setState({ showPeople: !doesShow });
	};

	render() {
		console.log('App.js - Render');
		let people = null;

		if (this.state.showPeople) {
			people = (
				<People
					people={this.state.people}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
					isAuthenticated={this.state.isLogin}
				/>
			);
		}

		return (
			<Auxillary>
				<button
					onClick={() => {
						this.setState({ showCockpit: false });
					}}
				>
					Remove Cockpit
				</button>
				<AuthContext.Provider
					value={{
						isLogin: this.state.isLogin,
						login: this.loginHandler
					}}
				>
					{this.state.showCockpit ? (
						<Cockpit
							title={this.props.appTitle}
							showPeople={this.state.showPeople}
							peopleLength={this.state.people.length}
							clicked={this.togglePeopleHandler}
						/>
					) : null}
					{people}
				</AuthContext.Provider>
			</Auxillary>
		);
	}
}

export default withClass(App, classes.App);
