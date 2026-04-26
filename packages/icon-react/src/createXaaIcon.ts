import {
	mergeClasses,
	toKebabCase,
	toPascalCase,
} from '@xaa/build-icons';
import { createElement, forwardRef } from 'react';
import Icon from './Icon';
import type { IconNode, XaaProps } from './types';

/**
 * Create a Xaa icon component
 * @param {string} iconName
 * @param {array} iconNode
 * @returns {ForwardRefExoticComponent} XaaIcon
 */
const createXaaIcon = (iconName: string, iconNode: IconNode) => {
	const Component = forwardRef<SVGSVGElement, XaaProps>(
		({ className, ...props }, ref) =>
			createElement(Icon, {
				ref,
				iconNode,
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
