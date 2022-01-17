import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { FwsVerify } from '../target/types/fws_verify';

describe('fws-verify', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.FwsVerify as Program<FwsVerify>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
