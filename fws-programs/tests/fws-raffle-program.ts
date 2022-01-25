import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { FwsRaffleProgram } from '../target/types/fws_raffle_program';
import { NodeWallet } from '@project-serum/anchor/dist/cjs/provider';
import { PublicKey } from '@solana/web3.js';

describe('fws-raffle-program', () => {
    // Configure the client to use the local cluster.
    anchor.setProvider(anchor.Provider.env());

    const program = anchor.workspace.FwsRaffleProgram as Program<FwsRaffleProgram>;

    const payer = anchor.web3.Keypair.generate();
	//replace this with array of holders 
    const holders = ['lalala', 'astasfa'];
    const buff_holders = holders.map((minter) => {
        return Buffer.from(minter);
    });
	// new anchor.BN(minters)
    console.log(buff_holders);
    it('Draw!', async () => {
        await anchor.Provider.env()
            .connection.confirmTransaction(
                await anchor.Provider.env().connection.requestAirdrop(payer.publicKey, 10000000000),
                'processed'
            )
            .catch((e) => console.log(e));
        try {
            const tx = await program.rpc.draw(
				buff_holders, 
				{
                accounts: {
                    authority: payer.publicKey,
                },
                signers: [payer],
            });
            console.log('Your transaction signature', tx);
        } catch (e) {
            console.log(`Error ${e}`);
        }
    });
});
