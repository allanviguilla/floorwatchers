import React from "react";
import { Grid, Typography } from "@mui/material";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Home() {
	return (
		<Grid
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			sx={{paddingTop: '20%'}}
			
		>
			{/* <Grid item xs={12}>
				<img src="./images/Twitter_PFP.png"></img>
			</Grid> */}
			<Grid item xs={12}>
				<Typography 
				variant="h3" 
				align="center" 
				gutterBottom={true}
				>
					Floor Watchers Society</Typography>
				<Typography 
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
				</Typography>
			</Grid>
		</Grid>
	);
};
