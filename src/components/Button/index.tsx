import React from "react";

type Props = {
	content: React.ReactNode;
	type: "nav";
};

const Button = (props: Props) => {
	return (
		<React.Fragment>
			<a
				className="h-9 text-gray-2 py-2 px-4 rounded-md hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
				href="#"
			>
				{props.content}
			</a>
		</React.Fragment>
	);
};

export default Button;
