import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, styled } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import team from "../../static/team.json";

const khalil = new URL(
	'../../assets/teamCards/fws_fem_purple.png',
	import.meta.url
);
const sommo = new URL(
	'../../assets/teamCards/fws_male_blue.png',
	import.meta.url
);
const allan = new URL(
	'../../assets/teamCards/fws_male_cyan.png',
	import.meta.url
);
const dre = new URL(
	'../../assets/teamCards/fws_male_olive.png',
	import.meta.url
);
const juan = new URL(
	'../../assets/teamCards/fws_male_orange.png',
	import.meta.url
);
const rory = new URL(
	'../../assets/teamCards/fws_male_pink.png',
	import.meta.url
);
const sook = new URL(
	'../../assets/teamCards/fws_male_yellow.png',
	import.meta.url
);

const TeamTitle = styled(Typography)({
	fontFamily: 'Inter',
	fontSize: '66px',
	fontStyle: 'normal',
	fontWeight: '900',
	lineHeight: '80px',
	letterSpacing: '0em',
	textAlign: 'center',
	color: '#291381',

});

export default function Team() {
	return (
		<Grid
			id="team"
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			marginTop={'50px'}
		>
			<TeamTitle variant="h2">Meet the FWS Family</TeamTitle>
			<Grid container spacing={3} justifyContent={'center'} marginTop={'10px'}>
				{team.map((member, index) => {
					return (
						<Grid item xs={12} sm={6} md={3} key={index}>
							<Grid container justifyContent={'center'}>
								<Grid item xs={12}>
									<Grid container justifyContent={'center'}>
										<img
											height="210px"
											width="210px"
											src={
												member.name == 'Khalil' ? (khalil.href) :
													member.name == 'Sommo' ? (sommo.href) :
														member.name == 'Allan' ? (allan.href) :
															member.name == 'Dre' ? (dre.href) :
																member.name == 'Juan' ? (juan.href) :
																	member.name == 'Rory' ? (rory.href) :
																		member.name == 'Sook' ? (sook.href) : ('')}></img>
									</Grid>
								</Grid>
								<Grid item xs={12}>
									<Grid container justifyContent={'center'}>
										<Typography sx={{
											color: '#291381',
											fontSize: '20px',
											fontWeight: '900'
										}} gutterBottom={true}>
											{member.name}
										</Typography>
									</Grid>
								</Grid>
								<Grid item xs={12}>
									<Grid container justifyContent={'center'}>
										<Typography sx={{
											color: '#291381',
											fontWeight: '600'
										}}
											gutterBottom={true}>
												{member.role}
										</Typography>
									</Grid>
								</Grid>
								<Grid item xs={12}>
									<Grid container justifyContent={'center'}>
										<FontAwesomeIcon icon={faTwitter} style={{ color: '#03E1FF' }}></FontAwesomeIcon>
									</Grid>
								</Grid>
							</Grid>
						</Grid>)
				})}
			</Grid>
		</Grid>
	)
}