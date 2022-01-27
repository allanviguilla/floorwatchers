import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { FwsRaffleProgram } from '../target/types/fws_raffle_program';
import { NodeWallet } from '@project-serum/anchor/dist/cjs/provider';
import { PublicKey } from '@solana/web3.js';

describe('fws-raffle-program', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const holders = require('./holders.json');

    // Configure the client to use the local cluster.
    anchor.setProvider(anchor.Provider.env());

    const program = anchor.workspace.FwsRaffleProgram as Program<FwsRaffleProgram>;
    const raffleAccount = anchor.web3.Keypair.generate();
    const payer = anchor.web3.Keypair.generate();
    //replace this with array of holders
    // const holders = ['lalala', 'astasfa'];
    const buff_holders = holders.map((minter) => {
        return Buffer.from(minter);
    });
    // new anchor.BN(minters)
    // console.log(buff_holders);
    it('Create!', async () => {
        console.log(raffleAccount.publicKey);
        try {
            const tx = await program.rpc.create({
                accounts: {
                    raffleAuthority: payer.publicKey,
                    raffleAccount: raffleAccount.publicKey,
                    systemProgram: anchor.web3.SystemProgram.programId,
                    rent: anchor.web3.SYSVAR_RENT_PUBKEY,
                },
                instructions: [await program.account.raffleAccount.createInstruction(raffleAccount)],
                signers: [raffleAccount, payer],
            });
            console.log(`Transaction: ${tx}`);
        } catch (e) {
            console.log(e);
        }
        const _raffleAccount = await program.account.raffleAccount.fetch(raffleAccount.publicKey);
        console.log(_raffleAccount);
    });
    it('Add Raffle Entry!', async () => {
        await program.rpc.addRaffleEntry(buff_holders, {
            accounts: {
                raffleAccount: raffleAccount.publicKey,
                raffleAuthority: raffleAccount.publicKey,
            },
			signers: [raffleAccount]
        });
    });
    // it('Draw!', async () => {
    //     await anchor.Provider.env()
    //         .connection.confirmTransaction(
    //             await anchor.Provider.env().connection.requestAirdrop(payer.publicKey, 10000000000),
    //             'processed'
    //         )
    //         .catch((e) => console.log(e));
    //     try {
    //         const tx = await program.rpc.draw(buff_holders, {
    //             accounts: {
    //                 authority: payer.publicKey,
    //             },
    //             signers: [payer],
    //         });
    //         console.log('Your transaction signature', tx);
    //     } catch (e) {
    //         console.log(`Error ${e}`);
    //     }
    // });
});
