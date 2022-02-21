import React from 'react'
import { Typography, Grid, styled } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
const logo = new URL(
	'../../assets/LOGO.png',
	import.meta.url
);
const FWSFooter = styled(Grid)({
	color: 'white',
	background: 'linear-gradient(162.2deg, #291381 23%, #5607D6 122.71%)',
	marginTop: '-300px',
	paddingTop: '300px',
	paddingLeft: '75px',
	paddingRight: '10px',
	marginRIght: '10px'
});
export default function Footer() {
	return (
		<Grid container>
		<FWSFooter container>
			<Grid item xs={6}>
				<Grid container>
					<Grid item xs={12} marginBottom={2}>
						<Typography
							variant="h6"
							noWrap
							className="logo-container"
							component="div"
							sx={{ mr: 2}}
						>
							<img src={logo.href} width="120" height="75" style={{ marginTop: '10px' }} />
						</Typography>
					</Grid>
					<Grid item xs={12} marginBottom={2}>
						<Typography sx={{ fontSize: '15px', fontFamily:'Inter, sans-serif !important', fontWeight:'400'}}>
							Exclusive NFT Collection
						</Typography>
					</Grid>
					<Grid item xs={12} marginBottom={2}>
						<Grid container spacing={3}>
							<Grid item sx={{ display: { xs: 'flex', md: 'flex' } }}>
								<Typography sx={{ color: 'white' }}>
								<a href='https://discord.gg/yfw7dju66s' style={{color:'white'}} target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
									</a>
								</Typography>
							</Grid>
							<Grid item sx={{ display: { xs: 'flex', md: 'flex' } }}>
								<Typography sx={{ color: 'white' }}>
								<a href='https://twitter.com/FloorWatchers' style={{color:'white'}} target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
									</a>
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={5}>
				{/* <Grid container>
					<Grid item xs={3}>
						<Typography>About</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography>NFT</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography>Contact</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography>Social</Typography>
					</Grid>
				</Grid> */}
			</Grid>
			<Grid item xs={12} marginBottom={10}>
				<Grid container>
					<Grid item xs={6}>
						<Typography sx={{ fontSize: '15px', fontFamily:'Inter, sans-serif !important', fontWeight:'400'}}>Copyright © 2022 Floor Watchers Society</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography align='center' sx={{ fontSize: '15px', fontFamily:'Inter, sans-serif !important', fontWeight:'400'}}>Launching Spring 2022</Typography>
					</Grid>
				</Grid>
			</Grid>
		</FWSFooter>
		</Grid>
	)
}