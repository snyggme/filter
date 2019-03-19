export default {
	fields: [
		{ value: 'text', label: 'Text Field' },
  		{ value: 'number', label: 'Number Field' }
	],
	operations: {
		text: [
			{ value: 'Containing', label: 'Containing'},
			{ value: 'Exactly matching', label: 'Exactly matching'},
			{ value: 'Begins with', label: 'Begins with'},
			{ value: 'Ends with', label: 'Ends with'}
		],
		number: [
			{ value: 'Equal', label: 'Equal'},
			{ value: 'Greater than', label: 'Greater than'},
			{ value: 'Less than', label: 'Less than'}
		]
	}
}