import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, Paper } from "@mui/material";
const socDraw = new URL(
	'../../assets/UTIL SOCIETY.png',
	import.meta.url
);
export default function Playbook() {
	return (
		<Grid
			id="playbook"
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			marginTop={'100px'}
		>
			<Grid item xs={12} sx={{marginBottom:'50px'}}>
				<Typography variant="h2" align="center">Season 1 Playbook</Typography>
			</Grid>
		<Grid container>
			<Grid item xs={6}>
				<Paper elevation={3} sx={{padding: '20px', maxWidth:'350px'}}>
					<Typography>
						<img src={socDraw.href}></img>
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={6}>
				<Typography variant="h6" align="center">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</Typography>
			</Grid>
		</Grid>
			{/* <Grid item xs={8} sx={{marginTop:'20px'}}>
				<Typography variant="h6" align="center">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</Typography>
			</Grid>
			<Grid container justifyContent={'center'} sx={{marginTop:'20px'}}>
				<Grid item>
					<Button variant="contained" size="large">Mint</Button>
				</Grid>
			</Grid> */}
		</Grid>
	)
}