import React from "react";
import { twMerge } from "tailwind-merge";
const sizes = {
  xs: "text-xs font-normal",
  lg: "text-lg font-normal",
  s: "text-sm font-normal",
  "2xl": "text-[32px] font-medium md:text-3xl sm:text-[28px]",
  xl: "text-2xl font-medium md:text-[22px]",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={twMerge(`text-gray-500 font-inter ${sizes[size]}`,`${className} `)} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
