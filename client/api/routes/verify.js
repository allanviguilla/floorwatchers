var express = require('express');
var router = express.Router();
var path = require('path');
var nacl = require('tweetnacl');
const solanaWeb3 = require('@solana/web3.js');
// const nacl = (...args) => import('tweetnacl').then(({default:nacl}) => nacl(...args));
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
// const getJson = bent('json');
const { clientId, guildId, token, clientSecret } = require('../static');
const { Client, Intents } = require('discord.js');
// const NFTGet = require('../utils/nft-get.ts');
const ssos_mints = require('../data/HRffLFfeTjMUfCUuPsoz2BEFgPVyR6SVfYZSx2Dwi2Gn_mint_accounts.json');
// const fws_mints = require('');
const dev_endpoint = process.env.dev_endpoint;
const prod_endpoint = process.env.prod_endpoint;
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN_PROGRAM_ID = require('@solana/spl-token').TOKEN_PROGRAM_ID;
router.post('/verify', async function (req, res, next) {
    let code = req.body.code;
    if (code) {
        try {
            const oauthResult = await fetch('https://discord.com/api/oauth2/token', {
                method: 'POST',
                body: new URLSearchParams({
                    client_id: clientId,
                    client_secret: clientSecret,
                    code,
                    grant_type: 'authorization_code',
                    redirect_uri: `http://localhost:1234`,
                    scope: 'identify',
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            const oauthData = await oauthResult.json();
            const userResult = await fetch('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `${oauthData.token_type} ${oauthData.access_token}`,
                },
            });
            const user = await userResult.json();
            res.json({ user: user, oauthData: oauthData });
        } catch (error) {
            console.error(error);
            res.status(400).json({ user: user, oauthData: oauthData });
        }
    }
    // res.json({"message":"ok"});
});

router.post('/register', async function (req, res, next) {
    const user = req.body.userObj;

    const msgBytes = new Uint8Array(req.body.msgBytes.data);
    const msgSig = new Uint8Array(req.body.msgSig.data);
    const address = new Uint8Array(req.body.address.data);

    const verified = nacl.sign.detached.verify(msgBytes, msgSig, address);
    if (verified) {
        //now you can add this user to the database.
        res.status(200).json({ status: 'success' });
    } else {
        res.status(400).json({ status: 'Signature verification failed' });
    }
});

router.post('/holder-check', async function (req, res, next) {
    const publicKey = new solanaWeb3.PublicKey(req.body.publicKey);
    const connection = new solanaWeb3.Connection(prod_endpoint)

    const tokens = await connection.getParsedTokenAccountsByOwner(publicKey, {
        programId: TOKEN_PROGRAM_ID,
    });
    const nfts = tokens.value
        .filter((t) => {
            const amount = t.account.data.parsed.info.tokenAmount;
            return amount.decimals === 0 && amount.uiAmount === 1;
        })
        .map((t) => ({
            address: new solanaWeb3.PublicKey(t.pubkey),
            mint: new solanaWeb3.PublicKey(t.account.data.parsed.info.mint),
        }));
	const verifiedNFTs = nfts.filter(t => ssos_mints.includes(t.mint.toString()));
	if(verifiedNFTs.length > 0){
		res.json({verifiedCount: verifiedNFTs.length, verified: true});
	}else{
		res.status(400).json({message:'No valid NFTs found', verified: false});
	}
    
});

module.exports = router;
