// Libraries
import { FieldHookConfig, useField } from 'formik';

// Index
import { ICustomInput } from '.';

// Styles
import './Input.style.scss';

export const Input: React.FC<
	React.ComponentProps<'input'> & ICustomInput & FieldHookConfig<string>
> = ({ label, type, placeholder, icon = false, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className='container__input'>
			{label != null && field.name.length > 0 && (
				<label className='container__input--label' htmlFor={field.name}>
					{label}
				</label>
			)}

			{icon != null ? (
				<div className='container__icon'>
					<input
						{...field}
						{...props}
						id={field.name}
						type={type}
						className={`container__icon--input ${
							meta.touched && meta.error != null ? 'border-error' : 'border'
						}`}
						placeholder='Enter your password'
					/>
					<div className='container__icon--icon'>{icon}</div>
				</div>
			) : (
				<input
					{...field}
					{...props}
					type={type}
					className={`container__input--input ${
						meta.touched && meta.error != null ? 'border-error' : 'border'
					}`}
					placeholder={placeholder}
				/>
			)}
			{meta.touched && meta.error != null && (
				<div className='container__input--error'>{meta.error}</div>
			)}
		</div>
	);
};
