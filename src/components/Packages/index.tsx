import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material";

import STRINGS from "../../static/static.json";

const utilDraw = new URL(
	'../../assets/UTIL DRAW.png',
	import.meta.url
);
const utilMystery = new URL(
	'../../assets/UTIL MYSTERY.png',
	import.meta.url
);
const separator = new URL(
	'../../assets/separator.png',
	import.meta.url
);
const Title = styled(Typography)({
	fontFamily: 'Inter',
	fontSize: '66px',
	fontStyle: 'normal',
	fontWeight: '900',
	lineHeight: '80px',
	letterSpacing: '0em',
	textAlign: 'center',
	color: '#291381',

});
const FWSPaper = styled(Paper)({
	padding: '20px',
	borderRadius: '20px',
	width:'300px',
	boxShadow: '0px 0px 34px rgba(54, 14, 214, 0.3)'
});
export default function Packages() {
	return (
		<Grid
			id="packages"
			container
			spacing={'40'}
			marginTop={'50px'}
		>
			<Grid item xs={12} sm={6}>
				<Grid container justifyContent='center'>
					<Grid item xs={12} sx={{ marginBottom: '40px' }} >
						<Grid container justifyContent='center'>
							<FWSPaper elevation={6} sx={{ padding: '20px', borderRadius: '20px', width: '300px' }}>
								<Grid
									container
									direction="row"
									alignItems='center'
									style={{ height: '266px' }}>
									<Typography>
										<img src={utilDraw.href} width="300px"></img>
									</Typography>
								</Grid>
							</FWSPaper>
						</Grid>

					</Grid>
					<Grid item xs={10}>
						<Typography variant="h5" align="center" sx={{color:'#291381',fontFamily:'Nunito, sans-serif !important', fontWeight:'400',fontSize: '24px'}} gutterBottom={true}>
							Commissioner Package
						</Typography>
					</Grid>
					<Grid item xs={10} sx={{marginBottom:'15px'}}>
						<Typography variant="h6" align="center" sx={{fontFamily:'Nunito, sans-serif !important', fontWeight:'400', fontSize: '20px'}}>
							{STRINGS.commissioner_package.text}
						</Typography>
					</Grid>
					<Grid item xs={10}>
						<Typography variant="h5" align="center" sx={{color:'#291381',fontFamily:'Nunito, sans-serif !important', fontWeight:'400',fontSize: '24px'}} gutterBottom={true}>
							Franchise Package
						</Typography>
					</Grid>
					<Grid item xs={10}>
						<Typography variant="h6" align="center" sx={{fontFamily:'Nunito, sans-serif !important', fontWeight:'400', fontSize: '20px'}}>
							{STRINGS.franchise_package.text}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} sm={6} sx={{ marginBottom: '30px' }}>
				<Grid container justifyContent='center'>
					<Grid item xs={12} sx={{ marginBottom: '40px' }}>
						<Grid container justifyContent={'center'}>
							<FWSPaper elevation={6} sx={{ padding: '20px', borderRadius: '20px', width: '300px' }}>
								<Grid
									container
									direction="row"
									justifyContent={'center'}
									alignItems='center'
									style={{ height: '266px' }}>
									<Typography> 
										<img src={utilMystery.href} width="300px"></img>
									</Typography>
								</Grid>
							</FWSPaper>
						</Grid>

					</Grid>
					<Grid item xs={10}>
						<Typography variant="h6" align="center" sx={{fontFamily:'Nunito, sans-serif !important', fontWeight:'400', fontSize: '20px'}}>
							{STRINGS.mystery_package.text}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<hr></hr>
			</Grid>
		</Grid>
	)
}