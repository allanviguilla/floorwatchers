import React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";
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
			<Typography variant="h2">Team</Typography>
			<Grid container spacing={3} justifyContent={'center'} marginTop={'10px'}>
				<Grid item xs={6} md={3}>
					<Grid container justifyContent={'center'}>
						<Avatar
							alt="Allan"
							src={allan.href}
							sx={{ width: 150, height: 150 }}
						/>

					</Grid>
					<Typography align="center" variant={"h5"}>Allan</Typography>
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