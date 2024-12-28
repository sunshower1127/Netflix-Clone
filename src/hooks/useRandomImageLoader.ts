import { useEffect, useState } from "react";
import { fetchRandomImage } from "../services/db";
import { getRandomNum } from "../utils/funcs";

interface ImageData {
  id: number;
  src: string;
}

const useRandomImageLoader = (num: number) => {
  const [images, setImages] = useState<ImageData[]>(
    [...Array(num)].map(() => ({ id: getRandomNum(0, 1000000), src: "" }))
  );

  useEffect(() => {
    let isMounted = true;
    images.forEach(async ({ id }) => {
      try {
        const src = await fetchRandomImage();
        if (!isMounted) return;
        setImages((prev) =>
          prev.map((image) => (image.id === id ? { id, src } : image))
        );
      } catch (error) {
        console.error(`이미지 ${id} 로딩 실패:`, error);
      }
    });
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return images;
};

export default useRandomImageLoader;
