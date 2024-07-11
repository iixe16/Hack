import { Heading } from "./..";
import React from "react";

export default function UserProfileDescription({ descriptionText, ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-[22%] md:w-full px-[30px] py-[34px] sm:p-4 bg-gradient2 shadow-sm rounded-[16px]`}
    >
      <Heading as="h4" className="flex-1 text-center !font-inter !font-semibold leading-[46px] !text-white-a700">
        <span className="font-almarai font-bold text-white-a700">مسارات تعليمية مُخصصة&nbsp;</span>
        <span className="font-almarai text-xl font-normal text-white-a700">
          خطط دراسية تتكيف مع أهداف وتفضيلات الطالب.
        </span>
      </Heading>
    </div>
  );
}
