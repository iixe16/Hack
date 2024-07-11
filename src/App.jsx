import React from "react";
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "pages/Page/Home"
import Tic from "pages/Page/Tic"
import Dash from "pages/Page/Dash";
import Result from "pages/Page/Result";
import Info from "pages/Page/Info";
import Login from "pages/Page/Login";
import ChatBot from 'react-simple-chatbot';
import UserProfile from "components/UserProfile/index";
import Quiz from "pages/Page/Quiz";
import Vr from "pages/Page/Vr";
import Game from "pages/Page/Game";

function App() {

  return (

    <>
    <ChatBot
    steps={[
      {
        id: '1',
        message: 'ماهو سؤالك?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'هي منصة تعليمية تساعد الشخص في تحديد اسلوبه الدراسي وتحسين مستواه باستخدام الذكاء والواقع الافتراضي',
        trigger: '4',
      },
    
        {
          id: '4',
          message: 'هل لديك سؤال اخر?',
          trigger: '5',
        },
        {
          id: '5',
          options: [
            { value: 1, label: 'نعم', trigger: '6' },
            { value: 2, label: 'لا', trigger: '7' },
          
          ],
        },
        {
          id: '7',
          message: 'مع السلامة.',
          trigger: '5',
          end: true,
        },
        {
          id: '6',
          message: 'ماهو سؤالك التالي؟',
          trigger: '8',

        },
        {
          id: '8',
          user: true,
          trigger: '9',
        },
        {
          id: '9',
          message: "الفضاء هو الفراغ الواسع الذي يمتد خارج حدود الغلاف الجوي للأرض ويحتوي على الكواكب والنجوم والمجرات ولتجربةاللعبة اتجه الى ايقونة الالعاب واختر mission ISS",
          trigger: '5',
        },
        {
          id: '10',
          message: 'ماهو سؤالك التالي؟',
          trigger: '11',

        },
        {
          id: '11',
          user: true,
          trigger: '12',
        },
        {
          id: '12',
          message: "JavaScript هي لغة برمجة تُستخدم أساسًا لتطوير صفحات الويب التفاعلية",
          trigger: '5',
        },
      ]}
      
    
    floating={true}
    
    />
    
    
  
    <BrowserRouter>
    <Routes>

        <Route path="/"element={<Home/>}/>
        <Route  path="/Login" element={<Login/>}/>
        <Route  path="/Dash" element={<Dash/>}/>
        <Route  path="/Info" element={<Info/>}/>
        <Route  path="/UserProfile" element={< UserProfile/>}/>
        <Route  path="/Tic" element={< Tic/>}/>
        <Route  path="/Result" element={< Result/>}/>
        <Route  path="/Quiz" element={< Quiz/>}/>
        <Route  path="/Vr" element={< Vr/>}/>
        <Route  path="/Game" element={<Game/>}/>






        </Routes>
</BrowserRouter>
    
    </>
     
  );
}

export default App;
