import { Resizable } from "re-resizable";
import React, { useEffect, useRef } from "react";
import Divider from "./Divider";
import DocumentMenu from "./DocumentMenu";
import FlashcardDocumentMenu from "./FlashcardDocumentMenu";
import MostRecentUsedFolderMenu from "./MostRecentUsedFolderMenu";
import PanelUserInfo from "./PanelUserInfo";
import TopNavBar from "./TopNavBar";
import VerticalSpacing from "./VerticalSpacing";
import LeftNavBar from "./LeftNavBar";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<React.Fragment>
			<div className="layout h-screen w-screen flex flex-row">
				<LeftNavBar />
				<div className="flex-1">
					<TopNavBar />
					{children}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Layout;
