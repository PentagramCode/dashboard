// Libraries
import * as Yup from 'yup';

// Models
import { IUserLogin } from '@models/user';
import { IYupErrors } from '@models/validation';

// Utils
import { regexValidateEmail } from '@utils/regex';

export const useLoginValidations = (): {
	loginSchemma: Yup.ObjectSchema<IUserLogin>;
	validateCustom: (values: IUserLogin) => object;
} => {
	const loginSchemma: Yup.ObjectSchema<IUserLogin> = Yup.object().shape({
		email: Yup.string()
			.email('* Email is not valid')
			.required('* Email is required'),
		password: Yup.string()
			.required('* Password is required')
			.min(8, '* Must contain at least 8 characters'),
		remember: Yup.boolean().optional(),
	});

	const validateEmail = ({ email }: IUserLogin): object => {
		const errors: IYupErrors = {};

		if (!regexValidateEmail.test(email)) {
			errors.email = '* Email is not valid';
		}

		return errors;
	};

	const validateCustom = (values: IUserLogin): object => {
		const emailErrors = validateEmail(values);

		return {
			...emailErrors,
		};
	};

	return {
		loginSchemma,
		validateCustom,
	};
};
