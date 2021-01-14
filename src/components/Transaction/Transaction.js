import React from 'react';
import {Icon} from '@material-ui/core';
import Moment from "react-moment";
import configurations from '../../assets/static/configurations.json';
import classes from './Transaction.module.css';

function getCategoryIcon(transType, categoryId) {
	let category = configurations.categories.find(category => category.id === categoryId && category.type === transType);
	if(category) return category.icon;
	return transType === 1  ? "add_shopping_cart_icon" : "local_atm_icon";
}

function Transaction({transaction}) {
	return (
		<div className={classes.Transaction}>
			<div className={classes.Left}>
				<Icon className={transaction.type === 1 ? classes.ExpenseIcon: classes.IncomeIcon}>
					{getCategoryIcon(transaction.type, transaction.category_id)}
				</Icon>
				<div className={classes.Header}>
					<div className={classes.Description}>
						{transaction.description}
					</div>
					<div className={classes.Category}>
						{transaction.category}
					</div>
				</div>
			</div>
			<div className={classes.Right}>
				<div className={classes.Details}>
					<div className={classes.Amount}>
						<span>{transaction.type ? '+': '-'}</span>
						<span>{transaction.amount}</span>
					</div>
					<div className={classes.Date}>
						<Moment date={transaction.date} format="DD-MMM-YY"/>
					</div>
				</div>
				<div className={classes.Action}>
					<Icon className={classes.DeleteIcon}>delete</Icon>
				</div>
			</div>
		</div>
	);
}

export default Transaction;