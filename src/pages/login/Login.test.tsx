// Libraries
import { screen } from '@testing-library/react';

// Utils
import { render } from '@utils/testUtils';

// Pages
import Login from './Login.view';

describe('Login.view', () => {
	test('should first', () => {
		render(<Login />);
		const titleLogin = screen.getByTestId('title');
		expect(titleLogin).toBeDefined();
	});
});
