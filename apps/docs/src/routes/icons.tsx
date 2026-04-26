import { createFileRoute } from '@tanstack/react-router';
import {
	XaaAnthropic,
	XaaArrowUp,
	XaaAttachment,
	XaaBot,
	XaaBox,
	XaaCheckCircleFill,
	XaaCheckedSquare,
	XaaChevronDown,
	XaaCopy,
	XaaCross,
	XaaDelta,
	XaaFile,
	XaaFile as XaaFileIcon,
	XaaGithub,
	XaaGoogle,
	XaaGps,
	XaaHome,
	XaaInfo,
	XaaInvoice,
	XaaLoader,
	XaaMenu,
	XaaMessage,
	XaaMix,
	XaaMore,
	XaaMoreHorizontal,
	XaaOpenai,
	XaaPaperclip,
	XaaPen,
	XaaPencilEdit,
	XaaPlus,
	XaaRedo,
	XaaRoute,
	XaaShieldLock,
	XaaSidebarLeft,
	XaaSparkles,
	XaaSparkles1,
	XaaStop,
	XaaSummarize,
	XaaThumbDown,
	XaaThumbUp,
	XaaTrash,
	XaaUncheckedSquare,
	XaaUndo,
	XaaUpload,
	XaaUser,
	XaaVercel,
	XaaWakatime,
} from '@xaa/icon-react';
import { CheckCircleFillIcon } from '#/components/icons.tsx';

export const Route = createFileRoute('/icons')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col gap-4 p-8">
			<h2>Comparison: Left = Original, Right = Xaa</h2>
			<XaaGithub />
			<XaaWakatime />
			<XaaCheckCircleFill />
			<CheckCircleFillIcon />
			<XaaCheckedSquare />
			<XaaSparkles />
			<XaaSparkles1 />
			<XaaGoogle />
		</div>
	);
}
