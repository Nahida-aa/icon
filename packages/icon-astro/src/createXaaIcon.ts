import {
	createComponent,
	render,
	renderComponent,
	renderSlot,
} from 'astro/compiler-runtime';
import type { AstroComponentFactory } from 'astro/runtime/server/render/astro/factory.js';
import Icon from './Icon.astro';
import type { IconNode, SVGAttributes } from './types';
import { mergeClasses } from './utils/mergeClasses';
import { toKebabCase } from './utils/toKebabCase';

export default (
	iconName: string,
	iconNode: IconNode,
	iconDefaults?: SVGAttributes,
): AstroComponentFactory => {
	const Component = createComponent(
		($$result, $$props: Record<string, any>, $$slots) => {
			const { class: className, ...restProps } = $$props;
			return render`${renderComponent(
				$$result,
				'Icon',
				Icon,
				{
					class: mergeClasses(
						Boolean(iconName) && `lucide-${toKebabCase(iconName)}`,
						Boolean(className) && className,
					),
					iconNode,
					...iconDefaults,
					...restProps,
				},
				{ default: () => render`${renderSlot($$result, $$slots['default'])}` },
			)}`;
		},
		undefined,
		'none',
	);
	return Component;
};
