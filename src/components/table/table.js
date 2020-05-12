import React from 'react';

/**
 * @param {Object[]} columnDefs - Defining column with heading
 * @param {string} columnDefs.headerName - Header for the column
 * @param {string} columnDefs.field - Column
 *
 * @param {Object[]} rowData - Array of each row
 * @param {string} rowData.field - The key would be field
 *
 * @param {boolean} striped
 * @param {boolean} highlight
 * @param {boolean} centered
 * @param {boolean} responsiveTable
 */

const TableMicroComponent = ({ columnDefs, rowData, striped, highlight, centrered, responsiveTable }) => {
	return (
		<table
			className={`${striped ? 'striped' : ''}
		${highlight ? 'highlight' : ''}
		${centrered ? 'centered' : ''}
		${responsiveTable ? 'responsive-table' : ''}`}
		>
			<thead>
				<tr>
					{columnDefs.map((column) => (
						<th>{column.headerName}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rowData.map((row) => (
					<tr>
						{columnDefs.map((column) => (
							<td>{row[column.field]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default TableMicroComponent;
