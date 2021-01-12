import React, {Component} from 'react';
import configurations from '../../assets/static/configurations.json';
import OverallSummary from "../../components/OverallSummary/OverallSummary";
import IncomeSummary from "../../components/IncomeSummary/IncomeSummary";
import ExpenseSummary from "../../components/ExpenseSummary/ExpenseSummary";
import Transactions from "../../components/Transactions/Transactions";
import {Button, Grid} from "@material-ui/core";
import './Main.css';

class Main extends Component {
	state = {
		transactions: configurations.transactions
	}
	addTransaction = () => {
		let existingTransactions = this.state.transactions;
		let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		if(Math.floor(Math.random()*2) === 0 ) {
			existingTransactions.push({
				"id": id,
				"type": 0,
				"title": "Jan Salary",
				"category": "Salary",
				"description": "@@",
				"amount": Math.floor(Math.random()*1000),
				"currency": "USD",
				"date": new Date()
			});
		} else {
			existingTransactions.push({
				"id": id,
				"type": 1,
				"title": "Groceries",
				"description": "Fruits, Rice, Dhall, Cookies, Floors,  Vegetables",
				"category": "Shopping",
				"amount": Math.floor(Math.random()*1000),
				"currency": "USD",
				"date": new Date()
			});
		}
		this.setState({
			transactions: existingTransactions
		})
	}
	deleteTransaction = (id) => {
		this.setState({
			transactions: this.state.transactions.filter(transaction => transaction.id !== id)
		})
	}
	render () {
		return (
			<div className={"Main"}>
				<Grid container justify={"center"}>
					<Grid item xs={12} md={5}>
						<Grid container  justify={"center"} spacing={2}>
							<Grid item xs={12} sm={8}>
								<OverallSummary/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<IncomeSummary/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<ExpenseSummary/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={4}>
						<div>
							<Button variant={"contained"} color={"primary"} onClick={this.addTransaction}>Add Expense</Button>
						</div>
						<Transactions transactions={this.state.transactions} Delete={this.deleteTransaction}/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Main;