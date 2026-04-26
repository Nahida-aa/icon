import { IconLayoutBottombarFilled } from '@tabler/icons-react';
import { createFileRoute } from '@tanstack/react-router';
import {
	LayoutBottomBarFilledIcon,
	LayoutBottomBarIcon,
	UserGroupIcon,
} from '@xaa/icon-react';
export const Route = createFileRoute('/icons')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			Hello "/icons"!
			<LayoutBottomBarFilledIcon />
			<IconLayoutBottombarFilled />
			<LayoutBottomBarIcon />
			<UserGroupIcon />
		</div>
	);
}
