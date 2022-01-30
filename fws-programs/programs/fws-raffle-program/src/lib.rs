pub mod randomness;
pub mod recent_blockhashes;
use anchor_lang::prelude::*;
use anchor_lang::solana_program::sysvar;
use anchor_spl::token::{self, CloseAccount, Mint, SetAuthority, Token, TokenAccount, Transfer};

declare_id!("AUV6acTchdGPST1pexjEMTJ8KehrjQHJoXwiMntdYJ7p");

/// Raffle Types
/// 0 - Commissioner
/// 1 - Franchise
/// 2 - Suite

#[program]
pub mod fws_raffle_program {
	use super::*;
	pub fn create(ctx: Context<Create>, raffle_type: u64) -> ProgramResult {
		
		let mut raffle = ctx.accounts.raffle_account.load_init()?;
		raffle.pubkey = ctx.accounts.raffle_account.key();
		raffle.raffle_authority = ctx.accounts.raffle_authority.key();
		raffle.raffle_type = raffle_type;
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
	pub fn draw(ctx: Context<Draw>) -> ProgramResult {
		let raffle_account = ctx.accounts.raffle_account.load_mut();
		let mut account = raffle_account.unwrap();
		let accounts_end = account.head as usize;
		let randomness =
            recent_blockhashes::last_blockhash_accessor(&ctx.accounts.recent_blockhashes)?;
		let winner_rand = randomness::expand(randomness, accounts_end as u32);
        let winner_index = winner_rand % accounts_end as u32;

		msg!("Total Raffle entries: {}", accounts_end);
		msg!("Winner Index: {:?}", winner_index);
		msg!("Winner: {:?}", account.holders[winner_index as usize]);
		let winner = account.holders[winner_index as usize];
		account.raffle_winner = winner.holder;
		Ok(())
	}
	pub fn claim(ctx: Context<Claim>) -> ProgramResult {
		Ok(())
	}
}

#[derive(Accounts)]
#[instruction(raffle_type: u64)]
pub struct Create<'info> {
	#[account(mut, signer)]
	raffle_authority: AccountInfo<'info>,
	#[account(zero)]
	raffle_account: AccountLoader<'info, RaffleAccount>,
}

#[derive(Accounts)]
pub struct Draw<'info> {
	#[account(mut)]
	raffle_account: AccountLoader<'info, RaffleAccount>,
	raffle_authority: Signer<'info>,
	#[account(address = sysvar::recent_blockhashes::ID)]
    pub recent_blockhashes: UncheckedAccount<'info>,
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
	pub pubkey: Pubkey,
	pub raffle_type: u64,
	pub raffle_authority: Pubkey, //32
	// pub spl_mint: Pubkey,      //32
	pub raffle_winner: Pubkey, //32
	// claimed: bool,  //1
	// pub timestamp: i64, //8
	// pub reward_mint: Pubkey,   //32
	// pub reward_authority_bump: u8, //8
	holders: [RaffleAccountData; 3333],
}

#[account(zero_copy)]
#[derive(Debug)]
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