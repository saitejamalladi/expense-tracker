import React, {Component} from 'react';
import {Button, Icon} from '@material-ui/core';
import Transaction from "../../components/Transaction/Transaction";
import classes from './Transactions.module.css';
import * as actions from "../../store/actions";
import {connect} from "react-redux";

class Transactions extends Component {
	componentDidMount() {
		this.props.initTransaction();
	}

	render () {
		let transactions = this.props.transactions.sort((a, b) => Math.floor(Math.random() * 2) === 0 ? 1: -1);
		return (
			<div>
				<div className={classes.Header}>
					<h2>Recent transactions</h2>
					<Button
						variant={"contained"}
						color={"default"}
						className={classes.Button}
						onClick={() => this.props.showForm()}>
						<Icon className={classes.Icon}>attach_money</Icon>
						<span>Add</span>
					</Button>
				</div>
				{
					transactions.map((transaction, index) =>
						<Transaction
							key={index}
							transaction={transaction}
							Delete={(id) => this.props.submitDeleteTransaction(transactions, id)}/>
					)
				}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		displayForm: state.transactions.displayForm,
		transactions: state.transactions.transactions
	}
};

const mapDispatchToProps = dispatch => {
	return {
		showForm: () => dispatch( actions.showForm()),
		initTransaction: () =>  dispatch( actions.initTransaction()),
		submitDeleteTransaction: (transactions, id) => dispatch( actions.submitDeleteTransaction(transactions, id) ),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
