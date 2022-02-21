import React from "react";
import { Container, createTheme } from "@mui/material";
import Navbar from "../Navbar";
import Footer from "../Footer"
import { ThemeProvider } from "@mui/styles";

interface AppLayoutProps {
	children: React.ReactNode
}
// eslint-disable-next-line react/display-name
export const AppLayout = React.memo(({ children }: AppLayoutProps) => {
	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 900,
				lg: 1200,
				xl: 1536,
			},
		},
	});
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Navbar />
				<Container>
					{children}
				</Container>
				<Footer></Footer>
			</ThemeProvider>

		</div>
	);
});
