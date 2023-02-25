export { default } from './Icon.view';

/**
 * Interface props for the icon component.
 * @constructor
 * @param {} iconName - The name of the icon
 * @param {} svgProp - Optional svg prop
 * @param {} onClick - Optional on click icon
 */
export interface IIconProps {
	iconName: string;
	svgProp?: React.SVGProps<SVGSVGElement>;
	onClick?: () => void;
}
