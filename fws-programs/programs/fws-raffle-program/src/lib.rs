use anchor_lang::prelude::*;
use anchor_spl::token::{self, CloseAccount, Mint, SetAuthority, Token, TokenAccount, Transfer};
use std::str;

declare_id!("7HGqiMfjvBZC8632q2YEePfU2m5BhzTmjkY11wsXyS8q");

#[program]
pub mod fws_raffle_program {
	use super::*;
	pub fn create(ctx: Context<Create>) -> ProgramResult {
		ctx.accounts.raffle_account.raffle_authority = *ctx.accounts.raffle_authority.key;
		ctx.accounts.raffle_account.claimed = false;
		// ctx.accounts.raffle_account.reward_mint = *ctx.accounts.reward_mint.to_account_info().key;
		// ctx.accounts.raffle_account.reward_authority_bump = ;
		msg!("Raffle Account Created: {}", ctx.accounts.raffle_account.raffle_authority);
		Ok(())
	}

	pub fn add_raffle_entry(ctx: Context<AddRaffleEntry>, holders: Vec<Vec<u8>>) -> ProgramResult{
		let raffle_account = &mut ctx.accounts.raffle_account;
		let account = raffle_account.to_account_info();
		// let mut data = account.data.borrow();

		msg!("Data, {:?}", account);

		for buffer in holders {
			let tmp_buffer = buffer.as_slice();
			let mint = str::from_utf8(tmp_buffer);
			// if raffle_account.holders.is_some(){

			// }
			msg!("{:?}", mint);
		}
		msg!("account: {}", ctx.accounts.raffle_authority.key);
		Ok(())
	}
	// pub fn draw(ctx: Context<Draw>, holders: Vec<Vec<u8>>) -> ProgramResult {

	// 	// for buffer in holders {
	// 	// 	let tmp_buffer = buffer.as_slice();
	// 	// 	let mint = str::from_utf8(tmp_buffer);
	// 	// 	// if raffle_account.holders.is_some(){

	// 	// 	// }
	// 	// 	msg!("{:?}", mint);
	// 	// }
	// 	// msg!("account: {}", ctx.accounts.authority.key);

	// 	Ok(())
	// 	// Err((MyError))
	// }
	// pub fn claim(ctx: Context<Claim>) -> ProgramResult {
	// 	Ok(())
	// }
}

#[derive(Accounts)]
pub struct Create<'info> {
	#[account(mut, signer)]
	raffle_authority: AccountInfo<'info>,
	#[account(zero)]
	raffle_account: Account<'info, RaffleAccount>,
	// reward_mint: Account<'info, Mint>,
	// reward_authority: AccountInfo<'info>,
	pub system_program: AccountInfo<'info>,
	pub rent: Sysvar<'info, Rent>,
}

// #[derive(Accounts)]
// pub struct Draw<'info> {
// 	#[account(signer)]
// 	authority: AccountInfo<'info>,
// }

// #[derive(Accounts)]
// pub struct Claim<'info> {
// 	#[account(signer,
// 	constraint = raffle_account.to_account_info().key == authority.key )]
// 	authority: AccountInfo<'info>, //winner of the raffle
// 	raffle_account: Account<'info, RaffleAccount>,
// }

#[derive(Accounts)]
#[instruction(holders: Vec<Vec<u8>>)]
pub struct AddRaffleEntry<'info> {
    #[account(mut)]
    raffle_account: Account<'info, RaffleAccount>,
    raffle_authority: Signer<'info>,
}

#[account]
pub struct RaffleAccount {
	pub raffle_authority: Pubkey,     //32
	// pub spl_mint: Pubkey,      //32
	// pub raffle_winner: Pubkey, //32
	pub claimed: bool,         //1
	pub timestamp: i64,        //8
	// pub reward_mint: Pubkey,   //32
	// pub reward_authority_bump: u8, //8
	pub holders: Option<Vec<RaffleAccountData>>
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct RaffleAccountData {
	pub holder: Pubkey
}