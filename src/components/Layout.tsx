import React, { useEffect, useMemo, useState } from "react";
import { Resizable } from "re-resizable";
import Avatar from "./Avatar";
import IconMinimizeBack from "@/icons/IconMinimizeBack";
import PanelUserInfo from "./PanelUserInfo";
import VerticalSpacing from "./VerticalSpacing";
import DocumentMenu from "./DocumentMenu";

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
			<div className="general-layout h-screen w-screen flex flex-row">
				<Resizable enable={enableResizeConfig}>
					<div className="left-bar-all-info w-full h-full min-w-fit bg-gray-100">
						<PanelUserInfo />
						<VerticalSpacing />
						<DocumentMenu />
					</div>
				</Resizable>
				<div className="flex-1">{children}</div>
			</div>
		</React.Fragment>
	);
};

export default Layout;
