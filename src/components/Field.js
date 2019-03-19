import React, { Component } from 'react';
import { MdClose } from "react-icons/md";
import Select from 'react-select';
import data from './data';

const styles = {
	control: (provided, state) => ({
	  	...provided,
	  	backgroundColor: state.isFocused ? '#eaeaea' : 'inherit',
	  	boxShadow: 'none',
	  	'&:hover': { borderColor: 'grey' },
	    border: '1px solid grey',
		borderRadius: '4px',
		height: '40px',
		width: '200px'
	}),
  	dropdownIndicator: (provided) => ({
	  	...provided,
	  	'&:hover': { color: 'black' },
	  	color: 'black'
  	}),
  	indicatorSeparator: () => ({
  		display: 'none'
  	})
};

class Field extends Component {
	handleFieldTypeChange = option => {
		const { id } = this.props.field;

		this.props.onFieldChange({
			id,
			value: option.value,
			operation: option.value === 'text' ? 'Containing' : 'Equal',
			input: ''
		});
	}

	handleOperationChange = option => {
		const { id, value, input } = this.props.field;

		this.props.onFieldChange({
			operation: option.value,
			id,
			value,
			input
		});
	}

	handleInputChange = event => {
		const { id, value, operation } = this.props.field;

		this.props.onFieldChange({
			id, 
			value,
			operation,
			input: event.target.value
		});
	}

	handleDelete = () => {
		const { id } = this.props.field;

		this.props.onDelete(id);
	}

  	render() {
  		const { operations, fields } = data;
  		const { field: { value, operation, input }, deletable } = this.props;
  		const options = value === 'text' ? [...operations.text] : [...operations.number];
  		const fieldLabel = value === 'text' ? 'Text Field' : 'Number Field';

	    return (
	    	<div className='field'>
	    		<Select 
	    			styles={styles}
	    			onChange={this.handleFieldTypeChange} 
	    			options={fields} 
	    			isSearchable={false}
	    			value={{label: fieldLabel}}
	    		/>
	    		<Select 
	    			styles={styles}
	    			onChange={this.handleOperationChange}
	    			options={options}
	    			isSearchable={false}
	    			isClearable={false}
	    			value={{label: operation}}
	    		/>
				<input value={input} type={value} onChange={this.handleInputChange} />
				{
					deletable && 
						<span className='close' onClick={this.handleDelete}><MdClose /></span>
				}
			</div>
	    );
  	}
}

export default Field;
