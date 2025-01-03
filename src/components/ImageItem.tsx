import { ImgProp } from "@/types/htmlProps";
import clsx from "clsx";

const ImageItem = (props: ImgProp) => {
  return (
    <li className="">
      <img
        className={clsx(
          "w-36 h-52 object-cover rounded-lg cursor-pointer hover:scale-105 duration-200",
          !props.src && "invisible"
        )}
        {...props}
      />
    </li>
  );
};

export default ImageItem;
