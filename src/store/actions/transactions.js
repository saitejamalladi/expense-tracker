import * as actionTypes from '../actions/actionTypes';

const updateBalance = (transactions) => {
	let incomeBalance = transactions.reduce((total, transaction) => (transaction.type === 0) ? total + transaction.amount: total, 0);
	let expenseBalance = transactions.reduce((total, transaction) => (transaction.type === 1) ? total  + transaction.amount: total, 0);
	let totalBalance = incomeBalance - expenseBalance;
	return {
		type: actionTypes.UPDATE_BALANCE,
		totalBalance: totalBalance,
		incomeBalance: incomeBalance,
		expenseBalance: expenseBalance
	}
};
const saveTransactions = (transactions) => {
	return {
		type: actionTypes.STORE_TRANSACTIONS,
		transactions: transactions
	}
};
export const initTransaction = () =>  {
	let transactions = JSON.parse(localStorage.getItem("transactions"));
	return async dispatch => {
		dispatch(saveTransactions(transactions));
		dispatch(updateBalance(transactions));
	}
};
export const submitAddTransaction = (transactions, newTransaction) =>  {
	transactions.push(newTransaction);
	return async dispatch => {
		dispatch(saveTransactions(transactions));
		dispatch(updateBalance(transactions));
		dispatch(hideForm());
		localStorage.setItem("transactions", JSON.stringify(transactions));
	}
};
export const submitDeleteTransaction = (transactions, id) =>  {
	return async dispatch => {
		transactions = transactions.filter(transaction => transaction.id !== id);
		dispatch(saveTransactions(transactions));
		dispatch(updateBalance(transactions));
		localStorage.setItem("transactions", JSON.stringify(transactions));
	}
};

export const showForm = () =>  {
	return async dispatch => {
		dispatch({
			type: actionTypes.SHOW_FORM,
		});
	}
};
export const hideForm = () =>  {
	return {
		type: actionTypes.HIDE_FORM,
	}
};
