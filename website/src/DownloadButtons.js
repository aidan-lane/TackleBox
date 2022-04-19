import './DownloadButton.css'
import chrome from './images/chrome_webstore.png'
import firefox from './images/firefox_addon.svg'

function DownloadButtons() {
	return <div className="download-buttons">
		<a href="https://google.com/">
			<img src={chrome}  alt="Go to Chrome Webstore"/>
		</a>
		<a href="https://mozilla.com">
			<img src={firefox}  alt="Go to Firefox Add-ons Store"/>
		</a>
	</div>
}

export default DownloadButtons;
