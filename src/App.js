import React, { Component } from 'react';
import Field from './components/Field';
import { MdAdd } from "react-icons/md";

class App extends Component {
	state = {
		fields: [{
			id: 'field-1',
			value: 'text',
			operation: 'Containing',
			input: ''
		}]
	}

	handleFieldChange = field => {
		const { id } = field;
		const { fields } = this.state;

		const i = fields.findIndex(field => field.id === id);

		this.setState({
			fields: [
					...fields.slice(0, i),
					field,
					...fields.slice(i + 1)
				]
		});
	}

	addField = e => {
		const { fields } = this.state;

		const id = +fields[fields.length - 1].id.split('-')[1] + 1;

		const newField = {
			id: `field-${id}`,
			value: 'text',
			operation: 'Containing',
			input: ''
		};

		this.setState({
			fields: [...fields, newField]
		});
	}

	deleteField = id => {
		const { fields } = this.state;

		const i = fields.findIndex(field => field.id === id);

		this.setState({
			fields: [
					...fields.slice(0, i),
					...fields.slice(i + 1)
				]
		});
	}

	applyFilter = e => {
		const { fields } = this.state;

		const output = {
			text: [],
			number: []
		};

		fields.map( ({ value, operation, input }) => {
			if (value === 'text') {
				output.text.push({
					operation: operation.toLowerCase(),
					value: input
				})
			} else {
				output.number.push({
					operation: operation.toLowerCase(),
					value: +input
				})
			}
		});

		console.log(output);

		this.clearFilter(e);
	}

	clearFilter = e => {
		this.setState({ fields: [{
			id: 'field-1',
			value: 'text',
			operation: 'Containing',
			input: ''
		}]});
	}

  	render() {
  		const { fields } = this.state;
  		const deletable = fields.length > 1;

	    return (
	        <form className='field-container' onSubmit={e => {e.preventDefault()}}>
	        	{
	        		fields.map( field => 
	        			<Field 
	        				field={field}
	        				key={field.id}
	        				deletable={deletable}
	        				onFieldChange={this.handleFieldChange}
	        				onDelete={this.deleteField}
	        			/>
	        		)
	        	}
	        	{ 
	        		fields.length !== 10 && 
	        			<div className='btn btn-add' onClick={this.addField} ><MdAdd /> Add condition</div>
	        	}
	        	<hr />
	        	<div className='btn btn-apply' onClick={this.applyFilter} >Apply</div>
	        	<div className='btn btn-clear' onClick={this.clearFilter} >Clear filter</div>
	        </form>
	    );
  	}
}

export default App;
