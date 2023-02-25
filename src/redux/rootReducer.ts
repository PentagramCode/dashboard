// Libraries
import { combineReducers } from 'redux';

// Reducers
import authenticationReducer from '@redux/authentication/authentication.slice';

/**
 * Declaration from reducers modules
 * Call your reducer module and create a specific name for this
 * example: exampleReducer
 */
export const rootReducer = combineReducers({
	authentication: authenticationReducer,
});
