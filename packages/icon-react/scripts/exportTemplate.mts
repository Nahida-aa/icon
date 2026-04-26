import { base64SVG } from '@xaa/build-icons/utils/base64SVG';
import defineExportTemplate from '@xaa/build-icons/utils/defineExportTemplate';

export default defineExportTemplate(async ({
	componentName,
	iconName,
	children,
	getSvg,
	deprecated,
	deprecationReason,
	iconData,
}) => {
	const svgContents = await getSvg();
	const svgBase64 = base64SVG(svgContents);
	const { defaults } = iconData;
	const defaultsArg = defaults ? JSON.stringify(defaults) : 'undefined';

	return `
import createXaaIcon from '../createXaaIcon';
import type { IconNode } from '../types';

export const __iconNode: IconNode = ${JSON.stringify(children)}

/**
 * @component @name ${componentName}
 * @description Xaa SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,${svgBase64}) - https://Nahida.dev/icons/${iconName}
 * @see https://Nahida.dev/guide/react- Documentation
 *
 * @param {Object} props - Xaa icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 * ${deprecated ? `@deprecated ${deprecationReason}` : ''}
 */
const ${componentName} = createXaaIcon('${iconName}', __iconNode,${defaultsArg});

export default ${componentName};
`;
});