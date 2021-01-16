import React, {Component} from 'react';
import { Button, Grid, Switch, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import './TransactionForm.css';
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import CustomModal from "../../components/CustomModal/CustomModal";
import configurations from '../../assets/static/configurations.json';

class TransactionForm extends Component {
	state = {
		type: 1,
		description: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
		category_id: 1,
		amount: 100.00,
		date: new Date()
	}
	handleTypeChange = (event) => {
		this.setState({
			type: event.target.checked ? 1: 0
		})
	}
	handleDescriptionChange = (event) => {
		this.setState({
			description: event.target.value
		})
	}
	handleCategoryChange = (event) => {
		this.setState({
			category_id: Number(event.target.value)
		})
	}
	handleAmountChange = (event) => {
		this.setState({
			amount: event.target.value
		})
	}
	handleDateChange = (date) => {
		this.setState({
			date: date
		})
	}
	handleSubmit = (event) => {
		event.preventDefault();
		let transaction = {
			id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
			type: this.state.type,
			description: this.state.description,
			category_id:  this.state.category_id,
			amount: this.state.amount,
			date: this.state.date
		}
		this.props.submitAddTransaction(this.props.transactions, transaction);
	}
	render() {
		let categories = configurations.categories.filter(category =>  category.type === this.state.type);
		return (
			<CustomModal show={this.props.displayForm} close={() => this.props.hideForm()}>
				<div className={"TransactionForm"}>
					<form onSubmit={this.handleSubmit}>
						<Grid container spacing={4} alignItems={"center"} justify={"center"}>
							<Grid item xs={12}>
								<div className={"TransactionType"}>
									<div className={this.state.type ? "": "Active"}>Income</div>
									<div><Switch checked={this.state.type === 1} onChange={this.handleTypeChange}/></div>
									<div className={this.state.type === 1 ? "Active" : ""}>Expense</div>
								</div>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									label="Description"
									value={this.state.description}
									onChange={this.handleDescriptionChange}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									select
									label="Category"
									value={this.state.category_id}
									onChange={this.handleCategoryChange}
									SelectProps={{
										native: true,
									}}
								>
									{categories.map((category, index) => (
										<option key={index} value={category.id}>{category.label}</option>
									))}
								</TextField>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									label="Amount"
									value={this.state.amount}
									onChange={this.handleAmountChange}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<Grid container justify="space-around">
										<KeyboardDatePicker
											margin="normal"
											id="date-picker-dialog"
											label="Date picker dialog"
											format="MM/dd/yyyy"
											value={this.state.date}
											onChange={this.handleDateChange}
											KeyboardButtonProps={{
												'aria-label': 'change date',
											}}
										/>
									</Grid>
								</MuiPickersUtilsProvider>
							</Grid>
							<div className={"SubmitButtons"}>
								<Button onClick={this.props.hideForm}>Cancel</Button>
								<Button type={"submit"} variant={"contained"} color={"primary"}>Add</Button>
							</div>
						</Grid>
					</form>
				</div>
			</CustomModal>
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
		hideForm: () => dispatch( actions.hideForm()),
		submitAddTransaction: (transactions, newTransaction) => dispatch( actions.submitAddTransaction(transactions, newTransaction) )
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);