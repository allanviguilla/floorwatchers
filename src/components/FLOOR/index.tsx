import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material";

const utilFloor = new URL(
	'../../assets/UTIL FLOOR.png',
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
const FWSPaper = styled(Paper)({
	padding: '20px',
	borderRadius: '20px',
	width:'300px',
	boxShadow: '0px 0px 34px rgba(54, 14, 214, 0.3)'
});
export default function Floor() {
	return (
		<Grid
			id="floor"
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			marginTop={'100px'}
		>
			<Grid container sx={{ marginBottom: '30px' }} spacing={'40'} justifyContent='center'>
				<Grid item xs={12} sm={4}>
					<FWSPaper elevation={6} sx={{ padding: '20px', borderRadius: '20px', width: '300px' }}>
						<Grid
							container
							direction="row"
							// justifyContent={'center'}
							alignItems='center'
							style={{ height: '266px' }}>
							<Typography>
								<img src={utilFloor.href} width="300px"></img>
							</Typography>
						</Grid>
					</FWSPaper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Grid
						container
						direction="row"
						justifyContent={'center'}
						// alignItems='center'
						style={{ height: '266px' }}>
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