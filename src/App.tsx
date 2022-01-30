import { Route, Routes, BrowserRouter } from "react-router-dom";
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
	LedgerWalletAdapter,
	PhantomWalletAdapter,
	SlopeWalletAdapter,
	SolflareWalletAdapter,
	SolletExtensionWalletAdapter,
	SolletWalletAdapter,
	TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo } from 'react';
import { AppLayout } from "./components/Layout";
import Home from "./views/home";
import Raffle from "./views/raffle";

export const App: FC = () => {
	return (
		<Context>
			<Content />
		</Context>
	);
};

const Context: FC<{ children: ReactNode }> = ({ children }) => {
	// The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
	const net = process.env.REACT_APP_SOLANA_NETWORK!
	let network: any;
	let endpoint: any;

	if (net === 'mainnet-beta') {
		network = WalletAdapterNetwork.Mainnet;
		endpoint = 'https://ssc-dao.genesysgo.net/';
	} else if (net === 'devnet') {
		network = WalletAdapterNetwork.Devnet;
		endpoint = 'https://psytrbhymqlkfrhudd.dev.genesysgo.net:8899/';
	}else if (net ===  'localnet'){
		network = WalletAdapterNetwork.Devnet;
		endpoint = 'http://127.0.0.1:8899';
	}

	// @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
	// Only the wallets you configure here will be compiled into your application, and only the dependencies
	// of wallets that your users connect to will be loaded.
	const wallets = useMemo(
		() => [
			new PhantomWalletAdapter(),
			new SlopeWalletAdapter(),
			new SolflareWalletAdapter(),
			new TorusWalletAdapter(),
			new LedgerWalletAdapter(),
			new SolletWalletAdapter({ network }),
			new SolletExtensionWalletAdapter({ network }),
		],
		[network]
	);

	return (
		<BrowserRouter basename={"/"}>
			<ConnectionProvider endpoint={endpoint}>
				<WalletProvider wallets={wallets} autoConnect>
					<WalletModalProvider>
						<AppLayout>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/raffle" element={<Raffle />} />
							</Routes>
						</AppLayout>
					</WalletModalProvider>
				</WalletProvider>
			</ConnectionProvider>
		</BrowserRouter>
	);
};

const Content: FC = () => {
	return <WalletMultiButton />;
};
