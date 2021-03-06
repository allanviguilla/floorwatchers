import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Button, useMediaQuery, Box } from "@mui/material";
import { styled, useTheme } from '@mui/styles';
//@ts-ignore
import * as classes from "./hero.module.css";
const HeroGrid = styled(Grid)({
	color: 'white'
});
const SIL = new URL(
	'../../assets/silhouette.png',
	import.meta.url
);
const xsStyles = {
	position: 'absolute',
	left: '5px',
	top: '476px',
	maxWidth: '200px',
	maxHeight: '100%',
}
const smStyles = {
	position: 'relative',
	left: '-30px',
	top: '84px',
	maxWidth: '400px',
	maxHeight: '100%',
}
const mdStyles = {
	position: 'relative',
	left: '-45px',
	top: '-20px',
	maxWidth: '500px',
	maxHeight: '100%',
}
const lgStyles = {
	position: 'relative',
	left: '-250px',
	top: '-20px',
	maxWidth: '500px',
	maxHeight: '100%',
}
const JoinBtn = styled(Button)({
	background: '#01FFA3',
	color: '#291381',
	borderRadius: '50px',
	fontFamily:'Nunito, sans-serif !important',
	fontWeight: '800',
	fontStyle: 'normal',
	padding: '20px'
});
export default function Hero() {
	const xsMatch = useMediaQuery('(max-width:599px)');
	const smMatch = useMediaQuery('(max-width:899px)');
	const mdMatch = useMediaQuery('(max-width:1199px)');
	const lgMatch = useMediaQuery('(min-width:1200px)');

	console.log(smMatch)
	return (
		<HeroGrid
			container
			direction="row"
			alignItems='center'
			style={{ minHeight: '600px' }}
		>
			<Grid item xs={3} sm={5} md={5} lg={3}>

				{
					xsMatch ? (
						//@ts-ignore
						''
					) : smMatch ? (
						//@ts-ignore
						<img src={SIL.href} style={smStyles}></img>
					) : mdMatch ? (
						//@ts-ignore
						<img src={SIL.href} style={mdStyles}></img>
					) : lgMatch ? (
						//@ts-ignore
						<img src={SIL.href} style={lgStyles}></img>
					) :
						('')
				}
			</Grid>
			<Grid item sm={7} md={7} lg={9} sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex' } }}>
				<Grid container>
					<Grid item xs={12}>
						<Typography
							variant="h5"
							gutterBottom={true}
							sx={{ color: '#01FFA3', fontFamily:'Inter, sans-serif !important', fontWeight:'700' }}
						>
							Launching Soon</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography
							variant="h3"
							gutterBottom={true}
							sx={{fontFamily:'Inter, sans-serif !important', fontWeight:'700', fontSize:'60px' }}
						>
							Floor Watchers Society</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h6"
						sx={{fontFamily:'Nunito, sans-serif !important', fontWeight:'400'}}>
							Floor Watchers Society provides 3333 members real-life utility with exclusive access to once in a lifetime luxury experiences at community and token holder chosen sporting events.
						</Typography>
					</Grid>
					<Grid item xs={12} sx={{ marginTop: '20px' }}>
						<a href="https://discord.gg/yfw7dju66s" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
							<JoinBtn size="large" variant='contained'>
								Join Floor Watchers Society
							</JoinBtn>
						</a>
					</Grid>
				</Grid>

			</Grid>
		</HeroGrid>
	)
}