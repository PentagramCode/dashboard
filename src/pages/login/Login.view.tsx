// Libnraries
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Input } from '@components/form/input';
import { Checkbox } from '@components/form/checkbox';

// Redux
import { RootState } from '@redux/configureStore';
import { setAuthenticated } from '@redux/authentication/authentication.slice';

// Images
import Wave from '@assets/img/wave.svg';

// Validations
import { useLoginValidations } from './validations/useLoginValidations';

// Icons
import Icon from '@components/icon';

// Styles
import './Login.style.scss';

const Login = (): JSX.Element => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { authentication } = useSelector((state: RootState) => state);

	const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

	const handleLogin = (): void => {
		dispatch(
			setAuthenticated({
				isAuthenticated: true,
				user: {
					email: 'john.doe@gmail.com',
					password: 'password',
				},
			})
		);

		navigate('/home');
	};

	const handleVisiblePassword = (): void => {
		setVisiblePassword(!visiblePassword);
	};

	const { loginSchemma, validateCustom } = useLoginValidations();

	useEffect(() => {
		if (authentication.isAuthenticated) {
			navigate('/home');
		}
	});

	return (
		<div className='container'>
			<div className='login__form animate__animated animate__backInUp'>
				<div className='login__form--header'>
					<div className='title'>
						Welcome <span>Back</span>
					</div>
					<div className='description'>Welcome! Please login to continue.</div>
				</div>

				<Formik
					enableReinitialize
					initialValues={{ email: '', password: '', remember: false }}
					onSubmit={values => {
						console.log(values);
					}}
					validationSchema={loginSchemma}
					validate={values => validateCustom(values)}
				>
					{({ values }): JSX.Element => (
						<Form>
							<div>
								<Input
									type='email'
									name='email'
									label='Email'
									value={values.email}
									placeholder='Enter your email address'
								/>
							</div>
							<div>
								<Input
									type={visiblePassword ? 'text' : 'password'}
									value={values.password}
									name='password'
									label='Password'
									placeholder='Enter your password'
									icon={
										<Icon
											iconName={visiblePassword ? 'eye' : 'eye-slash'}
											onClick={handleVisiblePassword}
										/>
									}
								/>
							</div>
							<div>
								<Checkbox name='remember' label='Remember me' />
							</div>
							<div className='login__buttons'>
								<button type='submit' className='login__buttons--button'>
									Sign Up
								</button>
								<a href='#' className='login__buttons--forgot'>
									Forgot Password?
								</a>
							</div>
						</Form>
					)}
				</Formik>
			</div>
			<img src={Wave} alt='wave' className='wave' />
		</div>
	);
};

export default Login;
