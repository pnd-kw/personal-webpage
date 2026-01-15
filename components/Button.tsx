import classNames from "classnames";

type Props = JSX.IntrinsicElements["button"] & {
  size?: "normal" | "large" | "extra-large";
  width?: "normal" | "large";
  color?: "sky" | "white";
  textColor?: "text-sky" | "text-white";
  fontWeight?: "normal" | "font-semibold" | "font-bold" | "font-extrabold";
  fontSize?: "text-sm" | "text-md" | "text-lg" | "text-xl";
  margin?: "start" | "center" | "end";
  animation?: "animate-pulse" | "animate-cta-pulse";
};

const Button: React.FC<Props> = ({
  size,
  width,
  color,
  textColor,
  fontWeight,
  fontSize,
  margin,
  animation,
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
        "transition-all duration-300 hover:scale-110 hover:shadow-xl bg-sky-700 px-4 rounded-full outline outline-offset-2 outline-1 outline-sky-700",
        classNames,
        {
          "h-6": size === "normal",
          "h-10": size === "large",
          "h-16": size === "extra-large",
          "w-36": width === "normal",
          "w-52": width === "large",
          "bg-sky-700": color === "sky",
          "bg-white": color === "white",
          "text-sky-700": textColor === "text-sky",
          "text-white": textColor === "text-white",
          normal: fontWeight === "normal",
          "font-semibold": fontWeight === "font-semibold",
          "font-bold": fontWeight === "font-bold",
          "font-extrabold": fontWeight === "font-extrabold",
          "text-sm": fontSize === "text-sm",
          "text-md": fontSize === "text-md",
          "text-lg": fontSize === "text-lg",
          "text-xl": fontSize === "text-xl",
          "animate-pulse": animation === "animate-pulse",
          "animate-cta-pulse": animation === "animate-cta-pulse",
          ...marginClasses,
        }
      )}
      {...rest}
    />
  );
};

export default Button;
