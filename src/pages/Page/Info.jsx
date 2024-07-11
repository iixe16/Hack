import { Link } from "react-router-dom";
import { Img } from "../../components";
import Header from "../../components/Header";
import { Text, Button, } from "../../components";


export default function Result() {
  return (
    <>
      <div className="relative z-[2]">
        {/* header menu section */}
        <Header />
      </div>
      <div className="w-full bg-gradient3">
        <div className="flex flex-col gap-[226px] lg:gap-[169px] md:gap-[169px] sm:gap-[113px]">
          <div className="h-[1210px] bg-[url(/public/images/img_group_7.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto relative">
            <div className="relative mt-[-44px] h-[850px] lg:h-auto md:h-auto">
              <div className="relative h-[850px] flex-1 lg:h-auto md:h-auto">
                <div className="absolute inset-0 flex items-center justify-center container">
                  <Img
                    src="images/info.png"
                    alt="Centered Image"
                    className="h-[550px] w-[1300px] image-z-10" // Adjust these values as needed
                  />
                  <div className="absolute top-[50%] left-[25%] transform -translate-y-1/2 flex gap-4 buttons-z-20">
                  <Button 
                            size="3xl"
                            variant="gradient"
                            color="_400_indigo_800"
                            className="absolute bottom-0 left-0 right-0 top-0 m-auto w-full flex-1 rounded-[34px] font-inter font-semibold lg:text-xl sm:px-4"
                          >
                            <Link to ="/Quiz">
                            ابدا الان
                           </Link>
                          </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-end z-0">
              <Img
                src="images/img_signal.svg"
                alt="Signal"
                className="relative z-[1] mr-[70px] mt-[-16px] h-[24px] w-[24px] lg:mr-0 md:mr-0"
              />
            </div>
            <div className="absolute bottom-[8%] left-0 right-0 m-auto flex flex-1 justify-center z-0">
              <div className="container-xs flex justify-center px-14 lg:p-5 md:p-5 md:px-5 sm:px-4">
                {/* Additional content can go here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
