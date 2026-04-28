import { createFileRoute } from '@tanstack/react-router';
import {
	XaaAArrowDown,
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
	XaaDocumentText,
	XaaFile,
	XaaFingerprint,
	XaaFingerprintPattern,
	XaaGithub,
	XaaGoogle,
	XaaGps,
	XaaHome,
	XaaInfo,
	XaaInvoice,
	XaaLayoutBottomBar,
	XaaLayoutBottomBarFilled,
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
	XaaUserGroup,
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
			<div className="grid gap-1">
				<XaaAArrowDown />
				<XaaDocumentText />
				<XaaFingerprint />
				<XaaFingerprintPattern />
				<XaaLayoutBottomBar />
				<XaaLayoutBottomBarFilled />
				<XaaUserGroup />
				<XaaGithub />
				<XaaWakatime />
				<XaaCheckCircleFill />
				<CheckCircleFillIcon />
				<XaaCheckedSquare />
				<XaaSparkles />
				<XaaSparkles1 />
				<XaaGoogle />
				<XaaFile />
				<XaaAnthropic />
				<XaaOpenai />
				<XaaPaperclip />
				<XaaPen />
				<XaaPencilEdit />
				<XaaPlus />
				<XaaRedo />
				<XaaUndo />
				<XaaRoute />
				<XaaShieldLock />
				<XaaSidebarLeft />
				<XaaStop />
				<XaaSummarize />
				<XaaThumbDown />
				<XaaThumbUp />
				<XaaTrash />
				<XaaUncheckedSquare />
				<XaaUpload />
				<XaaUser />
				<XaaVercel />
				<XaaArrowUp />
				<XaaAttachment />
				<XaaBot />
				<XaaBox />
				<XaaChevronDown />
				<XaaCopy />
				<XaaCross />
				<XaaDelta />
				<XaaHome />
				<XaaInfo />
				<XaaInvoice />
				<XaaLoader />
				<XaaMenu />
				<XaaMessage />
				<XaaMix />
				<XaaMore />
				<XaaMoreHorizontal />
				<XaaGps />
			</div>
		</div>
	);
}
