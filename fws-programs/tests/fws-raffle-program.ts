import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { FwsRaffleProgram } from '../target/types/fws_raffle_program';
import { PublicKey, Keypair } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, Token } from '@solana/spl-token';
import * as SERUM from '@project-serum/serum';
import * as fs from 'fs';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tokenKeypair = require('./fws-token-keypair.json');
// const srm = require("@project-serum/serum").TokenInstructions;

describe('fws-raffle-program', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const holders = require('./raffle_holder_small.json');

    // Configure the client to use the local cluster.
    anchor.setProvider(anchor.Provider.env());
    const provider = anchor.getProvider();
    // console.log(anchor.getProvider().wallet.publicKey.toString());
    const program = anchor.workspace.FwsRaffleProgram as Program<FwsRaffleProgram>;
    const raffleAccount = anchor.web3.Keypair.generate();
    const payer = anchor.web3.Keypair.generate();

    const buff_holders = holders.map((minter) => {
        return new PublicKey(minter);
    });
    let mint = null;

    it('Initializes test state', async () => {
        mint = await createMint(provider);
        console.log(`Mint: ${mint.toString()}`);
    });

    it('Create!', async () => {
        console.log(`Raffle Key: ${raffleAccount.publicKey}`);
        const commissioner = 0;
        const franchise = 1;
        const suite = 2;
        try {
            const tx = await program.rpc.create(new anchor.BN(franchise), {
                accounts: {
                    raffleAuthority: payer.publicKey,
                    raffleAccount: raffleAccount.publicKey,
                },
                instructions: [await program.account.raffleAccount.createInstruction(raffleAccount)],
                signers: [raffleAccount, payer],
            });
            console.log(`Transaction: ${tx}`);
        } catch (e) {
            console.log(e);
        }
        const _raffleAccount = await program.account.raffleAccount.fetch(raffleAccount.publicKey);
        console.log(`Created Raffle Account ${_raffleAccount.pubkey.toString()}`);
    });
    it('Add Raffle Entry!', async () => {
        console.log(`Adding raffle entries for: ${raffleAccount.publicKey.toString()}`);
        for (let k = 0; k < buff_holders.length; k += 25) {
			//buff_holders.slice(k, k + 25)
            await program.rpc.addRaffleEntry([new PublicKey('6taK1FRm7PGFWP3yKgsWGeaApFWJN8BqRnMjVwU4PbPE')], {
                accounts: {
                    raffleAccount: raffleAccount.publicKey,
                    raffleAuthority: raffleAccount.publicKey,
                },
                signers: [raffleAccount],
            });
        }

        const _raffleAccount = await program.account.raffleAccount.fetch(raffleAccount.publicKey);
        console.log(`Head ${_raffleAccount.head}`);
        console.log(`Tail ${_raffleAccount.tail}`);
        // const holders = _raffleAccount.holders as Array<any>;
        // for (let i = 0; i < 15; i++) {
        //     console.log(holders[i]);
        // }
    });
    it('Draw!', async () => {
        console.log(`Drawing for raffle: ${raffleAccount.publicKey}`);
        const _pre_raffleAccount = await program.account.raffleAccount.fetch(raffleAccount.publicKey);
        await anchor.Provider.env()
            .connection.confirmTransaction(
                await anchor.Provider.env().connection.requestAirdrop(payer.publicKey, 10000000000),
                'processed'
            )
            .catch((e) => console.log(`Could not fund: ${e}`));
        try {
            const tx = await program.rpc.draw(new anchor.BN(1), {
                accounts: {
                    raffleAccount: _pre_raffleAccount.pubkey,
                    raffleAuthority: payer.publicKey,
                    recentBlockhashes: anchor.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
                },
                signers: [payer],
            });
            console.log('Your transaction signature', tx);
        } catch (e) {
            console.log(`Draw Error:  ${e}`);
        }
        const _raffleAccount = await program.account.raffleAccount.fetch(raffleAccount.publicKey);
        console.log(`Raffle Winner: ${_raffleAccount.raffleWinner}`);
        console.log(`Valid Raffle Accounts: ${_raffleAccount.head}`);
        const holders = _raffleAccount.holders as Array<any>;
        //Show all accounts that were entered into the raffle.
        // for(let index =0; index<_raffleAccount.head.toNumber(); index++){
        // 	console.log(holders[index].holder.toString())
        // }
    });
    it('Send Reward!', async () => {
		let winnerToken = null;
        const _raffleAccount = await program.account.raffleAccount.fetch(raffleAccount.publicKey);
		try{
			winnerToken = await createTokenAccount(provider, mint, _raffleAccount.raffleWinner);
			console.log(`Winner Token ${winnerToken}`)
		}catch(e){
			console.log(`Could not create token account for winner: ${e}`)
		}
        try {
            const tx = await program.rpc.sendReward(new anchor.BN(1), {
                accounts: {
                    raffleAccount: raffleAccount.publicKey,
                    raffleAuthority: raffleAccount.publicKey,
                    raffleWinner: winnerToken,
                    rewardMint: mint,
                    rewardMintAuthority: provider.wallet.publicKey,
                    tokenProgram: TOKEN_PROGRAM_ID,
                },
                signers: [raffleAccount],
            });
            console.log('Your transaction signature', tx);
        } catch (e) {
            console.log(`Error ${e}`);
        }
        console.log();
    });
});

async function createMint(provider, authority?) {
    if (authority === undefined) {
        authority = provider.wallet.publicKey;
    }
    const mint = anchor.web3.Keypair.generate();
    // while (!mint.publicKey.toBase58().startsWith('FWS')) {
	// 	console.log(mint.publicKey.toBase58());
    //     mint = Keypair.generate();
    // }
    const instructions = await createMintInstructions(provider, authority, mint.publicKey);

    const tx = new anchor.web3.Transaction();
    tx.add(...instructions);

    await provider.send(tx, [mint]);

    return mint.publicKey;
}

async function createMintInstructions(provider, authority, mint) {
    const instructions = [
        anchor.web3.SystemProgram.createAccount({
            fromPubkey: provider.wallet.publicKey,
            newAccountPubkey: mint,
            space: 82,
            lamports: await provider.connection.getMinimumBalanceForRentExemption(82),
            programId: TOKEN_PROGRAM_ID,
        }),
        SERUM.TokenInstructions.initializeMint({
            mint,
            decimals: 0,
            mintAuthority: authority,
        }),
    ];
    return instructions;
}
async function createTokenAccount(provider, mint, owner) {
    const vault = anchor.web3.Keypair.generate();
    const tx = new anchor.web3.Transaction();
    tx.add(...(await createTokenAccountInstrs(provider, vault.publicKey, mint, owner)));
    await provider.send(tx, [vault]);
    return vault.publicKey;
}

async function createTokenAccountInstrs(provider, newAccountPubkey, mint, owner, lamports?) {
    if (lamports === undefined) {
        lamports = await provider.connection.getMinimumBalanceForRentExemption(165);
    }
    return [
        anchor.web3.SystemProgram.createAccount({
            fromPubkey: provider.wallet.publicKey,
            newAccountPubkey,
            space: 165,
            lamports,
            programId: TOKEN_PROGRAM_ID,
        }),
        SERUM.TokenInstructions.initializeAccount({
            account: newAccountPubkey,
            mint,
            owner,
        }),
    ];
}
