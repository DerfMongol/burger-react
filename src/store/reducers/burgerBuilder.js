import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
	ingredients: null,
	totalPrice: 4,
	error: false,
	building: false
};

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

const addIngredient = (state, action) => {
	const updatedIng1 = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
	const updatedIngs1 = updateObject(state.ingredients, updatedIng1);
	const updatedState1 = {
		ingredients: updatedIngs1,
		totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
		building: true
	}
	return updateObject(state, updatedState1);
};

const removeIngredient = (state, action) => {
	const updatedIng2 = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
	const updatedIngs2 = updateObject(state.ingredients, updatedIng2);
	const updatedState2 = {
		ingredients: updatedIngs2,
		totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
		building: true
	}
	return updateObject(state, updatedState2);
};

const setIngredients = (state, action) => {
	return updateObject(state, {
		ingredients: {
			salad: action.ingredients.salad,
			bacon: action.ingredients.bacon,
			cheese: action.ingredients.cheese,
			meat: action.ingredients.meat,
		},
		totalPrice: 4,
		error: false,
		building: false
	});
};

const fetchIngredientsFailed = (state, action) => {
	return updateObject(state, {error: true});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
		case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
		case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
		case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
		default: return state;
	}
};

export default reducer;