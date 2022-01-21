import React, { useLayoutEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, Box, MenuItem, Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Hero(){
	return(
		<Grid
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			sx={{paddingTop: '5%'}}
			
		>
			<Grid item xs={12}>
				<Typography 
				variant="h3" 
				align="center" 
				gutterBottom={true}
				>
					Floor Watchers Society</Typography>
				{/* <Typography 
				variant="h5" 
				align="center" 
				gutterBottom={true}
				>
					Connect with us while we're building:</Typography>
				<Typography align="center">
				<a href="https://discord.gg/WVs3wbRvch"
					style={{
						color: "black",
						fontFamily: "Montserrat",
						fontWeight: "600",
						fontSize: "34px",
						textAlign: "center",
						textDecoration: "none",
						lineHeight: "41px",
						cursor: "pointer",
						marginRight: "30px"
					}}
				>
					<FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
				</a>
				<a href="https://twitter.com/FloorWatchers"
					style={{
						color: "black",
						fontFamily: "Montserrat",
						fontWeight: "600",
						fontSize: "34px",
						textAlign: "center",
						textDecoration: "none",
						lineHeight: "41px",
						cursor: "pointer",
					}}
				>
					<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
				</a>
				</Typography> */}
			</Grid>
			<Grid container justifyContent={'center'}> 
			<Grid item xs={8}>
				<Typography align="center">
				Floor Watchers Society provides 3333 members real-life utility with exclusive access to once in a lifetime luxury experiences at community and token holder chosen sporting events.
				</Typography>
			</Grid>
			</Grid>
			
		</Grid>
	)
}