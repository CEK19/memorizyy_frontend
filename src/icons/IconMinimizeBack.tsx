import React, { useMemo } from "react";

type Props = {
	size: "xs" | "sm" | "md" | "lg" | "xl";
};

const IconMinimizeBack = ({ size }: Props) => {
	const widthHeight = useMemo(() => {
		switch (size) {
			case "xs":
				return 4;
			case "sm":
				return 5;
			case "md":
				return 6;
			case "lg":
				return 7;
			case "xl":
				return 8;
			default:
				return 6;
		}
	}, [size]);

	return (
		<React.Fragment>
			<div
				className={`flex flex-row justify-center items-center w-${widthHeight} h-${widthHeight}`}
			>
				<svg
					fill="none"
					stroke="currentColor"
					strokeWidth={1.5}
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
					/>
				</svg>
			</div>
		</React.Fragment>
	);
};

export default IconMinimizeBack;
