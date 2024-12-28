import { ReactNode } from "react";

const VerticalSlider = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <article aria-label={title} role="complementary">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      <nav aria-label={title + " 목록"} role="navigation">
        <ul className="flex overflow-x-scroll p-5 gap-10">{children}</ul>
      </nav>
    </article>
  );
};

export default VerticalSlider;
