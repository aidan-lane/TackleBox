import './App.css';
import Scene from "./Scene";
import Document from "./Document";
import DownloadButtons from "./DownloadButtons";

function App() {
  return (
    <div className="App">
        <DownloadButtons></DownloadButtons>
        <Scene></Scene>
        <Document></Document>
    </div>
  );
}

export default App;
