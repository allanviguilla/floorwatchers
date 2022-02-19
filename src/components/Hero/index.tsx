import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";
import { styled } from '@mui/styles';
//@ts-ignore
import * as classes from "./hero.module.css";
const HeroGrid = styled(Grid)({
	color: 'white'
});
const SIL3 = new URL(
	'../../assets/SIL_3.png',
	import.meta.url
);
const styles = {
	position: 'absolute',
	left: '10px',
	top: '95px',
	width: '500px',
	height: '650px',
}
const JoinBtn = styled(Button)({
	background: '#01FFA3',
	color: '#291381',
	borderRadius: '50px',
	fontWeight: '800',
	fontStyle: 'normal',
	padding: '15px'
});
export default function Hero() {
	return (
		<HeroGrid
			container
			direction="row"
			justifyContent='center'
			alignItems='center'
			style={{ minHeight: '50vh' }}
		// alignContent={'center'}
		// spacing={'column'}
		// sx={{ paddingTop: '125px' }}

		>
			<Grid item sm={2} md={4} lg={3}>
				{//@ts-ignore
					<img src={SIL3.href} style={styles}></img>
				}
			</Grid>
			<Grid item sm={7} md={8} lg={9}>
				<Grid container>
					<Grid item xs={12}>
						<Typography
							variant="h5"
							gutterBottom={true}
							sx={{ color: '#01FFA3' }}
						>
							Launching Soon</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography
							variant="h3"
							gutterBottom={true}
						>
							Floor Watchers Society</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h6">
							Floor Watchers Society provides 3333 members real-life utility with exclusive access to once in a lifetime luxury experiences at community and token holder chosen sporting events.
						</Typography>
					</Grid>
					<Grid item xs={12} sx={{ marginTop: '20px' }}>
						<JoinBtn size="large">
							Join Floor Watchers Society Discord
						</JoinBtn>
					</Grid>
				</Grid>

			</Grid>
		</HeroGrid>
	)
}