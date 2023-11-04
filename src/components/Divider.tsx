
import classNames from "classnames";
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
					<div className={classNames("divider w-full border-y-[1px] border-gray-200", className)} />
				);

			case "vertical":
				return (
					<div className={classNames("divider h-full border-x-[1px] border-gray-200", className)} />
				);
		}
	}, [type, className]);

	return <React.Fragment>{dividerComponent}</React.Fragment>;
}

export default Divider;
