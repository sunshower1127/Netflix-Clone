import { cn, getCssVar } from "@/lib/utils";
import { getThumbnailImageURL } from "@/service/image-getter";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import classes from "./button-slider.module.css";
import { Skeleton } from "./ui/skeleton";

function Container({ children, headerText }: React.PropsWithChildren & { headerText: string }) {
  const ulRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [itemCapacity, setItemCapacity] = useState(2);
  const itemLength = React.Children.count(children);

  useEffect(() => {
    const queries = [
      window.matchMedia("(width >= 40rem)"), // 괄호 닫기 추가
      window.matchMedia("(width >= 48rem)"),
      window.matchMedia("(width >= 64rem)"),
      window.matchMedia("(width >= 80rem)"),
    ];

    const handleChange = () => {
      setItemCapacity(+getCssVar({ ref: ulRef.current!, varName: "--item-capacity" }));
    };

    // 초기값 설정
    handleChange();

    // 이벤트 리스너 등록
    queries.forEach((query) => query.addEventListener("change", handleChange));

    // cleanup
    return () => queries.forEach((query) => query.removeEventListener("change", handleChange));
  }, []);

  const handlePageScroll = (opt: "left" | "right") => {
    if (!ulRef.current) return;
    const scrollContainer = ulRef.current;

    let newIndex: number;

    if (opt === "left") {
      newIndex = Math.max(0, index - itemCapacity);
    } else {
      newIndex = Math.min(itemLength - itemCapacity, index + itemCapacity);
    }

    scrollContainer.children[newIndex + 1].scrollIntoView({ behavior: "smooth", inline: "start" });

    // Ref로 바꿔도 작동 하는데, State가 더 시맨틱해서 씀.
    setIndex(newIndex);
  };

  return (
    <article className={cn("flex flex-col", classes["var-setter"])}>
      <header className="mx-[calc(var(--button-width)+var(--spacing))] flex justify-between">
        <h6 className="text-sm font-light">{headerText}</h6>
        <PageIndicator maxPage={Math.ceil(itemLength / itemCapacity)} curPage={Math.ceil(index / itemCapacity)} />
      </header>
      <nav className="group/nav relative overflow-clip py-1">
        <button
          className="group/btn absolute top-0 left-0 h-full w-(--button-width) rounded-r-xs bg-black/50 hover:bg-black/70"
          style={{ display: index === 0 ? "none" : "inline-block" }}
          onClick={() => handlePageScroll("left")}
        >
          <ChevronLeftIcon className="invisible h-7 w-(--button-width) scale-y-150 transition-transform duration-(--button-duration) group-hover/btn:scale-x-150 group-hover/btn:scale-y-200 group-hover/nav:visible" />
        </button>

        <div className="hover-zone absolute left-(--button-width) inline-flex h-full w-[calc(100dvw-2*var(--button-width))]" />

        <ul className="flex scroll-pl-[calc(var(--button-width)+var(--spacing))] flex-row gap-1 overflow-hidden" ref={ulRef}>
          <div className="inline-flex w-(--button-width)" />
          {children}
          <div className="inline-flex w-(--button-width)" />
        </ul>
        <button
          className="group/btn absolute top-0 right-0 h-full w-(--button-width) rounded-l-xs bg-black/50 hover:bg-black/70"
          style={{ display: index === (ulRef?.current?.childElementCount || 0) - 1 - itemCapacity ? "none" : "inline-block" }}
          onClick={() => handlePageScroll("right")}
        >
          <ChevronRightIcon className="invisible h-7 w-(--button-width) scale-y-150 transition-transform duration-(--button-duration) group-hover/btn:scale-x-150 group-hover/btn:scale-y-200 group-hover/nav:visible" />
        </button>
      </nav>
    </article>
  );
}

function Item({ index }: { index: number }) {
  const [isPending, setPending] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    let cancel = false;

    (async () => {
      const thumbnailURL = await getThumbnailImageURL(index);
      if (!cancel) {
        setUrl(thumbnailURL);
        setPending(false);
      }
    })();

    return () => {
      cancel = true;
    };
  }, [index]);

  if (isPending) {
    return (
      <li>
        <Skeleton className={cn("aspect-video rounded-xs", classes["item-width"])} />
      </li>
    );
  }

  return (
    <li>
      <img className={cn("aspect-video rounded-xs", classes["item-width"])} src={url} />
    </li>
  );
}

function PageIndicator({ maxPage, curPage }: { maxPage: number; curPage: number }) {
  return (
    <ul className="mt-1 inline-flex gap-[1px]">
      {Array.from({ length: maxPage }).map((_, index) => (
        <li className={cn("inline-flex h-0.5 w-3 bg-zinc-600", index === curPage && "bg-zinc-400")} key={index} />
      ))}
    </ul>
  );
}

// function AsyncImage({ index }: { index: number }) {
//   const url = use(getThumbnailImageURL(index));
//   return <img src={url} alt={`Thumbnail ${index}`} />;

export const ButtonSlider = { Container, Item };
