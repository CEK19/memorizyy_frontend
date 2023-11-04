import React from "react";
import Avatar from "@/components/Avatar";
import IconMinimizeBack from "@/icons/IconMinimizeBack";
import SelectedLineOnMenu from "./SelectedLineOnMenu";
import IconArrowUpDown from "@/icons/IconArrowUpDown";

interface IPanelUserInfo {
	imgUrl: string;
	name: string;
}

const PanelUserInfo = (props: IPanelUserInfo) => {	

	return (
		<React.Fragment>
			<div className="panel-user-info">
				<SelectedLineOnMenu>
					<div className="panel-user-info w-full h-full flex flex-row items-center">
						<Avatar src={props.imgUrl} className="w-5 h-5" name={props.name} />

						<p className="pl-2 pr-1 text-slate-800 text-xs">
							{props.name}
						</p>

						<IconArrowUpDown className="w-4 h-4" />

						<div className="pl-3 flex flex-row flex-1 justify-end">
							<IconMinimizeBack size="xs" />
						</div>
					</div>
				</SelectedLineOnMenu>
			</div>
		</React.Fragment>
	);
};

export default PanelUserInfo;
