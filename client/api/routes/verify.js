var express = require('express');
var router = express.Router();
var path = require('path');
// const bent = require('bent');
// const post = bent('https://discord.com', 'POST');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
// const getJson = bent('json');
const { clientId, guildId, token, clientSecret } = require('../static');
const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

router.post('/verify', async function (req, res, next) {
    let code = req.body.code;
    console.log(clientId);
    console.log(clientSecret);
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
			res.json(user);
        } catch (error) {
            // NOTE: An unauthorized token will not throw an error;
            // it will return a 401 Unauthorized response in the try block above
            console.error(error);
        }
    }
    // res.json({"message":"ok"});
});

module.exports = router;
