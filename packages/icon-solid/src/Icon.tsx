import { hasA11yProp } from '@xaa/build-icons/utils/hasA11yProp';
import { mergeClasses } from '@xaa/build-icons/utils/mergeClasses';
import { toKebabCase } from '@xaa/build-icons/utils/toKebabCase';
import { toPascalCase } from '@xaa/build-icons/utils/toPascalCase';
import { For, splitProps, useContext } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { LucideContext } from './context';
import type { IconNode, LucideProps } from './types';

interface IconProps {
	name?: string;
	iconNode: IconNode;
}

const Icon = (props: LucideProps & IconProps) => {
	const [localProps, rest] = splitProps(props, [
		'color',
		'size',
		'strokeWidth',
		'children',
		'class',
		'name',
		'iconNode',
		'absoluteStrokeWidth',
	]);

	const globalProps = useContext(LucideContext);

	return (
		<svg
			width={localProps.size ?? globalProps.size}
			height={localProps.size ?? globalProps.size}
			stroke={localProps.color ?? globalProps.color}
			stroke-width={
				(localProps.absoluteStrokeWidth ?? globalProps.absoluteStrokeWidth) ===
				true
					? (Number(localProps.strokeWidth ?? globalProps.strokeWidth) * 24) /
						Number(localProps.size ?? globalProps.size)
					: Number(localProps.strokeWidth ?? globalProps.strokeWidth)
			}
			class={mergeClasses(
				'lucide',
				'lucide-icon',
				globalProps.class,
				...(localProps.name != null
					? [
							`lucide-${toKebabCase(toPascalCase(localProps.name))}`,
							`lucide-${toKebabCase(localProps.name)}`,
						]
					: []),
				localProps.class,
			)}
			aria-hidden={
				!localProps.children && !hasA11yProp(rest) ? 'true' : undefined
			}
			{...rest}
		>
			<For each={localProps.iconNode}>
				{([elementName, attrs]) => {
					return <Dynamic component={elementName} {...attrs} />;
				}}
			</For>
		</svg>
	);
};

export default Icon;
