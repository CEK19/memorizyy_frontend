import React from "react";
import Avatar from "./Avatar";
import IconMinimizeBack from "@/icons/IconMinimizeBack";
import SelectedLineOnMenu from "./SelectedLineOnMenu";

type Props = {};

const PanelUserInfo = (props: Props) => {
	return (
		<React.Fragment>
			<SelectedLineOnMenu>
				<div className="w-full h-full flex flex-row">
					<Avatar />
					<div className="text-slate-800 text-xs">Trong Nhan</div>
					<div className="pl-3 flex flex-row flex-1 justify-end">
						<IconMinimizeBack size="xs" />
					</div>
				</div>
			</SelectedLineOnMenu>
		</React.Fragment>
	);
};

export default PanelUserInfo;
