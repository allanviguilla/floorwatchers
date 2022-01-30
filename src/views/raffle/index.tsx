/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useCallback, useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { useConnection, useWallet, Wallet } from "@solana/wallet-adapter-react";
import * as anchor from '@project-serum/anchor';
// const idl = require('../../../fws-programs/target/idl/fws_raffle_program.json');

import {shortenAddress} from "../../utils/candy-machine";
let idl: any;
console.log(process.env.REACT_APP_SOLANA_NETWORK!)
if(process.env.REACT_APP_SOLANA_NETWORK! === 'localnet'){
	idl = require('../../utils/fws-raffle-local.json');
}if((process.env.REACT_APP_SOLANA_NETWORK! === 'devnet')){
	idl = require('../../utils/fws-raffle-dev.json');
}else{
	idl = require('../../utils/fws-raffle.json');
}
const suitePic = new URL(
	'../../assets/images/suite.png',
	import.meta.url
);
const commissionerPic = new URL(
	'../../assets/images/commissioner.png',
	import.meta.url
);
const franchisePic = new URL(
	'../../assets/images/franchise.png',
	import.meta.url
  );
const opts = {
	preflightCommitment: "processed"
};
export default function Raffle() {
	const { connection } = useConnection()
	const { publicKey } = useWallet();
	const { wallet } = useWallet();
	const [allRaffles, setAllRaffles] = useState<Array<any>>([]);
	// @ts-ignore
	const provider = new anchor.Provider(connection, wallet, opts.preflightCommitment);

	anchor.setProvider(provider);
	const programID = new anchor.web3.PublicKey(idl.metadata.address);
	const program = new anchor.Program(idl as anchor.Idl, programID, provider);

	const getRaffles = async () => {
		const raffleAccounts = await connection.getProgramAccounts(programID);
		const allAccounts = [];
		for await (const account of raffleAccounts) {
			try {
				const _raffleAccount = await program.account.raffleAccount.fetch(account.pubkey);
				allAccounts.push(_raffleAccount);
				// eslint-disable-next-line no-unsafe-optional-chaining
				setAllRaffles(allRaffles => [...allRaffles?.filter((raffleAccount) => account.pubkey.toString() !== raffleAccount.pubkey.toString()), _raffleAccount]);
			} catch (e) {
				console.log(`Could not fetch ${e}`)
			}
		}
		// console.log(allAccounts.p);		
	};
	useEffect(() => {
		(async () => {
			getRaffles();
			// console.log(raffles);
			// setAllRaffles(raffles);
		})()
	}, []);
	return (
		<Grid container 
		justifyContent={'center'}
		height={'1000px'}
		sx={{paddingTop: '5%'}}>
			<Grid item>
				<Typography variant="h2">FWS Draw</Typography>
			</Grid>

			{allRaffles ?
				(
					<Grid container 
					spacing={6}
					sx={{paddingTop: '5%'}}>
						{allRaffles.map((raffle, index: number) => (
							<Grid item key={index}>
								<Paper elevation={3}>
									<Card sx={{ maxWidth: 345 }}>
										{raffle.raffleType == 0 ? (
											<CardMedia
											component="img"
											height="140"
											width="140"
											image={commissionerPic.href}
											alt="Commissioner"
										/>
										) : raffle.raffleType == 1? (
											<CardMedia
											component="img"
											height="140"
											image={franchisePic.href}
											alt="Franchise"
										/>
										) : raffle.raffleType == 2? (
											<CardMedia
											component="img"
											height="140"
											image={suitePic.href}
											alt="Suite"
										/>
										) : 'None'}
										
										<CardContent>
											<Typography gutterBottom variant="h5" component="div">
												Draw: {shortenAddress(raffle.pubkey.toString())}
											</Typography>
											<Typography variant="body2" color="text.secondary">Entries: {raffle.head.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Typography>
											<Typography variant="body2" color="text.secondary">Winner: {shortenAddress(raffle.raffleWinner.toString())}</Typography>
											<Typography variant="body2" color="text.secondary">Package: {
											
											raffle.raffleType == 0? "Commissioner" : raffle.raffleType == 1? "Franchise" : raffle.raffleType == 2? "Suite" : "No package"
											}</Typography>
										</CardContent>
										<CardActions>
											<Button size="small">Claim</Button>
											<Button size="small">View</Button>
										</CardActions>
									</Card>
								</Paper>
							</Grid>

						)
						)}
					</Grid>

				) :
				(
					<Typography variant="h1"></Typography>
				)
			}
		</Grid>
	)
}