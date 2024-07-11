import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import UserProfile1 from "../../components/UserProfile1";
import UserProfileDescription from "../../components/UserProfileDescription";
import React, { Suspense } from "react";
import {Link} from "react-router-dom";



const educationalPathsList = [
  { descriptionText: "مسارات تعليمية مُخصصة خطط دراسية تتكيف مع أهداف وتفضيلات الطالب." },
  { descriptionText: "مسارات تعليمية مُخصصة خطط دراسية تتكيف مع أهداف وتفضيلات الطالب." },
  { descriptionText: "مسارات تعليمية مُخصصة خطط دراسية تتكيف مع أهداف وتفضيلات الطالب." },
  { descriptionText: "مسارات تعليمية مُخصصة خطط دراسية تتكيف مع أهداف وتفضيلات الطالب." },
];
const selfImprovementList = [
  {
    headingText: "طور نفسك",
    descriptionText: "طور نقاط ضعفك لتصبح نقاط قوى وتخطى حدودك.",
    discoverMoreText: "اكتشف المزيد",
    arrowImage: "images/img_arrow_right.svg",
    cubeIcon: "images/img_cube.svg",
  },
  {
    headingText: "راجع",
    descriptionText: "راجع ما تعلم وتحدى نفسك في تخطي آخر مستوياتك.",
    discoverMoreText: "اكتشف المزيد",
    arrowImage: "images/img_arrow_right.svg",
    cubeIcon: "images/img_cube.svg",
  },
  {
    headingText: "إلعب",
    descriptionText: "في ألعاب الواقع الإفتراضي وأنخلط بطلاب من كل العالم بلغتك.",
    discoverMoreText: "اكتشف المزيد",
    arrowImage: "images/img_arrow_right.svg",
    cubeIcon: "images/img_cube.svg",
  },
];

