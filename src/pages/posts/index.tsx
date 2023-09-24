import Navbar from "@/components/Navbar";
import PostEditor from "@/components/PostEditor";
import React from "react";

const Page = () => {
	return (
		<React.Fragment>
			<Navbar/>
			<PostEditor />
		</React.Fragment>
	);
};

export default Page;
