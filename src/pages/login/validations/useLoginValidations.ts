// Libraries
import * as Yup from 'yup';

// Models
import { IUser } from '@models/user';
import { IYupErrors } from '@models/validation';

// Utils
import { regexValidateEmail } from '@utils/regex';

export const useLoginValidations = (): {
	loginSchemma: Yup.ObjectSchema<IUser>;
	validateCustom: (values: IUser) => object;
} => {
	const loginSchemma: Yup.ObjectSchema<IUser> = Yup.object().shape({
		email: Yup.string()
			.email('* Correo electrónico invalido.')
			.required('* Campo requerido.'),
		password: Yup.string()
			.required('* Campo requerido.')
			.min(8, 'Debe contener al menos 8 caracteres'),
	});

	const validateEmail = ({ email }: IUser): object => {
		const errors: IYupErrors = {};

		if (!regexValidateEmail.test(email)) {
			errors.email = '* Correo electrónico inválido.';
		}

		return errors;
	};

	const validateCustom = (values: IUser): object => {
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
