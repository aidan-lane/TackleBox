CREATE TABLE IF NOT EXISTS scan_cache (
    urlHash VARCHAR(96) PRIMARY KEY NOT NULL,
    score INTEGER DEFAULT 0 NOT NULL,
    -- bit flag to hold category types
    -- parking    000001
    -- spamming   000010
    -- malware    000100
    -- phishing   001000
    -- suspicious 010000
    -- adult      100000
    category SMALLINT DEFAULT 0 NOT NULL
);
