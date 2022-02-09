import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Button, Grid, Snackbar, SnackbarCloseReason, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

type DiscordUser = {
	accent_color: string;
	avatar: string;
	banner: string;
	banner_color: string;
	flags: number;
	id: string;
	locale: string;
	mfa_enabled: boolean;
	premium_type: number;
	public_flags: number;
	username: string;
	discriminator: string;
};

export default function Verify() {
	const location = useLocation();
	const [user, setUser] = useState<DiscordUser>();
	const [open, setOpen] = useState(false);
	// const access_token = new URLSearchParams(location.hash).get('access_token');
	const code = new URLSearchParams(location.search).get('code');
	const handleClose = (event?: Event | React.SyntheticEvent<any, Event>, reason?: SnackbarCloseReason)=> {
		if(reason !== 'clickaway'){
			setOpen(false);
		}
	};
	const handleOpen = ()=> {
		setOpen(true);
	};
	useEffect(() => {
		// console.log(code);
		if (code) {
			axios({
				method: 'post',
				url: 'api/verify',
				data: { 'code': code },
			}).then(res => {
				const user = res.data.user;
				const oAuthData = res.data.oauthData;
				if (!user.message && !oAuthData.error) {
					setUser(user as DiscordUser);
					localStorage.setItem('user', JSON.stringify(user));
					localStorage.setItem('oAuthData', JSON.stringify(oAuthData));
				} else {
					const user = JSON.parse(localStorage.getItem('user') as string);
					const oAuthData = JSON.parse(localStorage.getItem('oAuthData') as string);
					if((user !== null && oAuthData !== null) || ((user && !user.message) && (oAuthData &&!oAuthData.error))){
						setUser(user as DiscordUser);
					}else{
						console.log('here');
						handleOpen();
						localStorage.removeItem('user');
						localStorage.removeItem('oAuthData');
					}
					
				}
			})
		} else {
			console.log('no code');
		}
	}, [code])
	return (
		<Grid container justifyContent={'center'}>
			<Grid item xs={12} textAlign="center" sx={{ marginTop: 5, marginBottom: 5 }}>
				<Typography variant='h3'>Verify your Floor Watcher</Typography>
				<Snackbar 
				anchorOrigin={ {vertical:'top', horizontal:'center'}}
				open={open} autoHideDuration={12000} onClose={handleClose}>
					<Alert
						severity="error"
						action={
							<Button
								color="inherit"
								size="small"
								onClick={handleClose}
							>
								X
							</Button>
						}
					>
						Unable to get your Discord info, <a href="https://discord.com/api/oauth2/authorize?client_id=928358420837433364&redirect_uri=http%3A%2F%2Flocalhost%3A1234&response_type=code&scope=identify">Try Again</a>!
					</Alert>
				</Snackbar>

			</Grid>

			{user ? (
				<Grid item xs={12} sx={{ marginTop: 5, marginBottom: 5 }}>
					<Grid container justifyContent={'center'}>
						<Avatar
							src={"https://cdn.discordapp.com/avatars/" + user.id + "/" + user.avatar + ".png"}
							sx={{ width: 150, height: 150 }}
						/>
					</Grid>
					<Typography align="center" variant={"h5"}>{user.username + '#' + user.discriminator}</Typography>
				</Grid>
			) : (
				''
			)}
			<Grid item xs={12} textAlign="center" sx={{ marginTop: 5, marginBottom: 5 }}>
				<Button variant="contained" size="large">Verify</Button>
			</Grid>
		</Grid>
	);
}