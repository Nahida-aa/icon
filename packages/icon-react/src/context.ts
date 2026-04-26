'use client';

import {
	createContext,
	createElement,
	type ReactNode,
	useContext,
	useMemo,
} from 'react';
import type { XaaProps } from './types';

type XaaConfig = {
	size: number;
	color: string;
	strokeWidth: number;
	absoluteStrokeWidth: boolean;
	className: string;
};

const XaaContext = createContext<XaaProps>({});

type XaaProviderProps = {
	children: ReactNode;
} & Partial<XaaConfig>;

export function XaaProvider({
	children,
	size,
	color,
	strokeWidth,
	absoluteStrokeWidth,
	className,
}: XaaProviderProps) {
	const value = useMemo(
		() => ({
			size,
			color,
			strokeWidth,
			absoluteStrokeWidth,
			className,
		}),
		[size, color, strokeWidth, absoluteStrokeWidth, className],
	);

	return createElement(XaaContext.Provider, { value }, children);
}

export const useXaaContext = () => useContext(XaaContext);
