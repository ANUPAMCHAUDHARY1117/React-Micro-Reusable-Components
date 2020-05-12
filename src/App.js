import React from 'react';
import TableMicroComponent from './components/table/table';
import './App.css';
import tableData from './components/table/tableData';

function App() {
	return (
		<div className='App'>
			<TableMicroComponent tableData={tableData} />
		</div>
	);
}

export default App;
