// Libraries
import React from 'react';
import thunk from 'redux-thunk';
import createMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import { configureStore, Dispatch } from '@reduxjs/toolkit';

// Internal imports
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { RootState } from '@redux/configureStore';

// Reducers
import authenticationReducer from '@redux/authentication/authentication.slice';

/**
 * Interface to get properties from wrapper
 * @constructor
 * @param {React.ReactNode} children - content from wrapper
 */
interface IWrapper {
	children: React.ReactNode;
}

const Wrapper: React.FC<IWrapper> = ({ children }) => {
	const store = configureStore({
		reducer: {
			authentication: authenticationReducer,
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				immutableCheck: false,
				serializableCheck: false,
			}),
	});
	return (
		<Provider store={store}>
			<Router>{children}</Router>
		</Provider>
	);
};
// Configure moc store
export const configureMocStore = createMockStore<RootState, Dispatch>([thunk]);

const customRender = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: Wrapper, ...options });

// re-export everything
// export * from '@testing-library/react';
// override render method
export { customRender as render };
