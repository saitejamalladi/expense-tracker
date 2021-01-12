import * as actionTypes from '../actions/actionTypes';

const addTransaction = (transactions) => {
	return {
		type: actionTypes.ADD_TRANSACTION,
		transactions: transactions
	}
};
const deleteTransaction = (transactions) => {
	return {
		type: actionTypes.DELETE_TRANSACTION,
		transactions: transactions
	}
};

export const submitAddTransaction = (transactions, newTransaction) =>  {
	transactions.push(newTransaction);
	return async dispatch => {
		dispatch(addTransaction(transactions));
		localStorage.setItem("transactions", JSON.stringify(transactions));
	}
};
export const submitDeleteTransaction = (transactions, id) =>  {
	return async dispatch => {
		transactions = transactions.filter(transaction => transaction.id !== id);
		dispatch(deleteTransaction(transactions));
		localStorage.setItem("transactions", JSON.stringify(transactions));
	}
};
