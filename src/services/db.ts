import img1 from "@/assets/random_images/1.jpg";
import img2 from "@/assets/random_images/2.jpg";
import img3 from "@/assets/random_images/3.jpg";
import img4 from "@/assets/random_images/4.jpg";
import img5 from "@/assets/random_images/5.jpg";
import img6 from "@/assets/random_images/6.jpg";
import img7 from "@/assets/random_images/7.jpg";
import img8 from "@/assets/random_images/8.jpg";
import { delay, getRandomNum } from "@/utils/funcs";

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8];

export const fetchRandomImage = async () => {
  await delay(getRandomNum(100, 7000));
  return imgs[getRandomNum(0, imgs.length - 1)] || "";
};
