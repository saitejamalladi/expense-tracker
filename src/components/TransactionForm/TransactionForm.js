import React, {Component} from 'react';
import { Button, Grid, Switch, TextField } from '@material-ui/core';
import configurations from '../../assets/static/configurations.json';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import './TransactionForm.css';

class TransactionForm extends Component {
	state = {
		id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
		type: true,
		title: 'Random Transaction',
		category: '',
		description: '',
		amount: 100.00,
		currency: 'USD',
		date: new Date()
	}
	handleTypeChange = (event) => {
		this.setState({
			type: event.target.checked
		})
	}
	handleTitleChange = (event) => {
		this.setState({
			title: event.target.value
		})
	}
	handleDescriptionChange = (event) => {
		this.setState({
			description: event.target.value
		})
	}
	handleCategoryChange = (event) => {
		this.setState({
			category: event.target.value
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
			id: this.state.id,
			type: this.state.type,
			title: this.state.title,
			category:  this.state.category,
			description: this.state.description,
			amount: this.state.amount,
			currency: "USD",
			date: this.state.date
		}
		this.props.AddTransaction(transaction);
	}
	render() {
		let categories = configurations.income_categories;
		if(this.state.type)
			categories = configurations.expense_categories;
		return (
			<div className={"TransactionForm"}>
				<form onSubmit={this.handleSubmit}>
					<Grid container spacing={4} alignItems={"center"} justify={"center"}>
						<Grid item xs={12}>
							<div className={"TransactionType"}>
								<div className={this.state.type ? "": "Active"}>Income</div>
								<div><Switch checked={this.state.type} onChange={this.handleTypeChange}/></div>
								<div className={this.state.type ? "Active" : ""}>Expense</div>
							</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								label="Title"
								value={this.state.title}
								onChange={this.handleTitleChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								select
								label="Category"
								value={this.state.category}
								onChange={this.handleCategoryChange}
								SelectProps={{
									native: true,
								}}
							>
								{categories.map((category, index) => (
									<option key={index} value={category}>{category}</option>
								))}
							</TextField>
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
							<Button onClick={this.props.close}>Cancel</Button>
							<Button type={"submit"} variant={"contained"} color={"primary"} >Add</Button>
						</div>
					</Grid>
				</form>
			</div>
		);
	}
}

export default TransactionForm;