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
			marginTop={'30px'}
		>
			<Typography variant="h2">Team</Typography>
			<Grid container spacing={3} justifyContent={'center'} marginTop={'10px'}>
				<Grid item xs={2}>
					<Grid container justifyContent={'center'}>
						<Avatar
							alt="Remy Sharp"
							src={allan.href}
							sx={{ width: 150, height: 150 }}
						/>

					</Grid>
					<Typography align="center">Allan</Typography>
				</Grid>
				<Grid item xs={2}>
					<Grid container justifyContent={'center'}>
						<Avatar
							alt="Remy Sharp"
							src={dre.href}
							sx={{ width: 150, height: 150 }}
						/>

					</Grid>
					<Typography align="center">Dre</Typography>
				</Grid>
				<Grid item xs={2}>
					<Grid container justifyContent={'center'}>
						<Avatar
							alt="Remy Sharp"
							src={khalil.href}
							sx={{ width: 150, height: 150 }}
						/>

					</Grid>
					<Typography align="center">Khalil</Typography>
				</Grid>
				<Grid item xs={2}>
					<Grid container justifyContent={'center'}>
						<Avatar
							alt="Rory"
							src="/static/images/avatar/1.jpg"
							sx={{ width: 150, height: 150 }}
						/>

					</Grid>
					<Typography align="center">Rory</Typography>
				</Grid>
				<Grid item xs={2}>
					<Grid container justifyContent={'center'}>
						<Avatar
							alt="Sira"
							src="/static/images/avatar/1.jpg"
							sx={{ width: 150, height: 150 }}
						/>

					</Grid>
					<Typography align="center">Sira</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}