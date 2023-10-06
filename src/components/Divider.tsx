import React from "react";

type Props = {};

function Divider({}: Props) {
	return (
		<React.Fragment>
			<div className="divider w-full h-[1px] bg-slate-300"></div>
		</React.Fragment>
	);
}

export default Divider;
