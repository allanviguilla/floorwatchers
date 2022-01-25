use anchor_lang::prelude::*;
use anchor_spl::token::{self, CloseAccount, Mint, SetAuthority, Token, TokenAccount, Transfer};
use std::str;

declare_id!("7HGqiMfjvBZC8632q2YEePfU2m5BhzTmjkY11wsXyS8q");

#[program]
pub mod fws_raffle_program {
    use super::*;
    // pub fn create(ctx: Context<Create>) -> ProgramResult {
	// 	ctx.accounts.raffle_account.authority = *ctx.accounts.authority.key;
	// 	ctx.accounts.raffle_account.claimed = false;
	// 	ctx.accounts.raffle_account.reward_mint = *ctx.accounts.reward_mint.to_account_info().key;
	// 	// ctx.accounts.raffle_account.reward_authority_bump = ;
    //     Ok(())
    // }
	
    pub fn draw(ctx: Context<Draw>, mints: Vec<Vec<u8>>) -> ProgramResult {
		msg!("Hello World!");
		for buffer in mints {
			let tmp_buffer = buffer.as_slice();
			let mint = str::from_utf8(tmp_buffer);

			msg!("{:?}", mint);
			
		}
		
		// msg!("{}", mints[1]);
		msg!("account: {}", ctx.accounts.authority.key);
		// let mut mint_list = vec!(mints);
        Ok(())
		// Err((MyError))
    }
    // pub fn claim(ctx: Context<Claim>) -> ProgramResult {

    //     Ok(())
    // }

}

// #[derive(Accounts)]
// pub struct Create<'info> {
// 	#[account(signer)]
// 	authority: AccountInfo<'info>,
// 	#[account(zero)]
// 	raffle_account: Account<'info, RaffleAccount>,
// 	reward_mint: Account<'info, Mint>,
// 	reward_authority: AccountInfo<'info>
// }

#[derive(Accounts)]
#[instruction(mints: Vec<Vec<u8>>)]
pub struct Draw<'info> {
	#[account(signer)]
	authority: AccountInfo<'info>,
}

// #[derive(Accounts)]
// pub struct Claim<'info> {
// 	#[account(signer,
// 	constraint = raffle_account.to_account_info().key == authority.key )]
// 	authority: AccountInfo<'info>, //winner of the raffle
// 	raffle_account: Account<'info, RaffleAccount>,
// }

// #[derive(Accounts)]
// pub struct SetMintAuth<'info> {
// 	#[account(signer)]
// 	authority: AccountInfo<'info>,
// 	mint_update_authority: AccountInfo<'info>,
// 	raffle_account: Account<'info, RaffleAccount>,
// }
// #[derive(Accounts)]
// pub struct SetSplMint<'info> {
// 	#[account(signer)]
// 	authority: AccountInfo<'info>,
// 	spl_mint: Account<'info, Mint>,
// 	raffle_account: Account<'info, RaffleAccount>,
// }

// #[account]
// pub struct RaffleAccount {
//     pub authority: Pubkey, //32
// 	pub spl_mint: Pubkey, //32 
// 	pub raffle_winner: Pubkey, //32 
// 	pub claimed: bool, //1
// 	pub timestamp: i64, //8
//     pub reward_mint: Pubkey, //32
//     pub reward_authority_bump: u8, //8
// 	// pub valid_minters: Vec<u8>
// }

#[error]
pub enum MyError {
    #[msg("This is an error message clients will automatically display")]
    Hello,
    HelloNoMsg = 123,
    HelloNext,
    HelloCustom,
}