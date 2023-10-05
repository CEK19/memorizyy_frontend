import React, { useEffect, useMemo, useState } from "react";
import { Resizable } from "re-resizable";
import useWindowDimensions from "@/hooks/useWindowDimensions";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	const [isOnClient, setIsOnClient] = useState(false);
	const { width: widthScreen, height: heightScreen } = useWindowDimensions();
	const defaultSize = useMemo(
		() => ({ width: 120, height: heightScreen || 0 }),
		[heightScreen]
	);
	const enableResizeConfig = {
		top: false,
		right: true,
		bottom: false,
		left: false,
		topRight: false,
		bottomRight: false,
		bottomLeft: false,
		topLeft: false,
	};

	useEffect(() => {
		setIsOnClient(true);
	}, []);

	return (
		<React.Fragment>
			{isOnClient && (
				<div className="flex flex-row">
					<Resizable
						defaultSize={defaultSize}
						enable={enableResizeConfig}
					>
						<div className="w-full h-full bg-red-600">Content</div>
					</Resizable>
					<div className="flex-1 resize-x bg-red-200">{children}</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default Layout;
