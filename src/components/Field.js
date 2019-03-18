import React, { Component } from 'react';
import { MdClose } from "react-icons/md";
import Select from 'react-select';

class Field extends Component {
	state = {
		operations: {
			text: ['Containing', 'Exactly matching', 'Begins with', 'Ends with'],
			number: ['Equal', 'Greater than', 'Less than']
		}
	}

	handleFieldTypeChange = event => {
		const { value, id } = this.props.field

		this.props.onFieldChange({
			id,
			value: event.target.value,
			operation: value === 'text' ? 'Equal' : 'Containing',
			input: ''
		})
	}

	handleOperationChange = event => {
		const { id, value, input } = this.props.field

		this.props.onFieldChange({
			operation: event.target.value,
			id,
			value,
			input
		})
	}

	handleInputChange = event => {
		event.preventDefault()

		const { id, value, operation } = this.props.field

		this.props.onFieldChange({
			id, 
			value,
			operation,
			input: event.target.value
		})
	}

	handleDelete = () => {
		const { id } = this.props.field

		this.props.onDelete(id)
	}

  	render() {
  		const { operations } = this.state
  		const { field: { value, operation, input }, deletable} = this.props
  		const options = value === 'text' ? [...operations.text] : [...operations.number]

	    return (
	    	<div className='field'>
	        	<select value={value} name="fields" onChange={this.handleFieldTypeChange} >
				    <option value="text">Text Field</option>
				    <option value="number">Number Field</option>
				</select>
				<select value={operation} name="operations" onChange={this.handleOperationChange} >
				    {
				    	options.map( option => 
				    		<option value={option} key={option} >{option}</option>
				    	)
				    }
				</select>
				<input value={input} type={value} onChange={this.handleInputChange} />
				{
					deletable && 
						<span onClick={this.handleDelete}><MdClose /></span>
				}
			</div>
	    );
  	}
}

export default Field;
