import * as actionTypes from '../actions/actionTypes';
import { updatedObj } from  '../../shared/Utility';

const initialState = {
	transactions: JSON.parse(localStorage.getItem("transactions"))
};

const addTransaction = (state, action) =>  {
	return updatedObj(state, {
		transactions: action.transactions
	});
};
const deleteTransaction = (state, action) =>  {
	return updatedObj(state, {
		transactions: action.transactions
	});
};

const reducer = (state = initialState, action ) => {
	switch (action.type) {
		case actionTypes.ADD_TRANSACTION: return addTransaction(state,action);
		case actionTypes.DELETE_TRANSACTION: return deleteTransaction(state,action);
		default: return state;
	}
};

export default reducer;