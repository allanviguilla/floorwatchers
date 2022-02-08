import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, Box, MenuItem, Link } from "@mui/material";
import {
	WalletMultiButton,
	WalletDisconnectButton,
  } from "@solana/wallet-adapter-react-ui";
  import { useWallet } from "@solana/wallet-adapter-react";

export const Navbar = () => {
	const wallet = useWallet();
	// const navigate = useNavigate();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" className={'navbar-bg'}>
				<Toolbar>
					
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
						className="logo-container"
					>
						<Link href="https://floorwatcherssociety.com" sx={{color:'white'}}>
						Home
						</Link>
					</Typography>
					{!wallet.connected? (
						<WalletMultiButton></WalletMultiButton>
					):(
						<WalletDisconnectButton>{wallet.publicKey ? wallet.publicKey?.toString().slice(0,5) : <p>Disconnect</p>}</WalletDisconnectButton>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
export default Navbar;
