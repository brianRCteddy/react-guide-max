import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Auxillary from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
	render() {
		console.log('Person.js - Rendering...');

		return (
			<Auxillary>
				<p key="i1 " onClick={this.props.click}>
					Hello I'm a {this.props.name} and I am {this.props.age} years old!
				</p>
				<p key="i2">{this.props.children}</p>
				<input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
			</Auxillary>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};
export default withClass(Person, classes.Person);
