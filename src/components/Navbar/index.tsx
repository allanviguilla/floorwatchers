import React, { useLayoutEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, Box, MenuItem, Link, IconButton } from "@mui/material";
import { styled } from '@mui/styles';
import {
	WalletMultiButton,
	WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { shortenAddress } from "../../utils/candy-machine";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

const logo = new URL(
	'../../assets/LOGO.png',
	import.meta.url
);

const FWSNav = styled(AppBar)({
	color: 'white',
	background: 'linear-gradient(162.2deg, #291381 23%, #5607D6 122.71%)',
});
const FWSWalletBtn = styled(WalletMultiButton)({
	background: '#01FFA3',
	color: '#291381',
	borderRadius: '100px',
	width: '220px'
});
const SocialBtn = styled(IconButton)({
	background: '#39EB9B',
	borderRadius: '50%',
	color:'white',
});
export const Navbar = () => {
	const wallet = useWallet();
	const navigate = useNavigate();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<FWSNav position="static" className={'navbar-bg'} color="transparent" elevation={0}>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
						className="logo-container"
					>
						<Link onClick={() => { navigate('/') }}>
							<img src={logo.href} width="120" height="75" style={{ marginTop: '10px' }} />
						</Link>
					</Typography>
					<Grid container justifyContent="center">
						<Grid item>
							<MenuItem onClick={() => { navigate('/#mint') }}>
								<Typography
									variant="h6"
								>
									Playbook
								</Typography>
							</MenuItem>
						</Grid>
						<Grid item>
							<MenuItem onClick={() => { navigate('/#utilities') }}>
								<Typography
									variant="h6"
								>
									Team
								</Typography>
							</MenuItem>
						</Grid>
						<Grid item>
							<MenuItem>
								<Typography
									variant="h6"
								>
									FAQ
								</Typography>
							</MenuItem>
						</Grid>
					</Grid>
					<SocialBtn size="small" sx={{marginRight:'5px'}} onClick={() => { navigate('https://discord.gg/yfw7dju66s') }}>
						<FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
					</SocialBtn>
					<SocialBtn size="small" sx={{marginRight:'5px'}} onClick={() => { navigate('https://twitter.com/FloorWatchers') }}>
					<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
					</SocialBtn>
					{!wallet.connected ? (
						<FWSWalletBtn>Connect Wallet</FWSWalletBtn>
					) : (
						<WalletDisconnectButton>{wallet.publicKey ? shortenAddress(wallet.publicKey?.toString()) : <p>Disconnect</p>}</WalletDisconnectButton>
					)}
				</Toolbar>
			</FWSNav>
		</Box >
	);
}
export default Navbar;
