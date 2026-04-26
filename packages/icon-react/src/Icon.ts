'use client';

import { hasA11yProp } from '@xaa/build-icons/utils/hasA11yProp';
import { mergeClasses } from '@xaa/build-icons/utils/mergeClasses';
import { createElement, forwardRef } from 'react';
import { useXaaContext } from './context';
import defaultAttributes from './defaultAttributes';
import type { IconNode,  XaaProps } from './types';

interface IconComponentProps extends XaaProps {
	iconNode: IconNode;
}

/**
 * Xaa icon component
 *
 * @component Icon
 * @param {object} props
 * @param {string} props.color - The color of the icon
 * @param {number} props.size - The size of the icon
 * @param {number} props.strokeWidth - The stroke width of the icon
 * @param {boolean} props.absoluteStrokeWidth - Whether to use absolute stroke width
 * @param {string} props.className - The class name of the icon
 * @param {IconNode} props.children - The children of the icon
 * @param {IconNode} props.iconNode - The icon node of the icon
 *
 * @returns {ForwardRefExoticComponent} XaaIcon
 */
const Icon = forwardRef<SVGSVGElement, IconComponentProps>(
	(
		{
			color,
			size,
			strokeWidth,
			absoluteStrokeWidth,
			className = '',
			children,
			iconNode,
			...rest
		},
		ref,
	) => {
		const {
			size: contextSize = 24,
			strokeWidth: contextStrokeWidth = 2,
			absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
			color: contextColor,
			className: contextClass = '',
		} = useXaaContext() ?? {};

		const calculatedStrokeWidth =
      absoluteStrokeWidth ?? contextAbsoluteStrokeWidth
        ? (Number(strokeWidth ?? contextStrokeWidth) * 24) / Number(size ?? contextSize)
        : strokeWidth ?? contextStrokeWidth;

    return createElement(
      'svg',
      {
        ref,
        ...defaultAttributes,
        width: size ?? contextSize ?? defaultAttributes.width,
        height: size ?? contextSize ?? defaultAttributes.height,
        stroke: color ?? contextColor,
        strokeWidth: calculatedStrokeWidth,
        className: mergeClasses('lucide', contextClass, className),
        ...(!children && !hasA11yProp(rest) && { 'aria-hidden': 'true' }),
        ...rest,
      },
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...(Array.isArray(children) ? children : [children]),
      ],
    );
	},
);

export default Icon;
