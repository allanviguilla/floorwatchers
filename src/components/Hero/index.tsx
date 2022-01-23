import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Hero(){
	return(
		<Grid
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			sx={{paddingTop: '5%'}}
			
		>
			<Grid item xs={12}>
				<Typography 
				variant="h3" 
				align="center" 
				gutterBottom={true}
				>
					Floor Watchers Society</Typography>
			</Grid>
			<Grid container justifyContent={'center'}> 
			<Grid item xs={8}>
				<Typography align="center" variant="h6">
				Floor Watchers Society provides 3333 members real-life utility with exclusive access to once in a lifetime luxury experiences at community and token holder chosen sporting events.
				</Typography>
			</Grid>
			</Grid>
			
		</Grid>
	)
}