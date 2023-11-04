import React from "react";
import TopNavBar from "./NavigationPanel/TopNavBar";
import LeftNavBar from "./NavigationPanel/LeftNavBar";

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
