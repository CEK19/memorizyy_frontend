import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";


export const roboto_mono = Roboto_Mono({
	subsets: ["vietnamese", "latin"],
	display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<React.Fragment>
			<NextUIProvider navigate={router.push}>
				<main
					className={roboto_mono.className}
					style={{
						letterSpacing: "0.0625 rem",
					}}
				>
					<Component {...pageProps} />
				</main>
			</NextUIProvider>
		</React.Fragment>
	);
}
