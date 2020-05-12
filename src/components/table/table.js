import React from 'react';

export const TableMicroComponent = ({
	tableData: { columnDefs, rowData, striped, highlight, centrered, responsiveTable },
}) => {
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
