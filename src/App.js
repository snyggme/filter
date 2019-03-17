import React, { Component } from 'react';
import Field from './components/Field';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}
  	render() {
	    return (
	        <form>
	        	<Field />
				<button>+ Add condition</button>
	        </form>
	    );
  	}
}

export default App;
