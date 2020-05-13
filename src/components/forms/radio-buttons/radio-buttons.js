import React from 'react';
/**
 *
 * @param {string} name
 * @param {string} title
 * @param {boolean} disabled
 * @param {string} classStyle '' | with-gap
 */

const RadioButton = ({ name, title, disabled, classStyle }) => {
	return (
		<p>
			<label>
				<input name={name} type='radio' className={classStyle} disabled={disabled} />
				<span>{title}</span>
			</label>
		</p>
	);
};

export default RadioButton;
