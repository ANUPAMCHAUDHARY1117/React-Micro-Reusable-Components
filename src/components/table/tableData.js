const tableData = {
	rowData: [
		{
			make: 'Toyota',
			model: 'Celica',
			price: 35000,
		},
		{
			make: 'Ford',
			model: 'Mondeo',
			price: 32000,
		},
		{
			make: 'Porsche',
			model: 'Boxter',
			price: 72000,
		},
	],
	columnDefs: [
		{
			headerName: 'Make',
			field: 'make',
		},
		{
			headerName: 'Model',
			field: 'model',
		},
		{
			headerName: 'Price',
			field: 'price',
		},
	],
	striped: true,
	highlight: true,
	centrered: true,
	responsiveTable: true,
};

export default tableData;
