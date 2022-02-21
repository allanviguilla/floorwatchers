import React from 'react'
import { Typography, Grid } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (<div>
		{/* <Grid container justifyContent="center">
			<Grid item>
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
					}}
				>
					<FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
				</a>
			</Grid>
		</Grid> */}
		<Grid container justifyContent="center" >
			<Grid item>
				<Typography>Copyright © 2022 Floor Watchers Society</Typography>
			</Grid>
		</Grid>

	</div>)
}