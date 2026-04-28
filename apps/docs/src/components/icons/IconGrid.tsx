// import { icons, XaaUserGroup } from '@xaa/icon-astro';
// import { icons, XaaUserGroup } from '@xaa/icon-solid';

import { icons, XaaAArrowDown } from '@xaa/icon-solid';
import { AArrowDown } from 'lucide-solid';
import { Button } from '#/components/ui/button.tsx';

export function IconGrid() {
	// 复制 text 到剪贴板
	const copyToClipboard = (text: string) => {
		console.log(`Copying "${text}" to clipboard...`);
		navigator.clipboard.writeText(text);
	};
	return (
		<div class="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-2 w-full">
			{Object.values(icons)
				.sort((a, b) => a.name.localeCompare(b.name))
				.map((Icon) => (
					<Button
						class="size-14 m-0!"
						variant="secondary"
						onclick={() => copyToClipboard(Icon.name)}
					>
						<Icon size={24} class="m-auto!" />
					</Button>
				))}
		</div>
	);
}
