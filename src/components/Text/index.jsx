import React from "react";

const sizes = {
  textxl: "text-base font-normal not-italic lg:text-[13px]",
  text3xl: "text-[19px] font-normal not-italic lg:text-base",
  text4xl: "text-xl font-normal not-italic lg:text-[17px]",
};

const Text = ({ children, className = "", as, size = "textxl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-a700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
