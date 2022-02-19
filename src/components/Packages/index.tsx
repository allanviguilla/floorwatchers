import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material";

const utilDraw = new URL(
	'../../assets/UTIL DRAW.png',
	import.meta.url
);
const utilMystery = new URL(
	'../../assets/UTIL MYSTERY.png',
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
export default function Packages() {
	return (
		<Grid
			id="packages"
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			marginTop={'50px'}
		>
			<Grid item xs={12} sm={6}>
				<Grid container>
					<Grid item xs={12} sx={{ marginBottom: '40px' }}>
						<Paper elevation={6} sx={{ padding: '20px', width: '450px', borderRadius: '20px' }}>
							<Grid
								container
								direction="row"
								justifyContent={'center'}
								alignItems='center'
								style={{ height: '266px' }}>
								<Typography>
									<img src={utilDraw.href}></img>
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
			<Grid item xs={12} sm={6} sx={{ marginBottom: '30px' }}>
				<Grid container>
					<Grid item xs={12} sx={{ marginBottom: '40px' }}>
						<Paper elevation={6} sx={{ padding: '20px', width: '426px', borderRadius: '20px' }}>
							<Grid
								container
								direction="row"
								justifyContent={'center'}
								alignItems='center'
								style={{ height: '266px' }}>
								<Typography>
									<img src={utilMystery.href}></img>
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
			<Typography>
				<img src={separator.href}></img>
			</Typography>
		</Grid>
	)
}