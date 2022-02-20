import React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Grid, Card, CardActionArea, CardMedia, CardActions, Button, CardContent, styled, makeStyles } from "@mui/material";
import team from "../../static/team.json";

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
const TeamCard = styled(Card)({
	maxWidth: 343,
	margin: 'auto',
	borderRadius: 12,
	padding: 12,
});
const TeamMedia = styled(CardMedia)({
	borderRadius: 6,
});
export default function Team() {
	return (
		<Grid
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			marginTop={'50px'}
		>
			<TeamTitle variant="h2">Meet the FWS Family</TeamTitle>
			<Grid container spacing={3} justifyContent={'center'} marginTop={'10px'}>
				{team.map((member, index)=>{
					return(
						<Grid item xs={12} md={3} key={index}>
							<Grid container justifyContent={'center'}>
								<Grid item xs={12}>
									{/* {'../../assets/team_cards/'+member.img} */}
									<img src={new URL('../../assets/team_cards/'+member.img,import.meta.url).href}></img>
								</Grid>
								<Grid item xs={12}>
									{member.name}
								</Grid>
								<Grid item xs={12}>
									{member.role}
								</Grid>
								<Grid item xs={12}>
								</Grid>
							</Grid>
						</Grid>)
				})}
				{/* 
				<Grid item xs={12} md={3}>
					<Grid container justifyContent={'center'}>
						<TeamCard sx={{ maxWidth: 345 }}>
								{
								<TeamMedia
								//@ts-ignore
									component="img"
									height="300px"
									src={fws_fem_hair1.href}
									alt="green iguana"
								/>
								}
								<CardContent>
									<Grid container>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Allan
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Role
											</Typography>
										</Grid>
									</Grid>
									<Grid container>
										<Grid item xs={12} sx={{ borderRadius: '11px', border: '1 px solid gray' }}>
											<Typography variant="body2" color="text.secondary" >
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
											</Typography>
										</Grid>
									</Grid>

								</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
							</CardActions>
						</TeamCard>
					</Grid>
				</Grid>
				<Grid item xs={12} md={3}>
					<Grid container justifyContent={'center'}>
						<TeamCard sx={{ maxWidth: 345 }}>
								{
								<TeamMedia
								//@ts-ignore
									component="img"
									height="300px"
									src={fws_male_hair2.href}
									alt="green iguana"
								/>
								}
								<CardContent>
									<Grid container>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Dre
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Role
											</Typography>
										</Grid>
									</Grid>
									<Grid container>
										<Grid item xs={12} sx={{ borderRadius: '11px', border: '1 px solid gray' }}>
											<Typography variant="body2" color="text.secondary" >
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
											</Typography>
										</Grid>
									</Grid>

								</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
							</CardActions>
						</TeamCard>

					</Grid>
				</Grid>
				<Grid item xs={12} md={3}>
					<Grid container justifyContent={'center'}>
						<TeamCard sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="300px"
									src={fws_fem_hair3.href}
									alt="green iguana"
								/>
								<CardContent>
									<Grid container>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Khalil
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Role
											</Typography>
										</Grid>
									</Grid>
									<Grid container>
										<Grid item xs={12} sx={{ borderRadius: '11px', border: '1 px solid gray' }}>
											<Typography variant="body2" color="text.secondary" >
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
											</Typography>
										</Grid>
									</Grid>

								</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
							</CardActions>
						</TeamCard>

					</Grid>
				</Grid>
				<Grid item xs={12} md={3}>
					<Grid container justifyContent={'center'}>
						<TeamCard sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="300px"
									src={fws_male_hat1.href}
									alt="green iguana"
								/>
								<CardContent>
									<Grid container>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Rory
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Role
											</Typography>
										</Grid>
									</Grid>
									<Grid container>
										<Grid item xs={12} sx={{ borderRadius: '11px', border: '1 px solid gray' }}>
											<Typography variant="body2" color="text.secondary" >
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
											</Typography>
										</Grid>
									</Grid>

								</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
							</CardActions>
						</TeamCard>

					</Grid>
				</Grid>
				<Grid item xs={12} md={3}>
					<Grid container justifyContent={'center'}>
						<TeamCard sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="300px"
									src={fws_male_hair1.href}
									alt="green iguana"
								/>
								<CardContent>
									<Grid container>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Sommo
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Role
											</Typography>
										</Grid>
									</Grid>
									<Grid container>
										<Grid item xs={12} sx={{ borderRadius: '11px', border: '1 px solid gray' }}>
											<Typography variant="body2" color="text.secondary" >
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
											</Typography>
										</Grid>
									</Grid>

								</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
							</CardActions>
						</TeamCard>
					</Grid>
				</Grid>
				<Grid item xs={12} md={3}>
					<Grid container justifyContent={'center'}>
						<TeamCard sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="300px"
									src={fws_male_hat2.href}
									alt="green iguana"
								/>
								<CardContent>
									<Grid container>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Juan
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Role
											</Typography>
										</Grid>
									</Grid>
									<Grid container>
										<Grid item xs={12} sx={{ borderRadius: '11px', border: '1 px solid gray' }}>
											<Typography variant="body2" color="text.secondary" >
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
											</Typography>
										</Grid>
									</Grid>

								</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
							</CardActions>
						</TeamCard>

					</Grid>
				</Grid>
				<Grid item xs={12} md={3}>
					<Grid container justifyContent={'center'}>
						<TeamCard sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									height="300px"
									src={fws_fem_hair2.href}
									alt="green iguana"
								/>
								<CardContent>
									<Grid container>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Sook
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Role
											</Typography>
										</Grid>
									</Grid>
									<Grid container>
										<Grid item xs={12} sx={{ borderRadius: '11px', border: '1 px solid gray' }}>
											<Typography variant="body2" color="text.secondary" >
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
											</Typography>
										</Grid>
									</Grid>

								</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
							</CardActions>
						</TeamCard>

					</Grid>
				</Grid>
				*/}
			</Grid>
		</Grid>
	)
}