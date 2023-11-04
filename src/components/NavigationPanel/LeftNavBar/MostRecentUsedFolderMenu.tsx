import React from "react";
import IconFolder from "@/icons/IconFolder";
import IconLearn from "@/icons/IconLearn";
import IconWorld from "@/icons/IconWorld";


interface IRecentVisited {
	key: string;
	text: string;
	leftIcon?: React.ReactNode;
	description?: string;
}

export const RecentVisited: IRecentVisited[] = [
	{
		key: 'folder-0001',
		text: "Vocation",
		leftIcon: <IconWorld />,
	},
	{
		key: 'folder-0002',
		text: "University Thesis",
		leftIcon: <IconLearn />,
	},
	{
		key: 'folder-0003',
		text: "Study",
		leftIcon: <IconFolder />,
	},
]