export default function PagePage() {
  return (
    <>
      <Helmet>
        <title>Virtual Learning - Engage with Immersive Educational Content</title>
        <meta
          name="description"
          content="Discover a new dimension of learning with our virtual learning platform. Engage with interactive content, AI-driven advice, and VR technology to transform academic challenges into tangible achievements."
        />
      </Helmet>

      {/* main content section */}
      <div className="w-full bg-gradient3">
        <div className="flex flex-col gap-[226px] lg:gap-[169px] md:gap-[169px] sm:gap-[113px]">
          {/* hero section */}
          <div>
            {/* navigation menu section */}
            <div className="h-[1210px] bg-[url(/public/images/img_group_7.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
              {/* header section */}
              <div className="mb-[236px]">
                {/* hero image stack section */}
                <div>
                  {/* hero text stack section */}
                  <div className="relative z-[2]">
                    {/* header menu section */}
                    <Header />
                  </div>
                  <div className="relative mt-[-44px] h-[850px] lg:h-auto md:h-auto">
                    {/* hero main image section */}
                    <div className="relative h-[850px] flex-1 lg:h-auto md:h-auto">
                      {/* hero overlay stack section */}
                      <div className="relative h-[850px] flex-1">
                        <Img
                          src="images/img_topology_2.png"
                          alt="Topologytwo"
                          className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[850px] w-[48%] object-cover"
                        />
                        <div className="absolute left-[0.00px] top-[6.00px] m-auto flex h-[744px] w-[76%] items-end bg-[url(/public/images/img_group_9.png)] bg-cover bg-no-repeat py-[54px] lg:h-auto md:h-auto md:py-5 sm:py-4">
                          <div className="mt-[76px] flex w-full flex-col items-start gap-52 lg:gap-[156px] md:gap-[156px] sm:gap-[104px]">
                            <Img
                              src="images/img_grid.svg"
                              alt="Grid Image"
                              className="mr-[430px] h-[64px] w-[64px] self-end lg:mr-0 md:mr-0"
                            />
                            <Img
                              src="images/img_ellipse_24.png"
                              alt="Ellipse Image"
                              className="h-[284px] w-[32%] object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* hero description stack section */}
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-end">
                        <div className="relative h-[154px] w-[52%] lg:h-auto md:h-auto">
                          <Heading
                            size="headingmd"
                            as="h1"
                            className="flex-1 bg-gradient bg-clip-text text-center !font-inter !text-[27.83px] leading-[53px] !text-transparent md:!text-[21px]"
                          >
                            <span className="bg-gradient6 bg-clip-text font-almarai text-[67.97px] font-extrabold text-transparent">
                              <>
                                تعلم بذكاء، تفوق بتقنية <br />
                              </>
                            </span>
                            <span className="font-almarai text-[32.83px] font-normal text-indigo-700_01">
                              &nbsp;نهدف لتحويل التحديات الأكاديمية إلى إنجازات ملموسة
                            </span>
                          </Heading>
                          <Img
                            src="images/img_close.svg"
                            alt="Close"
                            className="absolute bottom-[29%] left-[6%] m-auto h-[24px] w-[24px]"
                          />
                        </div>
                        <Img
                          src="images/img_signal.svg"
                          alt="Signal"
                          className="relative z-[1] mr-[70px] mt-[-16px] h-[24px] w-[24px] lg:mr-0 md:mr-0"
                        />
                      </div>

                      {/* hero side image section */}
                      <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-max w-[4%] py-[52px] shadow-md md:py-5 sm:py-4">
                        <Img
                          src="images/img_frame_1437252801.png"
                          alt="Image"
                          className="mb-10 h-[96px] w-full object-cover lg:h-auto md:h-auto"
                        />
                      </div>
                    </div>

                    {/* call to action section */}
                    <div className="absolute bottom-[8%] left-0 right-0 m-auto flex flex-1 justify-center">
                      <div className="container-xs flex justify-center px-14 lg:p-5 md:p-5 md:px-5 sm:px-4">
                        <div className="relative h-[82px] w-[18%] rounded-[40px] bg-blue-50 p-1.5 lg:h-auto md:h-auto">
                          <Heading
                            size="headinglg"
                            as="h2"
                            className="!font-inter !text-[28.11px] !text-white-a700 md:!text-[22px]"
                          >
                            أبدأ الآن
                          </Heading>
                          <Button 
                            size="3xl"
                            variant="gradient"
                            color="blue_400_indigo_800"
                            className="absolute bottom-0 left-0 right-0 top-0 m-auto w-full flex-1 rounded-[34px] font-inter font-semibold lg:text-xl sm:px-4"
                          >
                            <Link to ="/Tic">
                            ابدا الان
                           </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* features section */}
            <div className="relative z-[3] mt-[-174px] flex flex-col items-center">
              {/* features list section */}
              <div className="container-xs flex flex-col items-center gap-[118px] lg:gap-[118px] lg:p-5 md:gap-[88px] md:p-5 sm:gap-[59px]">
                <Heading size="headingxl" as="h3" className="!font-inter md:text-[25px] sm:text-[23px]">
                  أهم المميزات
                </Heading>

                {/* features items section */}
                <div className="flex gap-11 self-stretch md:flex-col">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {educationalPathsList.map((d, index) => (
                      <UserProfileDescription {...d} key={"educationalPathsList" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[3280px] overflow-auto">
            {/* educational content section */}
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
              {/* educational content list section */}
              <div>
                {/* educational content images section */}
                <div className="flex flex-col items-start">
                  <div className="relative z-[4] flex h-[644px] items-start justify-center self-stretch bg-[url(/public/images/img_group_35621.png)] bg-cover bg-no-repeat py-[106px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
                    <div className="container-xs mb-6 flex justify-center lg:p-5 md:p-5">
                      <div className="flex w-full flex-col items-center gap-28 lg:gap-28 md:gap-[84px] sm:gap-14">
                        <Heading size="heading2xl" as="h2" className="md:text-[27px] sm:text-[25px]">
                          أنواع المحتوى التعليمي
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
                  <Img
                    src="images/img_ellipse_25.png"
                    alt="Image"
                    className="relative mt-[-96px] h-[374px] w-[12%] object-cover"
                  />
                </div>

                {/* virtual experience section */}
                <div className="relative z-[5] mt-[-490px] h-[1236px]">
                  {/* virtual experience background section */}
                  <Img
                    src="images/img_.png"
                    alt="Featured Image"
                    className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[1236px] w-[72%] object-cover"
                  />
                  <div className="absolute bottom-[5%] left-0 right-0 m-auto flex-1">
                    {/* virtual experience description section */}
                    <div className="flex flex-col items-start gap-[90px] lg:gap-[90px] md:gap-[67px] sm:gap-[45px]">
                      <div className="container-xs px-14 lg:p-5 md:p-5 md:px-5 sm:px-4">
                        <Heading
                          size="text5xl"
                          as="h3"
                          className="text-center !font-inter leading-[46px] !text-indigo-600 md:text-3xl sm:text-[28px]"
                        >
                          <span className="font-almarai font-normal text-indigo-600">في منصه عقل افتراضي&nbsp;</span>
                          <span className="font-almarai font-bold text-blue-400">إكتشف</span>
                          <span className="font-almarai font-normal text-indigo-600">
                            <>
                              &nbsp;أحدث الألعاب المضافة <br />
                              &nbsp;
                            </>
                          </span>
                          <span className="font-almarai font-bold text-blue-400">وخض</span>
                          <span className="font-almarai font-normal text-indigo-600">
                            &nbsp;في تجربة العمل الإفتراضيه المبنية على بيئات العمل الحقيقية
                          </span>
                        </Heading>
                      </div>

                    {/* Virtual experience list section */}
<div className="relative h-[542px] w-full flex justify-center">
  <div className="flex gap-[26px] justify-center">
    <UserProfile1 />
    <UserProfile1
      userImage="images/img_rectangle_2.png"
      bodyMapImage="images/img_mission_iss.svg"
    />
    <UserProfile1 userImage="images/img_rectangle_3.png" bodyMapImage="images/img_nanome.svg" />
    <Img
      src="images/img_rectangle_4.png"
      alt="Rectangle"
      className="h-[476px] w-[16%] rounded-[16px] object-cover"
    />
  </div>

  {/* Virtual experience views section */}
  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center justify-between gap-5">
    <div className="h-[538px] w-[4%] rotate-[180deg] bg-gradient4 blur-[24.00px] backdrop-opacity-[0.5]" />
    <div className="h-[538px] w-[4%] bg-gradient5 blur-[24.00px] backdrop-opacity-[0.5]" />
  </div>
</div>


  

                    </div>
                  </div>
                </div>
              </div>

              {/* footer section */}
              <div className="relative z-[6] mt-[-186px]">
                {/* footer top images section */}
                <div className="flex flex-col items-end">
                  <Img
                    src="images/img_ellipse_24_cyan_400.png"
                    alt="Image"
                    className="relative z-[8] h-[460px] w-[4%] object-cover"
                  />
                  <div className="relative mt-[-104px] flex items-start justify-center self-stretch md:flex-col">
                    <Img
                      src="images/img_vector_130.svg"
                      alt="Vector130"
                      className="relative z-[7] mt-[152px] h-[308px] w-[26%] md:w-full"
                    />
                    <div className="relative ml-[-380px] flex h-[706px] w-[76%] items-start justify-center self-center bg-[url(/public/images/img_group_56.png)] bg-cover bg-no-repeat py-[120px] lg:h-auto lg:py-8 md:ml-0 md:h-auto md:w-full md:p-5 md:py-5 sm:py-4">
                      <div className="container-xs mb-[386px] flex justify-end lg:p-5">
                        <Heading
                          size="heading4xl"
                          as="h4"
                          className="!text-[47.55px] !text-indigo-600 md:!text-[31px] sm:!text-[25px]"
                        >
                          تقنية الواقع الإفتراضي
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>

                {/* footer links section */}
                <div className="relative mt-[-50px] flex flex-col items-end">
                  <Img
                    src="images/img_group_35624.png"
                    alt="Image"
                    className="relative z-[9] h-[386px] w-[36%] object-cover"
                  />

                  {/* footer social icons section */}
                  <div className="relative mt-[-206px] self-stretch">
                    <Img
                      src="images/img_rectangle_34624148.png"
                      alt="Image"
                      className="h-[206px] w-full object-cover lg:h-auto md:h-auto"
                    />

                    {/* footer bottom section */}
                    <Footer />
                  </div>
                </div>
              </div>
            </div>

      {/* about section */}
<div className="absolute bottom-[26%] left-0 right-0 z-10 m-auto flex w-full items-start md:relative md:flex-row">
  {/* about images section */}
  <div className="flex flex-1 items-center justify-start self-center md:flex-row md:self-stretch md:p-5">
    <Img
      src="images/img_about.svg"
      alt="About Image"
      className="h-[500px] w-[34%] rounded-bl-[50px] rounded-br-[248px] rounded-tl-[50px] rounded-tr-[56px] md:w-full"
    />
  </div>

  {/* about description section */}
  <div className="relative mb-14 ml-5 flex w-[58%] items-center justify-between gap-5 self-end md:ml-0 md:w-full md:flex-col md:self-auto">
    <Img
      src="images/img_image_oculus.png"
      alt="Oculus Image"
      className="h-[352px] w-[40%] object-cover md:w-full"
    />

    {/* about virtual reality description section */}
    <div className="flex w-[52%] flex-col gap-8 md:w-full">
      <Text
        size="text4xl"
        as="p"
        className="text-right !text-[20.68px] leading-[152.9%] tracking-[-0.41px] !text-indigo-600"
      >
        نستخدم تقنية الواقع الافتراضي لإنشاء بيئات تعليمية غامرة تُحاكي الواقع. يمكنك من خلال نظارات
        الواقع الافتراضي من التفاعل مع المحتوى الدراسي بطريقة مبتكرة وجذابة، حيث يُمكنك استكشاف المفاهيم
        والأفكار بشكل ثلاثي الأبعاد والتفاعل معها كأنهم جزء منها. لا تفوت التجربة ...
      </Text>

      {/* about call to action section */}
      <div className="flex items-center gap-[39px]">
        <Button
          size="2xl"
          variant="outline"
          color="cyan_A400_indigo_600"
          rightIcon={
            <Img
              src="images/img_linemdchevronsmalldoubleright.svg"
              alt="Line-md:chevron-small-double-right"
              className="h-[24px] w-[24px]"
            />
          }
          className="min-w-[248px] gap-1.5 rounded-[26px] lg:text-[13px]"
        >
          أربط نظارة الواقع الافتراضي
        </Button>
        <Text
          as="p"
          className="mb-3.5 self-end !font-montserrat !text-[16.55px] !font-light !text-indigo-600 underline"
        >
          استعمل تقنية الAR
        </Text>
      </div>
    </div>
  </div>

  <Img
    src="images/img_vector_132.svg"
    alt="Decorative Image"
    className="relative ml-5 mt-[50px] h-[310px] w-[24%] md:ml-0 md:w-full"
  />
</div>


          </div>
        </div>
      </div>
    </>
  );
}
