import ColorChangingImage from "./components/ColorChangingImage.component";
import "./styles/App.css";
import imageOneColor from "./assets/images/color1.jpg";
import imageOneNoColor from "./assets/images/bw1.jpg";
import imageTwoColor from "./assets/images/color2.jpg";
import imageTwoNoColor from "./assets/images/bw2.jpg";

function App() {
  return (
    <div className="App">
      <div className="image-container">
        <ColorChangingImage
          noColorImage={imageOneNoColor}
          colorImage={imageOneColor}
        />
        <ColorChangingImage
          noColorImage={imageTwoNoColor}
          colorImage={imageTwoColor}
        />
      </div>
    </div>
  );
}

export default App;
