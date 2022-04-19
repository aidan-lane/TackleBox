import './Scene.css'
import logo from "./images/tacklebox_l.png";
import dock from './images/scene_dock.svg';
import wavesForeground from './images/scene_waves_foreground.svg';
import wavesBackground from './images/scene_waves_background.svg';

function Scene() {
	return (
		<div>
			<img className="dock" src={dock} alt="scene" />
			<div className="waves">
				<img className="waves-foreground" src={wavesForeground} alt="scene" />
				<img className="waves-background" src={wavesBackground} alt="scene" />
			</div>
		</div>
	)
}

export default Scene;