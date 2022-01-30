import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { FwsRaffleProgram } from '../target/types/fws_raffle_program';
import { PublicKey } from '@solana/web3.js';
import * as fs from 'fs';

describe('fws-raffle-program', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const holders = require('./raffle_holder_small.json');

    // Configure the client to use the local cluster.
    anchor.setProvider(anchor.Provider.env());

    const program = anchor.workspace.FwsRaffleProgram as Program<FwsRaffleProgram>;
    const raffleAccount = anchor.web3.Keypair.generate();
    const payer = anchor.web3.Keypair.generate();
    const buff_holders = holders.map((minter) => {
        return new PublicKey(minter);
    });
    it('Create!', async () => {
        console.log(raffleAccount.publicKey);
		const commissioner = 0;
		const franchise = 1;
		const suite = 2;
        try {
            const tx = await program.rpc.create(
				new anchor.BN(commissioner),
				{
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
    });
    it('Add Raffle Entry!', async () => {
        for (let k = 0; k < buff_holders.length; k += 25) {
            await program.rpc.addRaffleEntry(buff_holders.slice(k, k + 25), {
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
        await anchor.Provider.env()
            .connection.confirmTransaction(
                await anchor.Provider.env().connection.requestAirdrop(payer.publicKey, 10000000000),
                'processed'
            )
            .catch((e) => console.log(e));
        try {
            const tx = await program.rpc.draw({
                accounts: {
                    raffleAuthority: payer.publicKey,
                    raffleAccount: raffleAccount.publicKey,
                    recentBlockhashes: anchor.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
                },
                signers: [payer],
            });
            console.log('Your transaction signature', tx);
        } catch (e) {
            console.log(`Error ${e}`);
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
});
