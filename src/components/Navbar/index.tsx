import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid, Box, MenuItem, Link, IconButton, Menu} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
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
	marginBottom: '-650px',
	paddingBottom: '650px',
	paddingLeft: '20px',
	paddingRight: '20px',
	marginRIght: '10px'
});
const FWSWalletBtn = styled(WalletMultiButton)({
	background: '#01FFA3',
	color: '#291381',
	borderRadius: '100px',
	lineHeight: '50px'
	// width: '220px'
});
const SocialBtn = styled(IconButton)({
	backgroundColor: '#39EB9B !important',
	borderRadius: '100px !important',
	color: 'white !important',
	height: '40px',
	width: '40px',
	linHeight: '50px; !important'
});
export const Navbar = () => {
	const wallet = useWallet();
	const navigate = useNavigate();

	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	return (
		<Box>
			<FWSNav position="static">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						className="logo-container"
						component="div"
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						<Link onClick={() => { navigate('/') }}>
							<img src={logo.href} width="120" height="75" style={{ marginTop: '10px' }} />
						</Link>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography textAlign="center">Playbook</Typography>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography textAlign="center">Team</Typography>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography textAlign="center">FAQ</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					>
						<Link onClick={() => { navigate('/') }}>
							<img src={logo.href} width="120" height="75" style={{ marginTop: '10px' }} />
						</Link>
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Grid container>
							<Grid item sx={{display: { xs: 'none', md: 'flex' } }}>
								<a href="https://discord.gg/yfw7dju66s">
									<SocialBtn size="small" sx={{ marginRight: '15px' }}>
										<FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
									</SocialBtn>
								</a>
							</Grid>
							<Grid item sx={{display: { xs: 'none', md: 'flex' } }}>
								<a href="https://twitter.com/FloorWatchers">
									<SocialBtn size="small" sx={{ marginRight: '15px' }}>
										<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
									</SocialBtn>
								</a>
							</Grid>


							{!wallet.connected ? (
								<FWSWalletBtn>Connect Wallet</FWSWalletBtn>
							) : (
								<WalletDisconnectButton>{wallet.publicKey ? shortenAddress(wallet.publicKey?.toString()) : <p>Disconnect</p>}</WalletDisconnectButton>
							)}
						</Grid>
					</Box>
				</Toolbar>
			</FWSNav>
		</Box>
	);
}
export default Navbar;
