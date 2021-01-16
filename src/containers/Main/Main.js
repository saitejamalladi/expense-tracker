import React, {Component} from 'react';
import {Grid} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
// import OverallSummary from "../../components/OverallSummary/OverallSummary";
// import IncomeSummary from "../../components/IncomeSummary/IncomeSummary";
import ExpenseSummary from "../../components/ExpenseSummary/ExpenseSummary";
import Transactions from "../Transactions/Transactions";
import TransactionForm from "../TransactionForm/TransactionForm";
import {connect} from "react-redux";
import Summary from "../../components/Summary/Summary";
import configurations from '../../assets/static/configurations.json';
import classes from './Main.module.css';

class Main extends Component {

	generateDoughnutData = (transactions, type) => {
		if(transactions.length <= 0) return [];
		let categories = configurations.categories;
		let categoryIds =
			transactions
				.filter(transaction => transaction.type === type)
				.map(transaction => transaction.category_id);
		categoryIds = Array.from(new Set(categoryIds));
		return categoryIds.map(categoryId => {
			let label = categories.find(category => category.id === categoryId).label;
			let data = transactions.reduce((total, transaction) => {
				if(transaction.type === type && transaction.category_id === categoryId) {
					return total + Number(transaction.amount)
				}
				return total;
			}, 0)
			return {
				id: categoryId,
				label: label,
				data: data
			}
		})
	}

	render () {
		let incomeData = this.generateDoughnutData(this.props.transactions, 0);
		let expenseData = this.generateDoughnutData(this.props.transactions, 1);
		return (
			<div className={classes.Main}>
				<Grid container justify={"center"}>
					<Grid item xs={12} lg={7}>
						<Summary
							profile={this.props.profile}
							balance={this.props.balance}
						/>
						<TransactionForm/>
						<Transactions/>
					</Grid>
					<Grid item xs={12} lg={4}>
						<Grid container justify={"center"} spacing={2}>
							<Grid item xs={12}>
								<Carousel
									interval={3000}
									animation={"slide"}
									navButtonsAlwaysVisible={true}
								>
									<ExpenseSummary header={"Income Summary"} expenses={incomeData} />
									<ExpenseSummary header={"Expense Summary"} expenses={expenseData} />
								</Carousel>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		profile: state.profile,
		balance: {
			total: state.transactions.totalBalance,
			income: state.transactions.incomeBalance,
			expense: state.transactions.expenseBalance,
		},
		transactions: state.transactions.transactions
	}
};

export default connect(mapStateToProps, null)(Main);