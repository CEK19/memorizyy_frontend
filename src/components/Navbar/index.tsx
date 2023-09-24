import React from "react";
import Button from "../Button";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<React.Fragment>
			<div className="navbar-container h-12 bg-white shadow-md flex flex-row justify-between items-center">
				<div className="navbar-logo font-bold text-2xl ml-4 text-gray-600">
					Memorizy
				</div>
				<div className="flex flex-row space-x-4 mr-4 font-bold text-gray-700">
					<Button type="nav" content="Create Question"/>
					<Button type="nav" content="Take note"/>
					<Button type="nav" content="Learn"/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
