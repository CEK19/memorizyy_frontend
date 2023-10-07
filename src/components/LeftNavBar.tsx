import React from "react";
import PanelUserInfo from "./PanelUserInfo";
import { Resizable } from "re-resizable";

import DocumentMenu from "./DocumentMenu";
import MostRecentUsedFolderMenu from "./MostRecentUsedFolderMenu";
import FlashcardDocumentMenu from "./FlashcardDocumentMenu";
import Divider from "./Divider";
import VerticalSpacing from "./VerticalSpacing";

type Props = {};

function LeftNavBar({}: Props) {
	const enableResizeConfig = {
		top: false,
		right: true,
		bottom: false,
		left: false,
		topRight: false,
		bottomRight: false,
		bottomLeft: false,
		topLeft: false,
	};
	return (
		<React.Fragment>
			<Resizable
				enable={enableResizeConfig}
				className="min-w-fit max-w-xs"
			>
				<div className="left-bar-all-info w-full h-full min-w-fit bg-gray-50 border-r border-gray-200">
					<PanelUserInfo />
					<Divider />
					<VerticalSpacing />

					<DocumentMenu />
					<Divider />
					<VerticalSpacing />

					<MostRecentUsedFolderMenu />
					<Divider />
					<VerticalSpacing />

					<FlashcardDocumentMenu />
				</div>
			</Resizable>
		</React.Fragment>
	);
}

export default LeftNavBar;
