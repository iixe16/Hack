import { Img, Heading } from "./..";
import React from "react";
import {Link} from "react-router-dom";
export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col justify-center items-center gap-12 px-14 py-[58px] md:p-5 sm:p-4 bg-gradient1`}
    >
      <ul className="flex items-center justify-center gap-[60px] self-end md:self-auto">
        <li>
          <a href="#">
            <Heading as="h4" className="!text-red-300">
              تسجيل الخروج
            </Heading>
          </a>
        </li>
        <li>
          <Link to="/Dash" className="cursor-pointer">
            <Heading as="h4" className="hover:text-red-300">
              الداشبورد
            </Heading>
          </Link>
        </li>
        <li>
         
        </li>
        <li>
          <Link to="/Info" className="cursor-pointer">
            <Heading as="h4" className="hover:text-red-300">
              تحدي
            </Heading>
          </Link>
        </li>
        <li>
          <Link to="/game" className="cursor-pointer">
            <Heading as="h4" className="hover:text-red-300">
              الألعاب
            </Heading>
          </Link>
        </li>
        <li>
          <Link to="/Login" className="cursor-pointer">
            <Heading as="h4" className="hover:text-red-300">
              تسجيل دخول
            </Heading>
          </Link>
        </li>
        <li>
          <Link to="/Vr" className="cursor-pointer">
            <Heading as="h4" className="hover:text-red-300">
              البيئة الإفتراضية
            </Heading>
          </Link>
        </li>
        <li>
          <Link to="/" className="cursor-pointer">
            <Heading as="h4" className="hover:text-red-300">
              الرئيسة
            </Heading>
          </Link>
        </li>
      </ul>
      <div className="flex items-center justify-center gap-3">
        <Img src="images/img_group_1161.svg" alt="First Image" className="h-[48px] w-[64%]" />
        <Img src="images/img_group_4.png" alt="Second Image" className="h-[38px] w-[36%] object-cover" />
      </div>
    </header>
  );
}
