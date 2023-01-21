import React from "react";

interface IButton {
  text: string;
  color?: string;
  colorHover?: string;
  onClick: () => void;
  bg?: string;
  bgHover?: string;
  border?: string;
  borderHover?: string;
}

export const Button: React.FC<IButton> = ({
  text,
  color,
  colorHover,
  bg,
  bgHover,
  border,
  borderHover,
  onClick,
}) => {
  const [mouseEnter, setMouseEnter] = React.useState(false);
  const onMouseEnter = () => setMouseEnter(true);
  const onMouseLeave = () => setMouseEnter(false);

  return (
    <button
      id=""
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
      className={`text-sm px-4 py-2 transition-all border-radius w-full ${
        mouseEnter
          ? `${bgHover} ${colorHover} ${borderHover}`
          : `${bg} ${color} ${border}`
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
