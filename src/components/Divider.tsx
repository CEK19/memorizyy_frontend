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
							"divider w-full border-y-[1px] border-gray-200" +
							className +
							" "
						}
					></div>
				);

			case "vertical":
				return (
					<div
						className={
							"divider h-full border-x-[1px] border-gray-200" +
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
