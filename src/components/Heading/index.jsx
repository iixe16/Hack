import React from "react";

const sizes = {
  text5xl: "text-4xl font-medium lg:text-3xl md:text-[34px] sm:text-[32px]",
  headings: "text-2xl font-bold lg:text-xl md:text-[22px]",
  headingmd: "text-[27px] font-semibold lg:text-[22px] md:text-[25px] sm:text-[23px]",
  headinglg: "text-[28px] font-semibold lg:text-[23px] md:text-[26px] sm:text-2xl",
  headingxl: "text-[31px] font-semibold lg:text-[26px] md:text-[29px] sm:text-[27px]",
  heading2xl: "text-[33px] font-extrabold lg:text-[28px] md:text-[31px] sm:text-[29px]",
  heading4xl: "text-[47px] font-extrabold lg:text-[39px] md:text-[43px] sm:text-[37px]",
};

const Heading = ({ children, className = "", size = "headings", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue-400 font-almarai ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
