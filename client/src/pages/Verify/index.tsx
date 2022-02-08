import React, { useEffect, useState } from 'react';
import { Avatar, Button, Grid, Typography } from '@mui/material';
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
	const access_token = new URLSearchParams(location.hash).get('access_token');
	const code = new URLSearchParams(location.search).get('code');

	useEffect(() => {
		// console.log(code);
		if (access_token || code) {
			console.log(access_token);
			axios({
				method: 'post',
				url: 'api/verify',
				data: { 'code': code },
			}).then(user => {
				setUser(user.data as DiscordUser);
			})
		}
	}, [access_token, code])
	return (
		<Grid container justifyContent={'center'}>
			<Grid item xs={12} textAlign="center" sx={{ marginTop: 5, marginBottom: 5 }}>
				<Typography variant='h3'>Verify your Floor Watcher</Typography>
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