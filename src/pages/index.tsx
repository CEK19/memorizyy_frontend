import React from "react";
import { PagePaths } from "@/common/const/pagePaths";
import { useRouter } from "next/router";
import { Button } from "@nextui-org/button";

type Props = {};

const MainPage = (props: Props) => {
	const hasLogin = true;
	const router = useRouter();

	return (
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
			<h1>this is welcome screen</h1>

			<br />

			<p>for showing what is this app</p>
			

			<br />

			<Button onClick={() => {router.push(PagePaths.noteScreen)}}>Jump to Note</Button>
		</div>
	)
};

export default MainPage;
