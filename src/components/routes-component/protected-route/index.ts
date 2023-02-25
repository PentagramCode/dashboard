export * from './ProtectedRoute.view';

/**
 * Interface props for the ProtectedRouteView component.
 * @constructor
 * @param { JSX.Element } children - Optional children of the component.
 * @param { string } redirectTo - Optional redirect
 */
export interface IProtectedRoute {
	children?: JSX.Element;
	redirectTo?: string;
}
