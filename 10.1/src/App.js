import Video from "./components/Video.component";
import "./styles/App.css";
const videoUrl =
  "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

function App() {
  return (
    <div className="App">
      <Video videoUrl={videoUrl} />
    </div>
  );
}

export default App;
