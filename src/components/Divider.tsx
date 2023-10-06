import React, { useMemo } from "react";

type Props = {
	type?: "horizontal" | "vertical";
	className?: string;
};

function Divider({ className = "", type = "horizontal" }: Props) {
	const dividerComponent = useMemo(() => {
		switch (type) {
			case "horizontal":
				return (
					<div
						className={
							"divider w-[1px] bg-slate-300" + " " + className
						}
					></div>
				);

			case "vertical":
				return (
					<div
						className={
							"divider w-[1px] h-full bg-slate-300" +
							" " +
							className
						}
					></div>
				);
		}
	}, [type]);

	return <React.Fragment>{dividerComponent}</React.Fragment>;
}

export default Divider;
