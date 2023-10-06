import { Resizable } from "re-resizable";
import React from "react";
import Divider from "./Divider";
import DocumentMenu from "./DocumentMenu";
import FlashcardDocumentMenu from "./FlashcardDocumentMenu";
import MostRecentUsedFolderMenu from "./MostRecentUsedFolderMenu";
import PanelUserInfo from "./PanelUserInfo";
import TopNavBar from "./TopNavBar";
import VerticalSpacing from "./VerticalSpacing";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
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
			<div className="layout h-screen w-screen flex flex-row">
				<Resizable enable={enableResizeConfig}>
					<div className="left-bar-all-info w-full h-full min-w-fit bg-gray-100">
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
				<div className="flex-1">
					<TopNavBar />
					{children}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Layout;
