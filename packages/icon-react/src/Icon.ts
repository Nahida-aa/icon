'use client';

import type { XaaIconDefaultHtmlProps } from '@xaa/build-icons/types';
import { hasA11yProp } from '@xaa/build-icons/utils/hasA11yProp';
import { mergeClasses } from '@xaa/build-icons/utils/mergeClasses';
import { createElement, forwardRef } from 'react';
import { useXaaContext } from './context';
import defaultAttributes from './defaultAttributes';
import type { IconNode, XaaIconDefaultProps, XaaProps } from './types';

interface IconComponentProps extends XaaProps {
	iconNode: IconNode;
	iconDefaults?: XaaIconDefaultHtmlProps;
}
const htmlPropsToReactProps = (
	htmlProps?: XaaIconDefaultHtmlProps,
): XaaIconDefaultProps => ({
	xmlns: htmlProps?.xmlns ?? defaultAttributes.xmlns,
	width: htmlProps?.width ?? defaultAttributes.width,
	height: htmlProps?.height ?? defaultAttributes.height,
	viewBox: htmlProps?.viewBox ?? defaultAttributes.viewBox,
	fill: htmlProps?.fill,
	stroke: htmlProps?.stroke,
	strokeWidth: htmlProps?.['stroke-width']
		? Number(htmlProps?.['stroke-width'])
		: undefined,
	strokeLinecap:
		(htmlProps?.['stroke-linecap'] as XaaIconDefaultProps['strokeLinecap']) ??
		defaultAttributes.strokeLinecap,
	strokeLinejoin:
		(htmlProps?.['stroke-linejoin'] as XaaIconDefaultProps['strokeLinejoin']),
});

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
			strokeWidth: contextStrokeWidth,
			absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
			color: contextColor,
			className: contextClass = '',
		} = useXaaContext() ?? {};

		const calculatedStrokeWidth =
			(absoluteStrokeWidth ?? contextAbsoluteStrokeWidth)
				? (Number(strokeWidth ?? contextStrokeWidth) * 24) /
					Number(size ?? contextSize)
				: (strokeWidth ?? contextStrokeWidth);
		const defaults = htmlPropsToReactProps(iconDefaults);
		return createElement(
			'svg',
			{
				ref,
				...defaults,
				width: size ?? contextSize ?? defaults.width,
				height: size ?? contextSize ?? defaults.height,
				stroke: color ?? contextColor ?? defaults.stroke,
				strokeWidth: calculatedStrokeWidth ?? defaults.strokeWidth,
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
