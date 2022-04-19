import './Document.css'

function Document() {
	return (
		<div className="doc-container">
			<div className="doc-content">
				<h1>FAQ</h1>
				<h2>What is TackleBox?</h2>
				<p>TackleBox is a browser extension that aims to protect you against unknowingly or accidentally
					clicking on malicious links. TackleBox was developed as a school project in Spring of 2022, and
					there is no guarantee that it will be maintained for the long term.
				</p>
				<h2>How does TackleBox work?</h2>
				<p>When you open a webpage, no matter how you found it, TackleBox will automatically perform checks to
					see if it is safe before allowing you to visit the webpage. The URL to the webpage
					you wish to visit is sent to a third-party phishing/malware scanner which quickly checks for
					malicious code. If none is found, you're let through! Otherwise, a warning will pop up, and it will
					ask you if you are sure that you want to continue.
				</p>
				<h2>Why do I need TackleBox?</h2>
				<p>TackleBox can be useful for anyone, no matter how skilled you are with technology. If you or one of
					your family members is not trained at detecting phishing scams or malicious webpages, this is a
					perfect tool for you. Even if you are confident that you can recognize a scam when you see one,
					accidents happen. TackleBox can help protect you against these.
				</p>
				<h2>What are the privacy implications?</h2>
				<p>While using TackleBox, all URLs are sent to a third party (IPQualityScore). You may view their
					privacy policy <a href="https://www.ipqualityscore.com/privacy-policy">here</a>. Our third party may
					attempt to open the webpage on their end, in order to scan it for malicious content. This includes
					webpages containing sensitive content, such as passwords. If you're going to open a webpage that
					contains sensitive content and you would NOT like TackleBox to scan it, at the moment, you must
					temporarily disable TackleBox. In the future, it is possible that TackleBox will allow whitelisting
					of certain URLs or use more advanced methods that don't involve sending your URLs to a third party.
				</p>
				<p>On our end, TackleBox does not store any information about the webpage you visited beyond a timestamp
					and an irreversible hash of the URL. Visited webpages are not associated with a particular person.
					This means, while we do store when you access a webpage, we cannot see who you are, what webpage you
					are visiting, or connect you to any of the webpages you have previously visited.
				</p>

				<div className="open-source">
					<a href="https://github.com/aidan-lane/TackleBox"><p>Open source on GitHub</p></a>
				</div>
			</div>
		</div>
	)
}

export default Document;
