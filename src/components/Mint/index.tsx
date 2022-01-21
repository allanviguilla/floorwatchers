import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid} from "@mui/material";

export default function Mint(){
	return(
		<Grid
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			marginTop={'30px'}
		>
			<Typography variant="h2">Mint</Typography>
			<Grid container justifyContent={'center'}>
				<Grid item>
					<Button variant="contained">Mint</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}