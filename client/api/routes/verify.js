var express = require('express');
var router = express.Router();
var path = require('path');
var nacl = require('tweetnacl');
// const nacl = (...args) => import('tweetnacl').then(({default:nacl}) => nacl(...args));
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
// const getJson = bent('json');
const { clientId, guildId, token, clientSecret } = require('../static');
const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

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
			res.json({user:user, oauthData: oauthData});
        } catch (error) {
            console.error(error);
			res.status(400).json({user:user, oauthData: oauthData});
        }
    }
    // res.json({"message":"ok"});
});

router.post('/register', async function (req, res, next){
	const user = req.body.userObj;
	
	const msgBytes = new Uint8Array(req.body.msgBytes.data);
	const msgSig = new Uint8Array(req.body.msgSig.data);
	const address = new Uint8Array(req.body.address.data);

	const verified = nacl.sign.detached.verify(msgBytes, msgSig, address);
	if(verified){
		//now you can add this user to the database.
		res.status(200).json({status:'success'});
	}else{
		res.status(400).json({status:'Signature verification failed'})
	}

	
});

module.exports = router;
