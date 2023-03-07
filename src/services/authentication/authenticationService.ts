// Axios Client
import AxiosClient from '@servcies/axiosClient';

// Models
import { IUserLogin, IUserLoginResponse } from '@models/user';

export class AuthenticationService extends AxiosClient {
	public async login(user: IUserLogin): Promise<IUserLoginResponse> {
		const response = await this.post<IUserLoginResponse>('/api/auth/login', user);
		return response;
	}
}
