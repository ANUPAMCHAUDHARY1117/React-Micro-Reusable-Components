import React, { useState } from 'react';
/**
 *
 * @param {boolean} checked
 * @param {string} classStyle '' | filled-in
 */

const Checkbox = ({ checked, classStyle }) => {
	const [state, setState] = useState({ checked: checked });
	const toggleCheckbox = () => {
		setState(() => ({ ...state, checked: !state.checked }));
	};
	return (
		<p>
			<label>
				<input type='checkbox' checked={state.checked} onClick={toggleCheckbox} className={classStyle} />
				<span>Yellow</span>
			</label>
		</p>
	);
};

export default Checkbox;
