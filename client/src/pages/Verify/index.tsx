import React, { useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Verify() {
	const location = useLocation();
	const access_token = new URLSearchParams(location.hash).get('access_token');
	const code = new URLSearchParams(location.search).get('code');

	useEffect(() => {
		// console.log(code);
		if (access_token || code) {
			console.log(access_token);
			axios({
				method:'post',
				url: 'api/verify',
				data: {'code':code},
			})
		}
	}, [access_token, code])
	return (
		<Grid container justifyContent={'center'}>
			<Grid item xs={12} textAlign="center">
				<Typography variant='h3'>Verify your Floor Watcher</Typography>
			</Grid>
			<Grid item xs={12} textAlign="center">
				<Button variant="contained">Verify</Button>
			</Grid>
		</Grid>
	);
}