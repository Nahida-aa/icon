// import { icons, XaaUserGroup } from '@xaa/icon-astro';
import { icons, XaaUserGroup } from '@xaa/icon-solid';

function IconGrid() {
	return (
		<div class="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-2 w-full">
			{Object.values(icons)
				.sort((a, b) => (a.name || '').localeCompare(b.name))
				.map((Icon) => (
					<Icon size={24} class="not-content" />
				))}
		</div>
	);
}
