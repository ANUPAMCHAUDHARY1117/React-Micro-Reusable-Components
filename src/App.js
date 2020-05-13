import React from 'react';
import TableMicroComponent from './components/table/table';
import TextInput from './components/forms/text-input/text-input';
import './lib/materialize.css';
import tableData from './components/table/tableData';
import Checkbox from './components/forms/checkbox/checkbox';
import RadioButton from './components/forms/radio-buttons/radio-buttons';

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
			<div className='row'>
				<div className='col s6'>
					<TextInput
						id='name'
						type='text'
						value=''
						placeholder='name'
						label='First Name'
						validation={true}
						disabled={false}
						inline={false}
						helperField={true}
						helperText='Please fill the name'
					/>
				</div>
			</div>
			<Checkbox checked={true} classStyle='filled-in' />
			<RadioButton name='group1' title='red' classStyle='with-gap' />
			<RadioButton name='group1' title='blue' />
			<RadioButton name='group1' title='green' />
			<input type='text' class='datepicker' />
		</div>
	);
}

export default App;
