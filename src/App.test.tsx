// Libraries
import { render } from '@testing-library/react';

// Components
import App from './App';

describe('Test App.tsx', () => {
	test('should render correcly', () => {
		render(<App />);

		expect(true).toBeTruthy();
	});
});
