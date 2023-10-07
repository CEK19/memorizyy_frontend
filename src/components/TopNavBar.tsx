import React from "react";
import Divider from "./Divider";

type Props = {};

const TopNavBar = (props: Props) => {
	return (
		<React.Fragment>
			<div className="top-nav-bar-info w-full flex flex-row py-2 px-4 bg-gray-50 justify-between border-b border-gray-200">
				<div className="path-to-folder flex flex-row text-xs">
					Link 1/ Link 2/ Link 3
				</div>
				<div className="setting-features flex flex-row text-xs space-x-2">
					<div>Setting 1</div>
					<Divider type="vertical" className="border-slate-900" />
					<div>Setting 2</div>
					<Divider type="vertical" className="border-slate-900" />
					<div>Setting 3</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default TopNavBar;
