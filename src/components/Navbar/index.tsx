import React, { useLayoutEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, Box, MenuItem, Link } from "@mui/material";
import {
	WalletMultiButton,
	WalletDisconnectButton,
  } from "@solana/wallet-adapter-react-ui";
  import { useWallet } from "@solana/wallet-adapter-react";
import {shortenAddress} from "../../utils/candy-machine";

function Navbar() {
	const wallet = useWallet();
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
						<Link href="/" sx={{color:'white'}}>
						Home
						</Link>
					</Typography>
					
					<MenuItem>
						<Typography
							variant="h6"
						>
							Mint
						</Typography>
					</MenuItem>
					<MenuItem>
						<Typography
							variant="h6"
						>
							Utilities
						</Typography>
					</MenuItem>
					<MenuItem>
						<Typography
							variant="h6"
						>
							Roadmap
						</Typography>
					</MenuItem>

					<MenuItem>
						<Typography
							variant="h6"
						>
							Team
						</Typography>
					</MenuItem>

					<MenuItem>
						<Typography
							variant="h6"
						>
							FAQ
						</Typography>
					</MenuItem>
					{!wallet.connected? (
						<WalletMultiButton></WalletMultiButton>
					):(
						<WalletDisconnectButton>{wallet.publicKey ? shortenAddress(wallet.publicKey?.toString()) : <p>Disconnect</p>}</WalletDisconnectButton>
					)}
					{/* <MenuItem>

					</MenuItem> */}
					{/* <div className="navbar-column">
						<Toolbar>
							<Grid container justifyContent="center" spacing={10}>
								<Typography
									variant="h6"
									component="div"
									sx={{ flexGrow: 1 }}
									className="logo-container"
								>
									Home
								</Typography>
							</Grid>
						</Toolbar>
					</div> */}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
export default Navbar;
