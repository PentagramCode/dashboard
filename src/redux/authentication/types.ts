import { IUser } from '@models/user';
/**
 * Interface fot the authentication state
 * @constructor
 * @param { IUserLoginResponse | null } user -  user state
 * @param { token } token - user token
 * @param { boolean } isAuthenticated - flag is authenticated
 * @param { string | null } failedRequest - Optional message failed request
 */
export interface IAuthenticationState {
	user: IUser | null;
	token: string;
	isAuthenticated: boolean;
	failedRequest?: string | null;
}
