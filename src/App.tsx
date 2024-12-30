import { MouseEvent, useCallback } from "react";

import ImageItem from "./components/ImageItem";
import VerticalButtonSlider from "./components/VerticalButtonSlider";
import VerticalSlider from "./components/VerticalSlider";
import useRandomImageLoader from "./hooks/useRandomImageLoader";

export default function App() {
  const images = useRandomImageLoader(30);

  const handleClick = useCallback((e: MouseEvent<HTMLImageElement>) => {
    console.log(e.target);
  }, []);

  return (
    <>
      <VerticalSlider title="이미지 슬라이더">
        {images.map(({ id, src }) => (
          <ImageItem key={id} src={src} onClick={handleClick} />
        ))}
      </VerticalSlider>

      <VerticalButtonSlider title="이미지 슬라이더">
        {images.map(({ id, src }) => (
          <ImageItem key={id} src={src} onClick={handleClick} />
        ))}
      </VerticalButtonSlider>
    </>
  );
}
