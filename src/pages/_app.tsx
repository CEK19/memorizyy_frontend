import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";
import React from "react";

export const roboto_mono = Roboto_Mono({
	subsets: ["latin"],
	display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<main className={roboto_mono.className}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</main>
		</React.Fragment>
	);
}
