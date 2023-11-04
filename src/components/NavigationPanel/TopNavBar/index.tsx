import React from "react";
import Divider from "../../Divider";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import IconStar from "@/icons/IconStar";
import IconClock from "@/icons/IconClock";
import IconThreeDot from "@/icons/IconThreeDot";

type Props = {};

const TopNavBar = (props: Props) => {
	return (
		<React.Fragment>
			<div className="top-nav-bar-info w-full flex flex-row py-2 px-4 bg-gray-50 justify-between border-b border-gray-200">
				<Breadcrumbs>
					<BreadcrumbItem>Home</BreadcrumbItem>
					<BreadcrumbItem>Music</BreadcrumbItem>
					<BreadcrumbItem>Artist</BreadcrumbItem>
				</Breadcrumbs>


				<div className="setting-features flex flex-row text-xs space-x-2 items-center gap-2">
					<IconClock className="w-4 h-4" />
					<IconStar className="w-4 h-4" />
					<IconThreeDot className="w-4 h-4" />
				</div>
			</div>
		</React.Fragment>
	);
};

export default TopNavBar;
