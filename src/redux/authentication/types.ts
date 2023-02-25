import { IUser } from '@models/user';

/**
 * Interface fot the authentication state
 * @constructor
 * @param { IUser | null } user -  user state
 * @param { boolean } isAuthenticated - flag is authenticated
 */
export interface IAuthenticationState {
	user: IUser | null;
	isAuthenticated: boolean;
}
