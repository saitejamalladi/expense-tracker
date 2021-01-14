import React, {Component} from 'react';
import {Grid} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import CustomModal from "../../components/CustomModal/CustomModal";
import OverallSummary from "../../components/OverallSummary/OverallSummary";
import IncomeSummary from "../../components/IncomeSummary/IncomeSummary";
import ExpenseSummary from "../../components/ExpenseSummary/ExpenseSummary";
// import Transactions from "../../components/Transactions/Transactions";
import Transactions from "../Transactions/Transactions";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import classes from './Main.module.css';
import Summary from "../../components/Summary/Summary";

class Main extends Component {
	state = {
		showTransForm: false
	}
	toggleTransForm = (value) => {
		this.setState({
			showTransForm: value
		})
	}
	addTransaction = (newTransaction) => {
		this.props.submitAddTransaction(this.props.transactions, newTransaction);
		this.toggleTransForm(false);
	}
	deleteTransaction = (id) => {
		this.props.submitDeleteTransaction(this.props.transactions, id);
	}
	render () {
		return (
			<div className={classes.Main}>
				<Grid container justify={"center"}>
					<Grid item xs={12} lg={7}>
						<Summary
							name={this.props.name}
							avatarUrl={this.props.avatarUrl}
							currency={this.props.currency}/>
						{/*<Button variant={"contained"} color={"primary"} onClick={() => this.toggleTransForm(true)}>Add Expense</Button>*/}
						<CustomModal show={this.state.showTransForm} close={() => this.toggleTransForm(false)}>
							<TransactionForm AddTransaction={this.addTransaction} close={() => this.toggleTransForm(false)}/>
						</CustomModal>
						<Transactions transactions={this.props.transactions} Delete={this.deleteTransaction}/>
					</Grid>
					<Grid item xs={12} lg={4}>
						<Grid container justify={"center"} spacing={2}>
							<Grid item xs={12}>
								<Carousel
									interval={3000}
									animation={"slide"}
								>
									<IncomeSummary/>
									<ExpenseSummary/>
									<OverallSummary/>
									<ExpenseSummary/>
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
		name: state.profile.name,
		avatarUrl: state.profile.avatarUrl,
		currency: state.profile.currency,
		transactions: state.transactions.transactions
	}
};

const mapDispatchToProps = dispatch => {
	return {
		submitAddTransaction: (transactions, newTransaction) => dispatch( actions.submitAddTransaction(transactions, newTransaction) ),
		submitDeleteTransaction: (transactions, id) => dispatch( actions.submitDeleteTransaction(transactions, id) ),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);