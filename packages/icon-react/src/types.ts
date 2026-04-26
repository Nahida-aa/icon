import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

/**
 * A reduced version of `SVGElementType` from @types/react. This type was added
 * with the release of React 19, and is included here in order to support usage
 * with older versions.
 */
type SVGElementType =
	| 'circle'
	| 'ellipse'
	| 'g'
	| 'line'
	| 'path'
	| 'polygon'
	| 'polyline'
	| 'rect';

export type IconNode = [
	elementName: SVGElementType,
	attrs: Record<string, string>,
][];

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ElementAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

export interface XaaProps extends ElementAttributes {
	size?: string | number;
	absoluteStrokeWidth?: boolean;
}

export type XaaIcon = ForwardRefExoticComponent<
	Omit<XaaProps, 'ref'> & RefAttributes<SVGSVGElement>
>;
