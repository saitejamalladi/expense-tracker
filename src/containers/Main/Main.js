import React, {Component} from 'react';
import OverallSummary from "../../components/OverallSummary/OverallSummary";
import IncomeSummary from "../../components/IncomeSummary/IncomeSummary";
import ExpenseSummary from "../../components/ExpenseSummary/ExpenseSummary";
import Transactions from "../../components/Transactions/Transactions";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import {Backdrop, Button, Grid, Modal} from "@material-ui/core";
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import './Main.css';

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
							<Button variant={"contained"} color={"primary"} onClick={() => this.toggleTransForm(true)}>Add Expense</Button>
						</div>
						<Modal
							aria-labelledby="spring-modal-title"
							aria-describedby="spring-modal-description"
							open={this.state.showTransForm}
							className={"Modal"}
							onClose={() => this.toggleTransForm(false)}
							closeAfterTransition
							BackdropComponent={Backdrop}
							BackdropProps={{
								timeout: 500,
							}}
						>
							<TransactionForm AddTransaction={this.addTransaction} close={() => this.toggleTransForm(false)}/>
						</Modal>
						<Transactions transactions={this.props.transactions} Delete={this.deleteTransaction}/>
					</Grid>
				</Grid>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		transactions: state.root.transactions
	}
};

const mapDispatchToProps = dispatch => {
	return {
		submitAddTransaction: (transactions, newTransaction) => dispatch( actions.submitAddTransaction(transactions, newTransaction) ),
		submitDeleteTransaction: (transactions, id) => dispatch( actions.submitDeleteTransaction(transactions, id) ),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);