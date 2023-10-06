import React from "react";

type Props = {};

const TopNavBar = (props: Props) => {
	return (
		<React.Fragment>
			<div className="top-nav-bar w-full p-2 bg-slate-50">
				<div className="flex flex-row">Learning path</div>
			</div>
		</React.Fragment>
	);
};

export default TopNavBar;
