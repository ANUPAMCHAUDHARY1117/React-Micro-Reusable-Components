import React from 'react';
import TableMicroComponent from './components/table/table';
import TextInput from './components/forms/text-input/text-input';
import './lib/materialize.css';
import tableData from './components/table/tableData';

function App() {
	return (
		<div className='App'>
			<TableMicroComponent
				rowData={tableData.rowData}
				columnDefs={tableData.columnDefs}
				striped={tableData.striped}
				highlight={tableData.highlight}
				centered={tableData.centrered}
				responsiveTable={tableData.responsiveTable}
			/>
			<TextInput />
		</div>
	);
}

export default App;
