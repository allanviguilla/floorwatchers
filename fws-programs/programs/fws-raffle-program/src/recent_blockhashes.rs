use anchor_lang::prelude::*;

pub fn last_blockhash_accessor(recent_blockhashes: &AccountInfo) -> Result<[u8; 32], ProgramError> {
    let bytes = recent_blockhashes.try_borrow_data()?;
    let mut entry_length = [0u8; 8];
    entry_length.copy_from_slice(&bytes[0..8]);
    if u64::from_le_bytes(entry_length) == 0 {
        // Impossible
        return Err(ProgramError::InvalidAccountData);
    }
    let mut last_blockhash = [0u8; 32];
    last_blockhash.copy_from_slice(&bytes[8..(8 + 32)]);
    Ok(last_blockhash)
}