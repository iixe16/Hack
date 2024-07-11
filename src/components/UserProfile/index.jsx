import { Button, Img, Text, Heading } from "./..";
import React from "react";

export default function UserProfile({
  headingText = "طور نفسك",
  descriptionText = "طور نقاط ضعفك لتصبح نقاط قوى وتخطى حدودك.",
  discoverMoreText = "اكتشف المزيد",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-start w-[24%] md:w-full gap-7 px-[22px] py-9 sm:p-4 cursor-pointer hover:border-blue-300_01 hover:border hover:border-solid hover:shadow-xs`}
    >
      <div className="flex flex-1 flex-col items-end gap-[18px] self-center">
        <Heading as="h4" className="!text-white-a700">
          {headingText}
        </Heading>
        <Text as="p" className="self-stretch text-right leading-[30px]">
          {descriptionText}
        </Text>
        <div className="flex items-center justify-end gap-[9px] self-stretch">
          <Text as="p" className="self-end">
            {discoverMoreText}
          </Text>
          <Img src="images/img_arrow_right.svg" alt="Arrow Image" className="h-[20px] w-[20px]" />
        </div>
      </div>
      <Button className="w-[50px] rounded-[24px]">
        <Img src="images/img_cube.svg" />
      </Button>
    </div>
  );
}
