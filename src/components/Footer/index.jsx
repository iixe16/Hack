import { Text, Img, Heading } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-end items-end h-[398px] lg:h-auto md:h-auto pl-14 pr-24 py-[34px] lg:pr-8 md:px-5 sm:p-4 bg-[url(/public/images/img_group_35620.png)] bg-cover bg-no-repeat`}
    >
      <div className="mt-16 flex w-[86%] flex-col items-start gap-10 lg:w-full md:w-full">
        <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
          <div className="flex w-[44%] items-start justify-between gap-5 md:w-full md:flex-col">
            <ul className="flex flex-col items-center gap-1 self-center">
              <li>
                <a href="#">
                  <Heading as="h4" className="!font-poppins !text-[24.13px] !text-indigo-500">
                    تواصل معنا
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading as="h4" className="!font-poppins !text-[24.13px] !text-indigo-500">
                    البريد الإلكتروني
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading as="h4" className="!font-poppins !text-[24.13px] !text-indigo-500">
                    أبها, عسير, المملكة العربية السعودية
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading as="h4" className="!font-poppins !text-[24.13px] !text-indigo-500">
                    الإشتراك في النشرة البريدية
                  </Heading>
                </a>
              </li>
            </ul>
            <ul className="flex flex-col items-start gap-1">
              <li>
                <a href="الدعم" target="_blank" rel="noreferrer">
                  <Heading as="h4" className="!font-poppins !text-[24.13px] !text-indigo-500">
                    الدعم
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading as="h4" className="!font-poppins !text-[24.13px] !text-indigo-500">
                    الأحكام والشروط
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading as="h4" className="!font-poppins !text-[24.13px] !text-indigo-500">
                    سياسة الخصوصية
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading as="h4" className="!font-poppins !text-[24.13px] !text-indigo-500">
                    الأسئلة الشائعة
                  </Heading>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6 sm:flex-col">
            <Img src="images/img_group_1161_white_a700.svg" alt="First Image" className="h-[104px] w-[64%] sm:w-full" />
            <Img
              src="images/img_group_4_white_a700.png"
              alt="Second Image"
              className="h-[84px] w-[36%] object-cover sm:w-full"
            />
          </div>
        </div>
        <Text size="text3xl" as="p" className="ml-[408px] lg:ml-0 md:ml-0">
          جميع الحقوق محفوظة لمنصة عقل افتراضي 2024 ©
        </Text>
      </div>
    </footer>
  );
}
