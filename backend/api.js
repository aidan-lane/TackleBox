const express = require("express");
const crypto = require('crypto');
const fetch = require('node-fetch');
const pool = require('./db');
router = express.Router();

router.get("/score/*", async (req, res) => {
	const passedUrl = encodeURIComponent(req.params[0]);
	// URLs are hashed for privacy -- URLs can contain private info, particularly in the query string.
	const urlHash = crypto.createHash('sha256').update(passedUrl).digest('hex');
	const apiUrl = `https://ipqualityscore.com/api/json/url/${process.env.API_KEY}/${passedUrl}`;

	const connection = await pool.connect();
	const cachedResult = await connection.query('SELECT * FROM scan_cache WHERE hash=$1', [urlHash]);
	if(cachedResult.rowCount > 0) {
		await connection.release();
		res.json(cachedResult.rows[0]);
		return;
	}

	const apiResult = await (await fetch(apiUrl)).json();
	if(apiResult.success) {
		const ourData = {
			hash: urlHash,
			score: apiResult.risk_score,
			parking: apiResult.parking,
			spam: apiResult.spamming,
			malware: apiResult.malware,
			phishing: apiResult.phishing,
			suspicious: apiResult.suspicious,
			adult: apiResult.adult,
			category: apiResult.category
		};

		await connection.query('INSERT INTO scan_cache (hash, score, parking, spam, malware, phishing, suspicious, adult, category) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
			[ourData.hash, ourData.score, ourData.parking, ourData.spam, ourData.malware, ourData.phishing,
				ourData.suspicious, ourData.adult, ourData.category]);

		await connection.release();
		res.json(ourData);
	} else {
		await connection.release();
		res.status(502);
		console.error('IPQualityScore error:', apiResult.message, 'Request ID:', apiResult.request_id);
		res.json({
			error: 'Gateway error. Contact a developer of TackleBox for more info.'
		});
	}
});

module.exports = router;
