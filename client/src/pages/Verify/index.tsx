import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Button, Grid, Snackbar, SnackbarCloseReason, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {
	Connection,
	Message,
	Keypair,
	SystemProgram,
	LAMPORTS_PER_SOL,
	PublicKey,
	Transaction,
	TransactionInstruction,
} from '@solana/web3.js';
import { useWallet, useConnection } from '@solana/wallet-adapter-react'

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
	const { publicKey } = useWallet();
	const wallet = useWallet();
	const { connection } = useConnection();
	const [verificationStatus, setVerificationStatus] = useState(false);
	const [isValidHolder, setIsValidHolder] = useState(false);
	const [user, setUser] = useState<DiscordUser>();
	const [open, setOpen] = useState(false);
	// const access_token = new URLSearchParams(location.hash).get('access_token');
	const code = new URLSearchParams(location.search).get('code');
	const handleClose = (event?: Event | React.SyntheticEvent<any, Event>, reason?: SnackbarCloseReason) => {
		if (reason !== 'clickaway') {
			setOpen(false);
		}
	};
	const handleOpen = () => {
		setOpen(true);
	};
	const holderCheck = async (): Promise<any> => {
		if (!publicKey) {
			return
		}
		let data;
		try {
			await axios({
				url: 'api/holder-check',
				method: 'POST',
				data: { publicKey: publicKey.toString() }
			})
				.then(res => {
					data = res.data;
				})
		} catch (e) {
			console.log(e);
			return e;
		}
		return data;
	}
	const signMessage = async () => {
		if (!publicKey || !user) {
			return
		}
		try {
			const msg = Buffer.from('$FLOOR');
			// @ts-ignore
			const msgSig = await wallet.signMessage(msg);
			const decodedMsg = Message.from(msgSig);
			register(user, msgSig, msg)
		} catch (e) {
			console.log(e);
		}
	};
	const register = async (user: DiscordUser, msgSig: Uint8Array, msgBytes: Uint8Array) => {
		let userObj = {};
		userObj = {
			user,
			publicKey: publicKey?.toString()
		};
		const address = publicKey?.toBytes();
		const data = { userObj, msgSig, msgBytes, address };
		axios({
			method: 'post',
			url: 'api/register',
			data: data
		}).then(res => {
			console.log(res);
			setVerificationStatus(true);
		}).catch(err => {
			console.log(err);
		})
	}
	useEffect(() => {
		if (publicKey) {
			(async () => {
				const validHolder = await holderCheck();
				console.log(validHolder);
				setIsValidHolder(validHolder.verified as boolean);
			})()

		}
	}, [publicKey])
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
					if ((user !== null && oAuthData !== null) || ((user && !user.message) && (oAuthData && !oAuthData.error))) {
						setUser(user as DiscordUser);
					} else {
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
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
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
				<Grid item xs={12} sx={{ marginTop: 3, marginBottom: 5 }}>
					<Grid container justifyContent={'center'}>
						<Avatar
							src={"https://cdn.discordapp.com/avatars/" + user.id + "/" + user.avatar + ".png"}
							sx={{ width: 150, height: 150 }}
						/>
					</Grid>
					<Typography align="center" variant={"h5"} sx={{ paddingTop: 3 }}>{user.username + '#' + user.discriminator}</Typography>
				</Grid>
			) : (
				''
			)}
			{verificationStatus ? (
				<Grid item xs={12} textAlign="center" sx={{ marginTop: 2, marginBottom: 5 }}>
					<Grid container>
						<Grid item xs={12}>
							<Typography variant={"h5"}>Your wallet has been linked</Typography>
						</Grid>
						<Grid item xs={12}>
							<Button
								variant="contained"
								size="large">Back to Discord</Button>
						</Grid>
					</Grid>

				</Grid>
			) : (
				<Grid item xs={12} textAlign="center" sx={{ marginTop: 2, marginBottom: 5 }}>
					{!isValidHolder ? (
						<Grid container justifyContent={'center'} sx={{marginBottom:2}}>
							<Grid item xs={5}>
								<Alert
									severity='warning'>
									You must have a valid NFT in your wallet to link your Discord.
								</Alert>
							</Grid>
						</Grid>

					) : ('')}
					<Button
						disabled={!isValidHolder}
						variant="contained"
						size="large"
						onClick={signMessage}>
						Link Discord
					</Button>
				</Grid>
			)}

		</Grid>
	);
}