import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function ExpenseSummary({header, expenses}) {
	const doughnutData = {
		labels: expenses.map(expense => expense.label),
		datasets: [{
			data: expenses.map(expense => expense.data),
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
	return (
		<div>
			<h2>{header}</h2>
			<Doughnut data={doughnutData} />
		</div>
	);
}

export default ExpenseSummary;