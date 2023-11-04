import React from "react";

type Props = {
	className?: string;
	children: React.ReactNode;
};

const SelectedLineOnMenu = ({ children, className }: Props) => {
	return (
		<React.Fragment>
			<div
				className={`selected-line-left-menu flex flex-row justify-center items-center p-2 hover:bg-slate-200 hover:cursor-pointer ${className}`}
			>
				{children}
			</div>
		</React.Fragment>
	);
};

export default SelectedLineOnMenu;
