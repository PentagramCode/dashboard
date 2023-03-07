/**
 * Interface for the user login
 * @constructor
 * @param { string } email - user email
 * @param { string } password - user password
 * @param { boolean } remember - Optional remember flag for remember user
 */
export interface IUserLogin {
	email: string;
	password: string;
	remember?: boolean;
}

/**
 * Interface for the user login service response
 * @constructor
 * @param { IUser } user - user service response
 * @param { string } token - token service response
 */
export interface IUserLoginResponse {
	user: IUser;
	token: string;
}

/**
 * Interface for the user
 * @constructor
 * @param { string } _id - user's _id
 * @param { string } username - user's username
 * @param { string } email - user's email
 * @param { boolean } status - user's status
 * @param { boolean } google - user's google
 * @param { string } role - user's role
 * @param { string | Date } createdAt - user's createdAt
 * @param { string | Date } updatedAt - user's updatedAt
 */
export interface IUser {
	_id: string;
	username: string;
	email: string;
	status: boolean;
	google: boolean;
	role: string;
	createdAt: string | Date;
	updatedAt: string | Date;
}
