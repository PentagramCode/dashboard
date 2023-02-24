import { IUser } from '@models/user';

export interface IAuthenticationState {
	user: IUser | null;
	isAuthenticated: boolean;
}
