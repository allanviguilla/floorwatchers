import React, { useLayoutEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import "./navbar.css";

function Navbar() {
	useLayoutEffect(() => {
		function updateSize() {
			if (window.innerWidth <= 600) {
				if (document.getElementsByClassName("wallet-adapter-button")[0])
					Array.from(document.getElementsByClassName('wallet-adapter-button') as HTMLCollectionOf<HTMLElement>)[0].style.marginRight = "20px";
			}
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return (
		// <Box sx={{ flexGrow: 1 }}>
		<AppBar position="static" className={'navbar-bg'}>
			<Toolbar
				sx={{
					marginTop: "0px",
					paddingLeft: "0!important",
				}}
			>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1 }}
					className="logo-container"
				>
				</Typography>
				<div className="navbar-column">
					<Toolbar>
						<Grid container justifyContent="center" spacing={10}>

						</Grid>
					</Toolbar>
				</div>
			</Toolbar>
		</AppBar>
		// </Box>
	);
}
export default Navbar;
