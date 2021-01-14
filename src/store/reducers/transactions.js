import * as actionTypes from '../actions/actionTypes';
import { updatedObj } from  '../../shared/Utility';

const initialState = {
	// transactions: JSON.parse(localStorage.getItem("transactions"))
	transactions: [
		{
			"id": "95eopgcbyfrz2l0sbei0in",
			"type": 1,
			"description": "Housing",
			"category_id": 1,
			"amount": 24323.00,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 1,
			"description": "Transportation",
			"category_id": 2,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "95eopgcbyfrz2l0sbei0in",
			"type": 1,
			"description": "Food",
			"category_id": 3,
			"amount": 24323.00,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 1,
			"description": "Utilities",
			"category_id": 4,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "95eopgcbyfrz2l0sbei0in",
			"type": 1,
			"description": "Fashion",
			"category_id": 5,
			"amount": 24323.00,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 1,
			"description": "Medical/Healthcare",
			"category_id": 6,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "95eopgcbyfrz2l0sbei0in",
			"type": 1,
			"description": "Insurance",
			"category_id": 7,
			"amount": 24323.00,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 1,
			"description": "Household Items/Supplies",
			"category_id": 8,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "95eopgcbyfrz2l0sbei0in",
			"type": 1,
			"description": "Personal",
			"category_id": 9,
			"amount": 24323.00,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 1,
			"description": "Debt",
			"category_id": 10,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "95eopgcbyfrz2l0sbei0in",
			"type": 1,
			"description": "Retirement",
			"category_id": 11,
			"amount": 24323.00,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 1,
			"description": "Education",
			"category_id": 12,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "95eopgcbyfrz2l0sbei0in",
			"type": 1,
			"description": "Savings",
			"category_id": 13,
			"amount": 24323.00,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 1,
			"description": "Gifts/Donations",
			"category_id": 14,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "95eopgcbyfrz2l0sbei0in",
			"type": 1,
			"description": "Entertainment",
			"category_id": 15,
			"amount": 24323.00,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 1,
			"description": "Random Transaction",
			"category_id": 16,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 0,
			"description": "Salary",
			"category_id": 17,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 0,
			"description": "Interest",
			"category_id": 18,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 0,
			"description": "Innovation",
			"category_id": 19,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 0,
			"description": "Investment Returns",
			"category_id": 20,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 0,
			"description": "Gifts",
			"category_id": 21,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 0,
			"description": "Allowance",
			"category_id": 22,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		},
		{
			"id": "1231231rvefb123efv12efdf",
			"type": 0,
			"description": "Others",
			"category_id": 23,
			"amount": 100,
			"date": "2021-01-13T17:11:03.602Z"
		}
	]
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