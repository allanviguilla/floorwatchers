import React from "react";
import { Container } from "@mui/material";
import Navbar from "../Navbar";
import Footer from "../../views/footer"

export const AppLayout = React.memo(({ children }) => {
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
