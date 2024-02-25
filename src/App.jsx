import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Head from './components/Head'
import HeadButton from './components/HeadButton'
import Menu from './components/Menu'
import Choice from './components/Choice'
import Description from './components/Description'
import Harsh from './components/Harsh'
import Card from './components/Card1'
import SignUp from './components/SignUp'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Navbar/>
    <Head/>
    <div className="flex justify-center gap-2 py-3 md:gap-5 md:mx-20">
  <HeadButton btn={"Tools"}/>
  <HeadButton btn={"AWS Builder"}/>
  <HeadButton btn={"Start Build"}/>
  <HeadButton btn={"Build Supplies"}/>
  <HeadButton btn={"Tooling"}/>
  <HeadButton btn={"BlueHosting"}/>         
</div>

<div className="flex flex-wrap items-center gap-2 py-2 md:gap-4 md:mx-20 lg:mx-40">
  <Menu list={"Home"}/>
  <Menu list={"Hosting for all"}/>
  <Menu list={"Hosting"}/>
  <Menu list={"Hosting6"}/>
  <div className="flex items-center gap-2 cursor-pointer">
    <h3 className="font-inter text-sm font-normal">Hosting5</h3>
    <img src="../public/images/right-arrow.png" alt="Right Arrow" className="w-4 h-3" />
  </div>
</div>


    <Choice boxH={"Best Choice"} boxI={"../public/images/trophy.png"} />
    <Description no={"1"} builder={"Builder 1"} boldText={"WixPro 72-Inch Responsive Website Builder"}
    Text={"- ComprehensiveDigital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)" } 
    desc={"   [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."}
    rate={"9.8"} rates={"Exceptional"}
    rateImage={"../public/images/star.png"}
    />
    <Choice boxH={"Best Value"} boxI={"../public/images/diamond.png"} />
    <Description no={"2"} builder={"Builder"} boldText={"SiteCraft 68-Inch Ultimate Web Design Studio"}
    Text={"Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)" } 
    desc={"  [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."}
    rate={"9.5"} rates={"Excellent"}
    rateImage={"../public/images/star.png"}
    />
      <Description no={"3"} builder={"Builder 1"} boldText={"WixPro 72-Inch Responsive Website Builder"}
    Text={"- ComprehensiveDigital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)" } 
    desc={"   [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."}
    rate={"9.3"} rates={"Exceptional"}
    rateImage={"../public/images/star.png"}
    />
    <Harsh/>
    <div className="Related mt-8 mx-auto md:mx-12 md:transform md:-translate-y-12 font-inter text-2xl leading-11 md:ml-[12rem] p-8 md:p-[2rem] max-w-screen-lg">
  <h3>Related deals you might like for</h3>
</div>

<div className="flex flex-col md:flex-row px-14 ">
  <Card/>
  <Card/>
  <Card/>
</div>
<SignUp/>
<Footer/>  
    </>
  )
}

export default App 