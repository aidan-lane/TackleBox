CREATE TABLE IF NOT EXISTS scan_cache (
    hash VARCHAR(96) PRIMARY KEY NOT NULL,
    score INTEGER NOT NULL,
    parking BOOLEAN NOT NULL,
    spam BOOLEAN NOT NULL,
    malware BOOLEAN NOT NULL,
    phishing BOOLEAN NOT NULL,
    suspicious BOOLEAN NOT NULL,
    adult BOOLEAN NOT NULL,
    category VARCHAR(256) NOT NULL
);
