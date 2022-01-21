import React from "react";
import { Container } from "@mui/material";
import Navbar from "../Navbar";
import Footer from "../Footer"

interface AppLayoutProps {
	children: React.ReactNode
}
// eslint-disable-next-line react/display-name
export const AppLayout = React.memo(({ children } : AppLayoutProps) => {
	return (
		<div>
			<Navbar />
			<Container sx={{height: '95vh', marginBottom: '5px'}}>
				{children}
			</Container>
			<Footer></Footer>
		</div>
	);
});
