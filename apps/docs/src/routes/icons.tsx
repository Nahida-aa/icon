import { MixIcon } from '@radix-ui/react-icons';
import { IconLayoutBottombarFilled } from '@tabler/icons-react';
import { createFileRoute } from '@tanstack/react-router';
import {
	DocumentTextIcon,
	LayoutBottomBarFilledIcon,
	LayoutBottomBarIcon,
	UserGroupIcon,
	XaaBot,
	XaaBox,
	XaaGithub,
	XaaHome,
	XaaMix,
	XaaShieldLock,
	XaaSparkles,
	XaaSparkles1,
	XaaUser,
	XaaVercel,
} from '@xaa/icon-react';
import Vercel from '@xaa/icon-react/src/icons/vercel';
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
			<XaaSparkles1 />
			<XaaMix />
			<DocumentTextIcon />
			<XaaGithub />
			<XaaVercel />
			<XaaBox />
			<XaaHome />
			<XaaShieldLock />
			<XaaBot />
			<XaaUser />
		</div>
	);
}
