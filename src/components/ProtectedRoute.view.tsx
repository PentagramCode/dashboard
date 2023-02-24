// Libraries
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// Redux
import { RootState } from '@redux/configureStore';
import { useSelector } from 'react-redux';

interface IProtectedRoute {
	children?: JSX.Element;
	redirectTo?: string;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({
	children,
	redirectTo = '/',
}) => {
	const { authentication } = useSelector((state: RootState) => state);
	const navigate = useNavigate();

	useEffect(() => {
		if (!authentication.isAuthenticated) {
			navigate(redirectTo);
		}
	}, [authentication]);

	return children != null ? children : <Outlet />;
};

export default ProtectedRoute;
