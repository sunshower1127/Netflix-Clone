import { DivProp } from "../types/htmlprops";

const VerticalSlider = ({ children, ...props }: DivProp) => {
  return (
    <article {...props}>
      <nav>
        <ul className="flex overflow-x-scroll p-5 gap-10">{children}</ul>
      </nav>
    </article>
  );
};

export default VerticalSlider;
