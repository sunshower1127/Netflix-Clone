import { MouseEvent, useCallback } from "react";

import ImageItem from "./components/ImageItem";
import VerticalSlider from "./components/VerticalSlider";
import useRandomImageLoader from "./hooks/useRandomImageLoader";

export default function App() {
  const images = useRandomImageLoader(10);

  const handleClick = useCallback((e: MouseEvent<HTMLImageElement>) => {
    console.log(e.target);
  }, []);

  return (
    <VerticalSlider title="이미지 슬라이더">
      {images.map(({ id, src }) => (
        <ImageItem key={id} src={src} onClick={handleClick} />
      ))}
    </VerticalSlider>
  );
}
