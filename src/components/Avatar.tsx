import Image from "next/image";
import React from "react";

type Props = {};

const Avatar = (props: Props) => {
	return (
		<React.Fragment>
			<Image
				src={""}
				alt="user-avatar"
				className="rounded-full w-4 h-4 bg-slate-200"
			/>
		</React.Fragment>
	);
};

export default Avatar;
