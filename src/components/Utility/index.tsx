import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material";

const utilDAO= new URL(
	'../../assets/UTIL DRAW.png',
	import.meta.url
);
const utilBrunch= new URL(
	'../../assets/UTIL BRUNCH.png',
	import.meta.url
);
const separator = new URL(
	'../../assets/separator.png',
	import.meta.url
);
const Title = styled(Typography)({
	fontFamily: 'Inter',
	fontSize: '66px',
	fontStyle: 'normal',
	fontWeight: '900',
	lineHeight: '80px',
	letterSpacing: '0em',
	textAlign: 'center',
	color: '#291381',

});
export default function Utility() {
	return (
		<Grid
			id="utility"
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'40'}
			marginTop={'50px'}
		>
			<Grid item xs={12} sm={6}>
				<Grid container>
					<Grid item xs={12} sx={{ marginBottom: '40px' }}>
						<Paper elevation={6} sx={{ padding: '5px',borderRadius:'20px' }}>
						<Grid
							container
							direction="row"
							justifyContent={'center'}
							alignItems='center'
							style={{ height: '266px' }}>
							<Typography>
								<img src={utilBrunch.href}></img>
							</Typography>
						</Grid>
						</Paper>
					</Grid>
					<Grid item xs={10}>
						<Typography variant="h6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} sm={6} sx={{marginBottom:'30px'}}>
				<Grid container>
					<Grid item xs={12} sx={{ marginBottom: '40px' }}>
						<Paper elevation={6} sx={{ padding: '5px', borderRadius:'20px' }}>
						<Grid
							container
							direction="row"
							justifyContent={'center'}
							alignItems='center'
							style={{ height: '266px' }}>
							<Typography>
								<img src={utilDAO.href}></img>
							</Typography>
						</Grid>
						</Paper>
					</Grid>
					<Grid item xs={10}>
						<Typography variant="h6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<hr></hr>
			</Grid>
		</Grid>
	)
}