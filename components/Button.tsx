import classNames from "classnames";

type Props = JSX.IntrinsicElements["button"] & {
  size?: "normal" | "large";
  color?: "sky" | "white";
  textColor?: "text-sky" | "text-white";
  margin?: "start" | "center" | "end";
};

const Button: React.FC<Props> = ({
  size,
  color,
  textColor,
  margin,
  ...rest
}) => {
  const marginClasses = {
    "mr-auto": margin === "start",
    "mx-auto": margin === "center",
    "ml-auto": margin === "end",
  };

  return (
    <button
      className={classNames(
        "w-36 bg-sky-700 text-sm px-4 rounded-full outline outline-offset-2 outline-1 outline-sky-700",
        {
          "h-6": size === "normal",
          "h-10": size === "large",
          "bg-sky-700": color === "sky",
          "bg-white": color === "white",
          "text-sky-700": textColor === "text-sky",
          "text-white": textColor === "text-white",
          ...marginClasses,
        }
      )}
      {...rest}
    />
  );
};

export default Button;
