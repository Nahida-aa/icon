import { IconLayoutBottombarFilled } from '@tabler/icons-react';
import { createFileRoute } from '@tanstack/react-router';
import {
	DocumentTextIcon,
	LayoutBottomBarFilledIcon,
	LayoutBottomBarIcon,
	MixIcon,
	UserGroupIcon,
	XaaSparkles,
} from '@xaa/icon-react';
import { SparkleIcon, SparklesIcon } from 'lucide-react';
export const Route = createFileRoute('/icons')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			Hello "/icons"!
			<LayoutBottomBarFilledIcon />
			<LayoutBottomBarIcon />
			<UserGroupIcon />
			<SparkleIcon />
			<SparklesIcon />
			<XaaSparkles />
			<MixIcon />
			<DocumentTextIcon />
		</div>
	);
}
