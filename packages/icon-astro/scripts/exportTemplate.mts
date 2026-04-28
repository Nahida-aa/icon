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

  // Astro doesn't need keyed children in loops
  const keylessChildren = children.map((c: any) => {
    const [element, { key, ...otherAttrs }] = c;
    return [element, otherAttrs];
  });
	const { defaults } = iconData;
	const defaultsArg = defaults ? JSON.stringify(defaults) : 'undefined';

  // TODO: build-icons' `pretty` is set to false as the prettier
  // formatter uses babel which I'm not sure it supports typescript
  return `
import createXaaIcon from '../createXaaIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ${componentName}
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,${svgBase64}) - https://icon.nahida-aa.workers.dev/icons/${iconName}
 * @see https://icon.nahida-aa.workers.dev/guide/astro - Documentation
 *
 * @param {import('../types').IconProps} props - Xaa icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * ${deprecated ? `@deprecated ${deprecationReason}` : ''}
 */
const ${componentName} = createXaaIcon('${iconName}', ${JSON.stringify(keylessChildren)}, ${defaultsArg}) as AstroComponent;

export default ${componentName};
`;
});
