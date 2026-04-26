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
	ArrowUpIcon,
	CheckCirclFillIcon,
	ChevronDownIcon,
	CopyIcon,
	CrossIcon,
	DeltaIcon,
	MessageIcon,
	MoreHorizontalIcon,
	PaperclipIcon,
	PenIcon,
	PlusIcon,
	RedoIcon,
	SidebarLeftIcon,
	Sparkles1Icon,
	StopIcon,
	SummarizeIcon,
	ThumbDownIcon,
	ThumbUpIcon,
	UndoIcon,
} from '#/components/icons.tsx';

export const Route = createFileRoute('/icons')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col gap-4 p-8">
			<h2>Comparison: Left = Original, Right = Xaa</h2>

			<div className="flex items-center gap-8 border-b py-2">
				<ArrowUpIcon size={24} />
				<XaaArrowUp />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<StopIcon size={24} />
				<XaaStop />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<PaperclipIcon size={24} />
				<XaaPaperclip />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<MoreHorizontalIcon size={24} />
				<XaaMoreHorizontal />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<MessageIcon size={24} />
				<XaaMessage />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<CrossIcon size={24} />
				<XaaCross />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<UndoIcon size={24} />
				<XaaUndo />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<RedoIcon size={24} />
				<XaaRedo />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<DeltaIcon size={24} />
				<XaaDelta />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<PenIcon size={24} />
				<XaaPen />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<SummarizeIcon size={24} />
				<XaaSummarize />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<SidebarLeftIcon size={24} />
				<XaaSidebarLeft />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<PlusIcon size={24} />
				<XaaPlus />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<CopyIcon size={24} />
				<XaaCopy />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<ThumbUpIcon size={24} />
				<XaaThumbUp />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<ThumbDownIcon size={24} />
				<XaaThumbDown />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<ChevronDownIcon size={24} />
				<XaaChevronDown />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<Sparkles1Icon size={24} />
				<XaaSparkles1 />
			</div>
			<div className="flex items-center gap-8 border-b py-2">
				<CheckCirclFillIcon size={24} />
				<XaaCheckCircleFill />
			</div>
		</div>
	);
}
