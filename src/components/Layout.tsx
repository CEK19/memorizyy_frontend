import React, { useEffect, useMemo, useState } from "react";
import { Resizable } from "re-resizable";

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
			<div className="h-screen w-screen flex flex-row">
				<Resizable
					className="h-screen w-10"
					enable={enableResizeConfig}
				>
					<div className="w-full h-full bg-red-600">Content</div>
				</Resizable>
				<div className="flex-1 resize-x bg-red-200">{children}</div>
			</div>
		</React.Fragment>
	);
};

export default Layout;
