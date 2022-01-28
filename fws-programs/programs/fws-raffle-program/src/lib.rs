use anchor_lang::prelude::*;
use anchor_spl::token::{self, CloseAccount, Mint, SetAuthority, Token, TokenAccount, Transfer};
use std::str;
use anchor_lang::accounts::loader::Loader;

declare_id!("7HGqiMfjvBZC8632q2YEePfU2m5BhzTmjkY11wsXyS8q");

#[program]
pub mod fws_raffle_program {
	use super::*;
	pub fn create(ctx: Context<Create>) -> ProgramResult {
		
		let mut raffle = ctx.accounts.raffle_account.load_init()?;
		raffle.raffle_authority = ctx.accounts.raffle_authority.key();
		// raffle.raffle_authority = *ctx.accounts.raffle_authority.key;
		// raffle.claimed = false;
		// ctx.accounts.raffle_account.raffle_authority = *ctx.accounts.raffle_authority.key;
		// ctx.accounts.raffle_account.claimed = false;
		// let holders : Vec<RaffleAccountData> = vec![];
		// ctx.accounts.raffle_account.holders = holders;
		// ctx.accounts.raffle_account.reward_mint = *ctx.accounts.reward_mint.to_account_info().key;
		// ctx.accounts.raffle_account.reward_authority_bump = ;
		msg!(
			"Raffle Account Created: {}", ctx.accounts.raffle_account.key()
		);
		Ok(())
	}

	pub fn add_raffle_entry(ctx: Context<AddRaffleEntry>, holders: Vec<Pubkey>) -> ProgramResult {
		let mut raffle_account = ctx.accounts.raffle_account.load_mut()?;

		for pubkey in holders{
			let raffle_holder = RaffleAccountData { holder: pubkey };
			raffle_account.append(raffle_holder);
		};
		
		Ok(())
	}
	pub fn draw(ctx: Context<Draw>, holders: Vec<Vec<u8>>) -> ProgramResult {

		// for buffer in holders {
		// 	let tmp_buffer = buffer.as_slice();
		// 	let mint = str::from_utf8(tmp_buffer);
		// 	// if raffle_account.holders.is_some(){

		// 	// }
		// 	msg!("{:?}", mint);
		// }
		// msg!("account: {}", ctx.accounts.authority.key);

		Ok(())
		// Err((MyError))
	}
	pub fn claim(ctx: Context<Claim>) -> ProgramResult {
		Ok(())
	}
}

#[derive(Accounts)]
pub struct Create<'info> {
	#[account(mut, signer)]
	raffle_authority: AccountInfo<'info>,
	#[account(zero)]
	raffle_account: AccountLoader<'info, RaffleAccount>,
	// reward_mint: Account<'info, Mint>,
	// reward_authority: AccountInfo<'info>,
	// pub system_program: AccountInfo<'info>,
	// pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct Draw<'info> {
	#[account(signer)]
	authority: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct Claim<'info> {
	#[account(signer,
	constraint = raffle_account.to_account_info().key == authority.key )]
	authority: AccountInfo<'info>, //winner of the raffle
	raffle_account: AccountLoader<'info, RaffleAccount>,
}

#[derive(Accounts)]
#[instruction(holders: Vec<Pubkey>)]
pub struct AddRaffleEntry<'info> {
	#[account(mut)]
	raffle_account: AccountLoader<'info, RaffleAccount>,
	raffle_authority: Signer<'info>,
}

#[account(zero_copy)]
pub struct RaffleAccount {
	head: u64,
    tail: u64,
	raffle_authority: Pubkey, //32
	// pub spl_mint: Pubkey,      //32
	// pub raffle_winner: Pubkey, //32
	// claimed: bool,  //1
	// pub timestamp: i64, //8
	// pub reward_mint: Pubkey,   //32
	// pub reward_authority_bump: u8, //8
	holders: [RaffleAccountData; 10000],
}

#[account(zero_copy)]
pub struct RaffleAccountData {
	pub holder: Pubkey,
}

impl RaffleAccount {
    fn append(&mut self, holder: RaffleAccountData) {
        self.holders[RaffleAccount::index_of(self.head)] = holder;
        if RaffleAccount::index_of(self.head + 1) == RaffleAccount::index_of(self.tail) {
            self.tail += 1;
        }
        self.head += 1;
    }
    fn index_of(counter: u64) -> usize {
        std::convert::TryInto::try_into(counter % 10000).unwrap()
    }
}

#[error]
pub enum ErrorCode {
    #[msg("No Data")]
    NoDataError,
}