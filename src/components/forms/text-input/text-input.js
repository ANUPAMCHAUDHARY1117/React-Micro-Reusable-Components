import React from 'react';

/**
 *
 * @param {string} id
 * @param {string} type [text | email | password | url | tel | number ]
 * @param {string} value
 * @param {string} placeholder
 * @param {string} label
 * @param {boolean} disabled
 * @param {boolean} validation
 * @param {boolean} helperField
 * @param {string} helperText
 */

const TextInput = ({ id, type, value, placeholder, validation, label, disabled, inline, helperField, helperText }) => {
	return (
		<div className={`input-field ${inline ? 'inline' : ''}`}>
			<label className='active'>{label}</label>
			<input
				disabled={disabled ? true : false}
				placeholder={placeholder}
				id={id}
				type={type}
				className={validation ? 'validate' : ''}
				defaultValue={value ? value : ''}
			></input>
			{helperField && <span className='helper-text'>{helperText}</span>}
		</div>
	);
};

export default TextInput;
