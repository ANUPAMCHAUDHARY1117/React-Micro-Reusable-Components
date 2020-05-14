import React, { useState } from 'react';
/**
 *
 * @param {boolean} checked
 * @param {string} classStyle '' | filled-in
 * @param {boolean} disabled
 */

const Checkbox = ({ checked, classStyle, disabled }) => {
	const [state, setState] = useState({ checked: checked });
	const toggleCheckbox = () => {
		setState(() => ({ ...state, checked: !state.checked }));
	};
	return (
		<p>
			<label>
				<input
					type='checkbox'
					defaultChecked={state.checked}
					onClick={toggleCheckbox}
					disabled={disabled}
					className={classStyle}
				/>
				<span>Yellow</span>
			</label>
		</p>
	);
};

export default Checkbox;
