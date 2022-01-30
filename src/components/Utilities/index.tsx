import React from "react";
import Typography from "@mui/material/Typography";
import { Grid} from "@mui/material";

export default function Utilities(){
	return(
		<Grid
			id="utilities"
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			marginTop={'30px'}
		>
			<Grid item xs={12}>
				<Typography variant="h2" align="center">Utilities</Typography>
			</Grid>
			<Grid item xs={8} sx={{marginTop:'20px'}}>
				<Typography variant="h6" align="center">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</Typography>
			</Grid>
		</Grid>
	)
}