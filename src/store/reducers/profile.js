// import * as actionTypes from '../actions/actionTypes';
// import { updatedObj } from  '../../shared/Utility';

const initialState = {
	name: 'Sai Teja Malladi',
	avatarUrl: 'saiteja-malladi.jpg',
	currency: {
		symbol: '$',
		text: 'USD'
	}
};

const reducer = (state = initialState, action ) => {
	switch (action.type) {
		default: return state;
	}
};

export default reducer;