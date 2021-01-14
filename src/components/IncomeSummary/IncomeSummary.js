import React from 'react';
import {Bar} from 'react-chartjs-2';

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

function IncomeSummary(props) {
	return (
		<div>
			<h2>Income Summary</h2>
			<Bar
				data={barData}
				width={100}
				height={50}
				options={{
					maintainAspectRatio: true
				}}
			/>
		</div>
	);
}

export default IncomeSummary;