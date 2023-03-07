// Libraries
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Redux
import { RootState } from '@redux/configureStore';
import { setAuthenticated, setFailedRequest } from '@redux/authentication/authentication.slice';

// Models
import { IUserLogin } from '@models/user';

// Constants
import { initialValues } from '../constants/user';

// Services
import { AuthenticationService } from '@servcies/authentication/authenticationService';

export const useLogin = (): {
	visiblePassword: boolean;
	handleVisiblePassword: () => void;
	initialLoginState: IUserLogin;
	handleLogin: (values: IUserLogin) => void;
	failedRequest: string;
} => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { authentication } = useSelector((state: RootState) => state);
	const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
	const [initialLoginState] = useState<IUserLogin>(initialValues);
	const authenticationService = new AuthenticationService();

	const handleLogin = async (values: IUserLogin): Promise<void> => {
		try {
			const { user, token } = await authenticationService.login(values);

			dispatch(
				setAuthenticated({
					isAuthenticated: true,
					user,
					token,
				})
			);

			navigate('/home');
		} catch (error) {
			dispatch(setFailedRequest('* Invalid credentials'));
			setTimeout(() => {
				dispatch(setFailedRequest(null));
			}, 3000);
		}
	};

	const handleVisiblePassword = (): void => {
		setVisiblePassword(!visiblePassword);
	};

	useEffect(() => {
		if (authentication.isAuthenticated) {
			navigate('/home');
		}
	}, [authentication]);

	return {
		visiblePassword,
		handleVisiblePassword,
		initialLoginState,
		handleLogin,
		failedRequest: authentication.failedRequest ?? '',
	};
};
