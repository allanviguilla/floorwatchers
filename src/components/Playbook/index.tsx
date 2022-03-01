import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material";
import STRINGS from "../../static/static.json";
import "./playbook.css";

const socDraw = new URL(
	'../../assets/UTIL SOCIETY.png',
	import.meta.url
);
const separator = new URL(
	'../../assets/separator.png',
	import.meta.url
);
const PlaybookTitle = styled(Typography)({
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
	width: '300px',
	boxShadow: '0px 0px 34px rgba(54, 14, 214, 0.3)'
});
export default function Playbook() {
	return (
		<Grid
			id="playbook"
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			marginTop={'50px'}
		>
			<Grid item xs={12} sx={{ marginBottom: '50px'}}>
				<PlaybookTitle variant="h2" align="center" className="playbookTitle"
				sx={{ fontFamily:'Inter, sans-serif !important', fontWeight:'900', fontSize:'66px' }}>
					Season 1 Roadmap
				</PlaybookTitle>
			</Grid>
			<Grid container sx={{ marginBottom: '30px' }} spacing={'40'} justifyContent='center'>
				<Grid item xs={12} sm={12} md={4}>
					<Grid container justifyContent={'center'}>
						<FWSPaper elevation={6}>
							<Grid
								container
								direction="row"
								justifyContent={'center'}
								alignItems='center'
								style={{ height: '200px' }}>
								<Typography>
									<img src={socDraw.href} width="300px"></img>
								</Typography>
							</Grid>

						</FWSPaper>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Grid
						container
						direction="row"
						// alignItems='center'
						style={{ height: '266px' }}>
						<Typography variant="h6" sx={{fontFamily:'Nunito, sans-serif !important', fontWeight:'400', fontSize: '24px'}}>
							{STRINGS.society_draw.text}import Playbook from './index';

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