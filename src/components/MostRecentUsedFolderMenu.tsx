import React from "react";
import SelectedLineOnMenu from "./SelectedLineOnMenu";

type Props = {};

const MostRecentUsedFolderMenu = (props: Props) => {
	return (
		<React.Fragment>
			<div className="most-recent-used-folder-menu w-full">
				<SelectedLineOnMenu>
					<div className="w-full h-full flex flex-row">
						<div className="text-slate-800 text-xs">
							My folders 1
						</div>
					</div>
				</SelectedLineOnMenu>
				<SelectedLineOnMenu>
					<div className="w-full h-full flex flex-row">
						<div className="text-slate-800 text-xs">
							My folders 2
						</div>
					</div>
				</SelectedLineOnMenu>
			</div>
		</React.Fragment>
	);
};

export default MostRecentUsedFolderMenu;
