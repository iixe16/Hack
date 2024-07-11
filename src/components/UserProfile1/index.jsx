import { Img } from "./..";
import React from "react";

export default function UserProfile1({
  userImage = "images/img_rectangle_1.png",
  bodyMapImage = "images/img_bodymap.svg",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} h-[476px] w-[16%] lg:h-auto md:w-full md:h-auto md:p-5 relative`}>
      <Img src={userImage} alt="Rectangle Image" className="h-[476px] w-full flex-1 rounded-[16px] object-cover" />
      <Img
        src={bodyMapImage}
        alt="Body Map Image"
        className="absolute bottom-[26.77px] right-[29.49px] m-auto h-[26px] w-[36%]"
      />
    </div>
  );
}
