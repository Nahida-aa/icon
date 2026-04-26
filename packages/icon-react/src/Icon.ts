'use client';

import { hasA11yProp } from '@xaa/build-icons/utils/hasA11yProp';
import { mergeClasses } from '@xaa/build-icons/utils/mergeClasses';
import { createElement, forwardRef } from 'react';
import { useXaaContext } from './context';
import defaultAttributes from './defaultAttributes';
import type { IconNode, XaaProps, XaaIconDefaults } from './types';

interface IconComponentProps extends XaaProps {
	iconNode: IconNode;
	iconDefaults?: XaaIconDefaults;
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
			iconDefaults,
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

		// 图标自身默认值作为第三优先级
		const iconSize = iconDefaults?.size;
		const iconStrokeWidth = iconDefaults?.strokeWidth;
		const iconAbsoluteStrokeWidth = iconDefaults?.absoluteStrokeWidth;
		const iconColor = iconDefaults?.color;

		const calculatedStrokeWidth =
			(absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ?? iconAbsoluteStrokeWidth)
				? (Number(strokeWidth ?? contextStrokeWidth ?? iconStrokeWidth) * 24) /
					Number(size ?? contextSize ?? iconSize)
				: (strokeWidth ?? contextStrokeWidth ?? iconStrokeWidth);

		return createElement(
			'svg',
			{
				ref,
				width: size ?? contextSize ?? iconSize ?? defaultAttributes.width,
				height: size ?? contextSize ?? iconSize ?? defaultAttributes.height,
				stroke: color ?? contextColor ?? iconColor,
				strokeWidth: calculatedStrokeWidth,
				className: mergeClasses('xaa', contextClass, className),
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
