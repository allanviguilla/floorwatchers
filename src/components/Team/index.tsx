import React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Grid, Card, CardActionArea, CardMedia, CardActions, Button, CardContent, styled } from "@mui/material";
const SIL1 = new URL(
	'../../assets/SIL1.png',
	import.meta.url
);
const SIL2 = new URL(
	'../../assets/SIL2.png',
	import.meta.url
);
const SIL3 = new URL(
	'../../assets/SIL3.png',
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
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			marginTop={'50px'}
		>
			<TeamTitle variant="h2">Meet the FWS Family</TeamTitle>
			<Grid container spacing={3} justifyContent={'center'} marginTop={'10px'}>
				<Grid item xs={6} md={3}>
					<Grid container justifyContent={'center'}>
						<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="500"
									src={SIL1.href}
									alt="green iguana"
								/>
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
										<Grid item xs={12} sx={{borderRadius:'11px', border:'1 px solid gray'}}>
											<Typography variant="body2" color="text.secondary" >
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
											</Typography>
										</Grid>
									</Grid>

								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
							</CardActions>
						</Card>
						{/* <Avatar
							alt="Allan"
							src={allan.href}
							sx={{ width: 150, height: 150 }}
						/> */}

					</Grid>
					{/* <Typography align="center" variant={"h5"}>Allan</Typography> */}
				</Grid>
				<Grid item xs={6} md={3}>
					<Grid container justifyContent={'center'}>
					<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="500"
									src={SIL2.href}
									alt="green iguana"
								/>
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
										<Grid item xs={12} sx={{borderRadius:'11px', border:'1 px solid gray'}}>
											<Typography variant="body2" color="text.secondary" >
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
											</Typography>
										</Grid>
									</Grid>

								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
							</CardActions>
						</Card>

					</Grid>
				</Grid>
				<Grid item xs={6} md={3}>
					<Grid container justifyContent={'center'}>
					<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="500"
									src={SIL3.href}
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
										<Grid item xs={12} sx={{borderRadius:'11px', border:'1 px solid gray'}}>
											<Typography variant="body2" color="text.secondary" >
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
											</Typography>
										</Grid>
									</Grid>

								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
							</CardActions>
						</Card>

					</Grid>
				</Grid>
				<Grid item xs={6} md={3}>
					<Grid container justifyContent={'center'}>
					<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="500"
									src={SIL1.href}
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
										<Grid item xs={12} sx={{borderRadius:'11px', border:'1 px solid gray'}}>
											<Typography variant="body2" color="text.secondary" >
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
											</Typography>
										</Grid>
									</Grid>

								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
							</CardActions>
						</Card>

					</Grid>
				</Grid>
				<Grid item xs={6} md={3}>
					<Grid container justifyContent={'center'}>
					<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="500"
									src={SIL2.href}
									alt="green iguana"
								/>
								<CardContent>
									<Grid container>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Sira
											</Typography>
										</Grid>
										<Grid item xs={6}>
											<Typography gutterBottom variant="h6" component="div">
												Role
											</Typography>
										</Grid>
									</Grid>
									<Grid container>
										<Grid item xs={12} sx={{borderRadius:'11px', border:'1 px solid gray'}}>
											<Typography variant="body2" color="text.secondary" >
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
											</Typography>
										</Grid>
									</Grid>

								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
				<Grid item xs={6} md={3}>
					<Grid container justifyContent={'center'}>
					<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="500"
									src={SIL3.href}
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
										<Grid item xs={12} sx={{borderRadius:'11px', border:'1 px solid gray'}}>
											<Typography variant="body2" color="text.secondary" >
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
											</Typography>
										</Grid>
									</Grid>

								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
							</CardActions>
						</Card>

					</Grid>
				</Grid>
				<Grid item xs={6} md={3}>
					<Grid container justifyContent={'center'}>
					<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="500"
									src={SIL1.href}
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
										<Grid item xs={12} sx={{borderRadius:'11px', border:'1 px solid gray'}}>
											<Typography variant="body2" color="text.secondary" >
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
											</Typography>
										</Grid>
									</Grid>

								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
							</CardActions>
						</Card>

					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}