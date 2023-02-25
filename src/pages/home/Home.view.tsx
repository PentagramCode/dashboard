// Libraries
import { useDispatch } from 'react-redux';

// Redux
import { setAuthenticated } from '@redux/authentication/authentication.slice';

const Home = (): JSX.Element => {
	const dispatch = useDispatch();

	const handleLogout = (): void => {
		dispatch(
			setAuthenticated({
				isAuthenticated: false,
				user: null,
			})
		);
	};

	return (
		<div>
			<div>Home Page!</div>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default Home;
