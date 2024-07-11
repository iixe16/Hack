import { Img } from "../../components";
import './Tic.css';
import Header from "../../components/Header";
import './Login.css'; 
import { Link } from 'react-router-dom';
export default function Login() {
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
                    src="images/login.png"
                    alt="Centered Image"
                    className="h-[760px] w-[1550px] image-z-10" // Adjust these values as needed
                  />
                  <div className="absolute bottom-10 left-20 flex gap-7 buttons-z-20 p-6">
                    <div className="flex-container">
                      <div className="form-container" style={{ marginTop: '450px' }}> {/* Adjust marginTop as needed */}
                        <form>
                          <p>تسجيل دخول</p>
                          <h3>البريد الالكتروني</h3>
                          <input type='email' className='form-control' placeholder='أدخل البريد الإلكتروني' />
                          <h3>كلمة السر</h3>
                          <input type='password' className='form-control' placeholder='أدخل كلمة السر' />
                          <div className="forgot-password">نسيت كلمة السر؟</div>
                          <button>تسجيل الدخول</button>
                          <div className="dont-have-account">ليس لديك حساب؟</div>
                        </form>
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
        </div>
      </div>
    </>
  );
}
