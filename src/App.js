import React from 'react';
import TableMicroComponent from './components/table/table';
import TextInput from './components/forms/text-input/text-input';
import './lib/materialize.css';
import tableData from './components/table/tableData';
import Checkbox from './components/forms/checkbox/checkbox';
import RadioButton from './components/forms/radio-buttons/radio-buttons';
import Select from './components/forms/select/select';
import Audio from './components/audio/audio';
import Video from './components/video/video';
import TextArea from './components/text-area/text-area';
import Teaser from './components/teaser/teaser';

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
			<div className='row'>
				<div className='col s12'>
					<Audio
						list={[
							{ src: 'https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3', type: 'audio/mp3' },
						]}
						loop={true}
					/>
				</div>
			</div>
			<Video src='https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4' type='video/mp4' />
			<TextArea />
			<Teaser />
			<div className='input-field col s12'>
				<Select label='Pick you fruit' values={['mango', 'grape', 'orange']} />
			</div>
		</div>
	);
}

export default App;
