// useInput.js
import { useState } from 'react';

export function useInput(initialValue, submitAction) {
	const [inputValue, setInputValue] = useState(initialValue);
	
	const handleChange = (e) => {
		setInputvalue(e.target.value);
	};

	const handleSubmit = () => {
		setInputValue('');
		submitAction(inputValue);
	};

	return [inputValue, handleChange, handleSubmit];
}