import React, { Component } from 'react';

class Field extends Component {
	state = {
		fieldValue: 'text',
		operationValue: 'containing',
		operations: {
			text: ['Containing', 'Exactly Matching', 'Begins With', 'Ends with'],
			number: ['Equal', 'Greater Than', 'Less Than']
		}
	}

	handleFieldChange = event => {
		this.setState({fieldValue: event.target.value})
	}

	handleOperationChange = event => {
		console.log()
		this.setState({operationValue: event.target.value})
	}

  	render() {
  		const { fieldValue, operationValue, operations } = this.state
  		const options = fieldValue === 'text' ? [...operations.text] : [...operations.number]

	    return (
	    	<div>
	        	<select value={fieldValue} name="fields" onChange={this.handleFieldChange} >
				    <option value="text">Text Field</option>
				    <option value="number">Number Field</option>
				</select>
				<select value={operationValue} name="operations" onChange={this.handleOperationChange} >
				    {
				    	options.map( option => 
				    		<option value={option} key={option} >{option}</option>
				    	)
				    }
				</select>
				<input type={fieldValue} />
			</div>
	    );
  	}
}

export default Field;
