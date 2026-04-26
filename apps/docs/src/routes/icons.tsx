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
} from '@xaa/icon-react';
import {
	CheckCirclFillIcon,
	DeltaIcon,
	PenIcon,
	SidebarLeftIcon,
} from '#/components/icons.tsx';

export const Route = createFileRoute('/icons')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col gap-4 p-8">
			<h2>Comparison: Left = Original, Right = Xaa</h2>

			<div className="flex items-center gap-8 border-b py-2">
				<DeltaIcon size={24} />
				<XaaDelta />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<PenIcon size={24} />
				<XaaPen />
			</div>

			<div className="flex items-center gap-8 border-b py-2">
				<SidebarLeftIcon size={24} />
				<XaaSidebarLeft />
			</div>

			<div className="flex items-center gap-8 border-b py-2">
				<CheckCirclFillIcon size={24} />
				<XaaCheckCircleFill />
			</div>
		</div>
	);
}
