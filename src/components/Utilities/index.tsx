import React from "react";
import Typography from "@mui/material/Typography";
import { Grid} from "@mui/material";

export default function Utilities(){
	return(
		<Grid
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			marginTop={'30px'}
		>
			<Typography variant="h2">Utilities</Typography>
		</Grid>
	)
}