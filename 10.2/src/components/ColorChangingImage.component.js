import { useRef } from "react";
import "./style.css";
const ColorChangingImage = ({ noColorImage, colorImage }) => {
  const imageRef = useRef();

  const handleHoverImage = () => {
    imageRef.current.src = colorImage;
  };

  const handleHoverLeave = () => {
    imageRef.current.src = noColorImage;
  };

  return (
    <>
      <img
        onMouseEnter={handleHoverImage}
        onMouseLeave={handleHoverLeave}
        ref={imageRef}
        src={noColorImage}
        alt="asa"
      />
    </>
  );
};

export default ColorChangingImage;
