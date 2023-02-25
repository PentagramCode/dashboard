export * from './Input.view';

/**
 * Interface pros for the input component
 * @constructor
 * @param { string } label - Optional label for the input
 * @param { Icon } icon - Optional icon for the input
 */
export interface ICustomInput {
	label?: string;
	icon?: JSX.Element;
}
