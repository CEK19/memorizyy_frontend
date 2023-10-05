import React, { useEffect, useMemo, useState } from "react";
import { Resizable } from "re-resizable";
import Avatar from "./Avatar";
import IconMinimizeBack from "@/icons/IconMinimizeBack";

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
				<Resizable className="h-screen" enable={enableResizeConfig}>
					<div className="w-36 h-full bg-gray-100">
						<div className="flex flex-row justify-items-start items-center gap-1 p-2">
							<Avatar />
							<div className="text-slate-800 text-xs">
								Trong Nhan
							</div>
							<div className="flex flex-row flex-1 justify-end">
								<IconMinimizeBack size="xs" />
							</div>
						</div>
					</div>
				</Resizable>
				<div className="flex-1">{children}</div>
			</div>
		</React.Fragment>
	);
};

export default Layout;
