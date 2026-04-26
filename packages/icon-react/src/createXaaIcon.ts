// import {
// 	mergeClasses,
// 	toKebabCase,
// 	toPascalCase,
// } from '@xaa/build-icons/';

import { mergeClasses } from '@xaa/build-icons/utils/mergeClasses';
import { toKebabCase } from '@xaa/build-icons/utils/toKebabCase';
import { toPascalCase } from '@xaa/build-icons/utils/toPascalCase';
import { createElement, forwardRef } from 'react';
import Icon from './Icon';
import type { IconNode, XaaIconDefaultsAttributes, XaaProps } from './types';

/**
 * Create a Xaa icon component
 * @param {string} iconName
 * @param {array} iconNode
 * @param {object} iconDefaults - optional default values for this icon
 * @returns {ForwardRefExoticComponent} XaaIcon
 */
const createXaaIcon = (
	iconName: string,
	iconNode: IconNode,
	iconDefaults?: XaaIconDefaultsAttributes,
) => {
	const Component = forwardRef<SVGSVGElement, XaaProps>(
		({ className, ...props }, ref) =>
			createElement(Icon, {
				ref,
				iconNode,
				...iconDefaults,
				className: mergeClasses(
					`xaa-${toKebabCase(toPascalCase(iconName))}`,
					`xaa-${iconName}`,
					className,
				),
				...props,
			}),
	);

	Component.displayName = toPascalCase(iconName);

	return Component;
};

export default createXaaIcon;
