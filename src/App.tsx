import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Redux
import { store } from '@redux/configureStore';

// Pages
import Home from '@pages/home/Home.view';
import Login from '@pages/login/Login.view';

// Components
import { ProtectedRoute } from '@components/routes-component/protected-route';

// Styles
import './App.scss';

const App = (): JSX.Element => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route index element={<Login />} />
					<Route path='/login' element={<Login />} />
					<Route element={<ProtectedRoute />}>
						<Route path='/home' element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
