import React, {useState} from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';
import { Switch } from '@material-ui/core';

const barData = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: 'rgba(255,99,132,0.2)',
			borderColor: 'rgba(255,99,132,1)',
			borderWidth: 1,
			hoverBackgroundColor: 'rgba(255,99,132,0.4)',
			hoverBorderColor: 'rgba(255,99,132,1)',
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
};

const doughnutData = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
		],
		hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
		]
	}]
};

function IncomeSummary(props) {
	const [showBar, toggleShowBar] = useState(false);
	let displayChart = "Loading....";
	if(showBar) {
		displayChart = (
			<Bar
				data={barData}
				width={100}
				height={50}
				options={{
					maintainAspectRatio: false
				}}
			/>
		)
	} else {
		displayChart = (
			<Doughnut data={doughnutData} />
		)
	}
	return (
		<div>
			<h2>Income Summary</h2>
			<div className={"Switch"}>
				<Switch
					checked={showBar}
					onChange={(e) => toggleShowBar(e.target.checked)}
					name="checkedA"
					inputProps={{ 'aria-label': 'secondary checkbox' }}
				/>
			</div>
			{displayChart}
		</div>
	);
}

export default IncomeSummary;