import React from 'react';
import Transaction from "../../components/Transaction/Transaction";
import classes from './Transactions.module.css';

function Transactions({transactions}) {
	transactions = transactions.sort((a, b) => Math.floor(Math.random() * 2) === 0 ? 1: -1);
	return (
		<div>
			<div className={classes.Header}>
				<h2>Recent transactions</h2>
				<button className={classes.SeeAll}>See All</button>
			</div>
			{
				transactions.map((transaction, index) =>
					<Transaction
						key={index}
						transaction={transaction}/>
				)
			}
		</div>
	);
}

export default Transactions;