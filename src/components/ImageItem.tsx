import clsx from "clsx";

const ImageItem = ({ src, onClick, ...props }) => {
  return (
    <li className="">
      <img
        className={clsx(
          "w-36 h-52 object-cover rounded-lg cursor-pointer hover:scale-105 duration-200",
          !src && "invisible"
        )}
        src={src}
        onClick={onClick}
        {...props}
      />
    </li>
  );
};

export default ImageItem;
