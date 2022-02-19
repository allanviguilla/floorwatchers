import React, { useLayoutEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, Box, MenuItem, Link } from "@mui/material";
import { styled } from '@mui/styles';
import {
	WalletMultiButton,
	WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { shortenAddress } from "../../utils/candy-machine";
import { useNavigate } from "react-router-dom";
import { lineHeight } from "@mui/system";
const logo = new URL(
	'../../assets/LOGO.png',
	import.meta.url
);

const FWSNav = styled(AppBar)({
	color: 'white',
	background: 'linear-gradient(162.2deg, #291381 23%, #5607D6 122.71%)',
	// transform: 'rotate(-180deg)'
});
const FWSWalletBtn = styled(WalletMultiButton)({
	background: '#01FFA3',
	color: '#291381',
	borderRadius: '100px',
	width: '200px'
	// transform: 'rotate(-180deg)'
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
