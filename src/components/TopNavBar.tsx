import React from "react";
import Divider from "./Divider";

type Props = {};

const TopNavBar = (props: Props) => {
	return (
		<React.Fragment>
			<div className="top-nav-bar-info w-full flex flex-row p-2 bg-slate-50 justify-between">
				<div className="path-to-folder flex flex-row text-xs">
					Link 1/ Link 2/ Link 3
				</div>
				<div className="setting-features flex flex-row text-xs">
					<div>Setting 1</div>
					<Divider type="vertical" className="bg-gray-900 mx-1" />
					<div>Setting 2</div>
					<Divider type="vertical" className="bg-gray-900 mx-1" />
					<div>Setting 3</div>
					<Divider type="vertical" className="bg-gray-900 mx-1" />
				</div>
			</div>
		</React.Fragment>
	);
};

export default TopNavBar;
