import React from 'react';
import {Bar} from 'react-chartjs-2';
import './OverallSummary.css';

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

function OverallSummary(props) {
	return (
		<div className={"OverallSummary"}>
			<h2>Overall Summary</h2>
			<Bar
				data={barData}
				options={{
					maintainAspectRatio: true
				}}
			/>
		</div>
	);
}

export default OverallSummary;