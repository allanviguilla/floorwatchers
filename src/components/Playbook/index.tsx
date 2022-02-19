import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material";

const socDraw = new URL(
	'../../assets/UTIL SOCIETY.png',
	import.meta.url
);
const separator = new URL(
	'../../assets/separator.png',
	import.meta.url
);
const PlaybookTitle = styled(Typography)({
	fontFamily: 'Inter',
	fontSize: '66px',
	fontStyle: 'normal',
	fontWeight: '900',
	lineHeight: '80px',
	letterSpacing: '0em',
	textAlign: 'center',
	color: '#291381',

});
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
			<Grid item xs={12} sx={{ marginBottom: '50px' }}>
				<PlaybookTitle variant="h2" align="center">Season 1 Playbook</PlaybookTitle>
			</Grid>
			<Grid container sx={{ marginBottom: '30px' }} spacing={'40'}>
				<Grid item xs={12} sm={6}>
					<Paper elevation={6} sx={{ padding: '20px',borderRadius: '20px' }}>
						<Grid
							container
							direction="row"
							justifyContent={'center'}
							alignItems='center'
							style={{ height: '266px' }}>
							<Typography>
								<img src={socDraw.href}></img>
							</Typography>
						</Grid>

					</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Grid
						container
						direction="row"
						alignItems='center'
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