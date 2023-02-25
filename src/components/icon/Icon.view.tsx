import { IIconProps } from '.';

import { useDynamicSvgImport } from '@hooks/useDynamicSvgImport';

const Icon: React.FC<IIconProps> = props => {
	const { iconName, svgProp, onClick } = props;
	const { SvgIcon } = useDynamicSvgImport(iconName);

	return (
		<>
			{SvgIcon != null && (
				<div>
					<SvgIcon {...svgProp} onClick={onClick} />
				</div>
			)}
		</>
	);
};

export default Icon;
