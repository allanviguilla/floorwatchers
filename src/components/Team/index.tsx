import React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Grid, Card, CardActionArea, CardMedia, CardActions, Button, CardContent } from "@mui/material";
const allan = new URL(
	'../../assets/images/allan.png',
	import.meta.url
);
const khalil = new URL(
	'../../assets/images/khalil.png',
	import.meta.url
);
const dre = new URL(
	'../../assets/images/dre.png',
	import.meta.url
);
export default function Team() {
	return (
		<Grid
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			marginTop={'50px'}
		>
			<Typography variant="h2">Meet the FWS Family</Typography>
			<Grid container spacing={3} justifyContent={'center'} marginTop={'10px'}>
				<Grid item xs={6} md={3}>
					<Grid container justifyContent={'center'}>
						<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									src={allan.href}
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
						<Avatar
							alt="Dre"
							src={dre.href}
							sx={{ width: 150, height: 150 }}
						/>

					</Grid>
					<Typography align="center" variant={"h5"}>Dre</Typography>
				</Grid>
				<Grid item xs={6} md={3}>
					<Grid container justifyContent={'center'}>
						<Avatar
							alt="Khalil"
							src={khalil.href}
							sx={{ width: 150, height: 150 }}
						/>

					</Grid>
					<Typography align="center" variant={"h5"}>Khalil</Typography>
				</Grid>
				<Grid item xs={6} md={3}>
					<Grid container justifyContent={'center'}>
						<Avatar
							alt="Rory"
							src="/static/images/avatar/1.jpg"
							sx={{ width: 150, height: 150 }}
						/>

					</Grid>
					<Typography align="center" variant={"h5"}>Rory</Typography>
				</Grid>
				<Grid item xs={6} md={3}>
					<Grid container justifyContent={'center'}>
						<Avatar
							alt="Sira"
							src="/static/images/avatar/1.jpg"
							sx={{ width: 150, height: 150 }}
						/>

					</Grid>
					<Typography align="center" variant={"h5"}>Sira</Typography>
				</Grid>
				<Grid item xs={6} md={3}>
					<Grid container justifyContent={'center'}>
						<Avatar
							alt="Juan"
							src="/static/images/avatar/1.jpg"
							sx={{ width: 150, height: 150 }}
						/>

					</Grid>
					<Typography align="center" variant={"h5"}>Juan</Typography>
				</Grid>
				<Grid item xs={6} md={3}>
					<Grid container justifyContent={'center'}>
						<Avatar
							alt="Sook"
							src="/static/images/avatar/1.jpg"
							sx={{ width: 150, height: 150 }}
						/>

					</Grid>
					<Typography align="center" variant={"h5"}>Sook</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}