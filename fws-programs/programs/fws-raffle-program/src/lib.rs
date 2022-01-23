use anchor_lang::prelude::*;
use anchor_spl::token::{self, CloseAccount, Mint, SetAuthority, Token, TokenAccount, Transfer};
declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod fws_raffle_program {
    use super::*;
    pub fn create(ctx: Context<Create>) -> ProgramResult {
		ctx.accounts.raffle_account.authority = *ctx.accounts.authority.key;
		ctx.accounts.raffle_account.claimed = false;
		// ctx.accounts.raffle_account.reward_mint = ;
		// ctx.accounts.raffle_account.reward_authority_bump = ;
        Ok(())
    }
	
    pub fn draw(ctx: Context<Draw>) -> ProgramResult {

        Ok(())
    }
	pub fn set_mint_authority(ctx: Context<SetMintAuth>) -> ProgramResult {
		ctx.accounts.raffle_account.mint_authority = *ctx.accounts.mint_update_authority.to_account_info().key;
		Ok(())
	}
	pub fn set_spl_mint(ctx: Context<SetSplMint>) -> ProgramResult {
		ctx.accounts.raffle_account.spl_mint = *ctx.accounts.spl_mint.to_account_info().key;  
		Ok(())
	}
    pub fn claim(ctx: Context<Claim>) -> ProgramResult {

        Ok(())
    }

}

#[derive(Accounts)]
pub struct Create<'info> {
	#[account(signer)]
	authority: AccountInfo<'info>,
	#[account(zero)]
	raffle_account: Account<'info, RaffleAccount>,
	reward_mint: Account<'info, Mint>,
	reward_authority: AccountInfo<'info>
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
	raffle_account: Account<'info, RaffleAccount>,
}

#[derive(Accounts)]
pub struct SetMintAuth<'info> {
	#[account(signer)]
	authority: AccountInfo<'info>,
	mint_update_authority: AccountInfo<'info>,
	raffle_account: Account<'info, RaffleAccount>,
}
#[derive(Accounts)]
pub struct SetSplMint<'info> {
	#[account(signer)]
	authority: AccountInfo<'info>,
	spl_mint: Account<'info, Mint>,
	raffle_account: Account<'info, RaffleAccount>,
}

#[account]
pub struct RaffleAccount {
    pub authority: Pubkey, //32
	pub spl_mint: Pubkey, //32 
	pub mint_authority: Pubkey, //32
	pub raffle_winner: Pubkey, //32 
	pub claimed: bool, //1
	pub timestamp: i64, //8
    pub reward_mint: Pubkey, //32
    pub reward_authority_bump: u8, //8
}