import React from "react";
import PropTypes from "prop-types";

const variants = {
  gradient: {
    blue_400_indigo_800: "bg-gradient shadow-xs text-white-a700",
  },
  outline: {
    cyan_A400_indigo_600: "border-[4.14px] border-solid cyan_A400_indigo_600_border text-indigo-600",
  },
  fill: {
    white_A700: "bg-white-a700",
  },
};
const sizes = {
  "3xl": "h-[70px] px-[34px] text-2xl",
  "2xl": "h-[54px] pl-5 pr-2 text-base",
  xl: "h-[50px] px-3",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,

  variant = "fill",
  size = "xl",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,

  size: PropTypes.oneOf(["3xl", "2xl", "xl"]),
  variant: PropTypes.oneOf(["gradient", "outline", "fill"]),
  color: PropTypes.oneOf(["blue_400_indigo_800", "cyan_A400_indigo_600", "white_A700"]),
};

export { Button };
