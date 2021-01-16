import * as actionTypes from '../actions/actionTypes';
import { updatedObj } from  '../../shared/Utility';

const initialState = {
	displayForm: false,
	transactions: [],
	totalBalance: 0.00,
	incomeBalance: 0.00,
	expenseBalance: 0.00
};

const storeTransactions = (state, action) =>  {
	return updatedObj(state, {
		transactions: action.transactions
	});
};
const updateBalance = (state, action) =>  {
	return updatedObj(state, {
		totalBalance: action.totalBalance,
		incomeBalance: action.incomeBalance,
		expenseBalance: action.expenseBalance
	});
};
const showForm = (state, action) =>  {
	return updatedObj(state, {
		displayForm: true
	});
};
const hideForm = (state, action) =>  {
	return updatedObj(state, {
		displayForm: false
	});
};

const reducer = (state = initialState, action ) => {
	switch (action.type) {
		case actionTypes.STORE_TRANSACTIONS: return storeTransactions(state,action);
		case actionTypes.UPDATE_BALANCE: return updateBalance(state,action);
		case actionTypes.SHOW_FORM: return showForm(state,action);
		case actionTypes.HIDE_FORM: return hideForm(state,action);
		default: return state;
	}
};

export default reducer;