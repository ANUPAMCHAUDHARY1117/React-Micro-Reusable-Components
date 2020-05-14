import React from 'react';

/**
 *
 * @param {string} label
 * @param {Array} values
 */

const Select = ({ label, values }) => {
	return (
		<label>
			{label}
			<select>
				{values.map((value) => (
					<option key={value} value={value}>
						{value}
					</option>
				))}
			</select>
		</label>
	);
};

export default Select;
