import { createFileRoute } from '@tanstack/react-router';
import {
	LayoutBottomBarFilledIcon,
	LayoutBottomBarIcon,
} from '@xaa/icon-react/src/aliases/suffixed';

export const Route = createFileRoute('/icons')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			Hello "/icons"!
			<LayoutBottomBarFilledIcon />
			<LayoutBottomBarIcon />
		</div>
	);
}
