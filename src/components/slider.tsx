import { getThumbnailImageURL } from "@/service/image-getter";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

function Container({ children }: React.PropsWithChildren) {
  return (
    <nav>
      <ul className="flex flex-row gap-1 overflow-scroll">{children}</ul>
    </nav>
  );
}
// 217px
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

  return (
    <li className="flex-none">
      {isPending ? (
        <Skeleton className="aspect-video w-54 rounded-xs" />
      ) : (
        <img className="aspect-video w-54 rounded-xs" src={url} />
      )}
    </li>
  );
}

// function AsyncImage({ index }: { index: number }) {
//   const url = use(getThumbnailImageURL(index));
//   return <img src={url} alt={`Thumbnail ${index}`} />;
// }

export const Slider = { Container, Item };
