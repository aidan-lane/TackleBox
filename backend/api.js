const express = require("express");
const crypto = require('crypto');
const fetch = require('node-fetch');
const pool = require('./db');
router = express.Router();

router.get("/score/*", async (req, res) => {
	// URLs are hashed for privacy -- URLs can contain private info, particularly in the query string.
	const urlHash = crypto.createHash('sha256', req.params.url).digest().toString('hex');
	const apiUrl = `https://ipqualityscore.com/api/json/url/${process.env.API_KEY}/${req.params.url}`;

	console.log(req.params[0]);
	//const result = await fetch(apiUrl);

});

module.exports = router;
