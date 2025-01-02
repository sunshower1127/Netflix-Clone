import { LeftArrowIcon, RightArrowIcon } from "@/components/RemixIcons";
import { DivProp } from "@/types/htmlProps";
import { twToPx, vwToPx } from "@/utils/funcs";
import clsx from "clsx";
import { Children, useRef, useState } from "react";

const VerticalButtonSlider = ({ children, ...props }: DivProp) => {
  const isReverse = useRef(false);

  const [index, setIndex] = useState(0);

  const itemWidth = twToPx(36 + 10); // width + gap.
  const itemRemainder = vwToPx(100) % itemWidth;
  const itemCount = () => Math.floor(vwToPx(100) / itemWidth);
  const moveX = -index * itemWidth;
  const childrenArray = Children.toArray(children);

  const handleIncrementPage = () => {
    const ic = itemCount();
    if (index + ic + ic >= childrenArray.length) {
      setIndex(childrenArray.length - ic);
      isReverse.current = true;
    } else {
      setIndex((prev) => prev + ic);
    }
  };

  const handleDecrementPage = () => {
    const ic = itemCount();
    if (index - ic <= 0) {
      isReverse.current = false;
      setIndex(0);
    } else {
      setIndex((prev) => prev - ic);
    }
  };

  const btnCls =
    "absolute top-0 z-10 borderbg-black w-10 h-full opacity-0 hover:opacity-50";

  return (
    <article className="relative" {...props}>
      <button className={clsx(btnCls, "left-0")} onClick={handleDecrementPage}>
        <LeftArrowIcon />
      </button>
      <nav className="overflow-hidden">
        <ul
          className="flex p-5 gap-10 duration-1000 ease-out"
          style={{
            transform: `translateX(${
              moveX + (isReverse.current ? itemRemainder : 0)
            }px)`,
          }}
        >
          {childrenArray}
        </ul>
      </nav>
      <button className={clsx(btnCls, "right-0")} onClick={handleIncrementPage}>
        <RightArrowIcon />
      </button>
    </article>
  );
};

export default VerticalButtonSlider;
