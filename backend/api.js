const express = require("express");
const crypto = require('crypto');
const fetch = require('node-fetch');
const pool = require('./db');
router = express.Router();

router.get("/score/*", async (req, res) => {
	// TODO: This URL does not include query parameters, and perhaps URL anchors
	const passedUrl = req.params.url;
	// URLs are hashed for privacy -- URLs can contain private info, particularly in the query string.
	const urlHash = crypto.createHash('sha256', passedUrl).digest().toString('hex');
	const apiUrl = `https://ipqualityscore.com/api/json/url/${process.env.API_KEY}/${passedUrl}`;

	const connection = await pool.connect();
	const cachedResult = await connection.query('SELECT score FROM scan_cache WHERE urlHash=$1', [urlHash]);
	if(cachedResult.rowCount > 0) {
		// TODO return cached result
		await connection.release();
		return;
	}

	const apiResult = await fetch(apiUrl);
	await connection.release();
});

module.exports = router;
