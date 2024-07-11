import { Img } from "../../components";
import './Tic.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import {  Text, Button, Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import UserProfile1 from "../../components/UserProfile1";
import UserProfileDescription from "../../components/UserProfileDescription";
import React, { Suspense } from "react";


const selfImprovementList = [
  {
    headingText: "بيئه افتراضية",
    arrowImage: "images/img_arrow_right.svg",
    cubeIcon: "images/img_cube.svg",
  },
  {
    headingText: "الذكاء الاصطناعي",
    arrowImage: "images/img_arrow_right.svg",
    cubeIcon: "images/img_cube.svg",
  },
  {
    headingText: "المحتوى التعليمي",
    arrowImage: "images/img_arrow_right.svg",
    cubeIcon: "images/img_cube.svg",
  },
];

export default function Tic() {
  return (
    <><div className="relative z-[2]">
      {/* header menu section */}
      <Header />
    </div><div className="w-full bg-gradient3">
        <div className="flex flex-col gap-[226px] lg:gap-[169px] md:gap-[169px] sm:gap-[113px]">
          <div className="h-[1210px] bg-[url(/public/images/img_group_7.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto relative">
            <div className="relative mt-[-44px] h-[850px] lg:h-auto md:h-auto">
              <div className="relative h-[850px] flex-1 lg:h-auto md:h-auto">
                <div className="absolute inset-0 flex items-center justify-center container">
                 
                 {/* educational content images section */}
                <div className="flex flex-col items-start">
                  <div className="relative z-[4] flex h-[644px] items-start justify-center self-stretch bg-[url(/public/images/img_group_35621.png)] bg-cover bg-no-repeat py-[106px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
                    <div className="container-xs mb-6 flex justify-center lg:p-5 md:p-5">
                      <div className="flex w-full flex-col items-center gap-28 lg:gap-28 md:gap-[84px] sm:gap-14">
                        <Heading size="heading2xl" as="h2" className="md:text-[27px] sm:text-[25px]">
                        </Heading>
                        <div className="flex gap-[210px] self-stretch md:flex-col">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {selfImprovementList.map((d, index) => (
                              <UserProfile
                                {...d}
                                key={"selfImprovementList" + index}
                                className="rounded-[26px] border border-solid border-blue-300_01 bg-blue-300 shadow-xs hover:border hover:border-solid hover:border-blue-300_01 hover:shadow-xs"
                              />
                            ))}
                          </Suspense>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-end z-0">
              <Img
                src="images/img_signal.svg"
                alt="Signal"
                className="relative z-[1] mr-[70px] mt-[-16px] h-[24px] w-[24px] lg:mr-0 md:mr-0" />
            </div>
            <div className="absolute bottom-[8%] left-0 right-0 m-auto flex flex-1 justify-center z-0">
              <div className="container-xs flex justify-center px-14 lg:p-5 md:p-5 md:px-5 sm:px-4">
                {/* Additional content can go here */}
              </div>

            </div>
            <Footer />

          </div>
        </div>
      </div></>
  );
}
