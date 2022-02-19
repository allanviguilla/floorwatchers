import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { styled } from '@mui/styles';

const HeroGrid = styled(Grid)({
	// background: 'linear-gradient(162.2deg, #291381 23%, #5607D6 122.71%)',
	// transform: 'rotate(-180deg)'
});
export default function Hero(){
	return(
		<HeroGrid
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
			
		</HeroGrid>
	)
}