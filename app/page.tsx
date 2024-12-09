"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import HeaderForComputer from "@/app/components/header/headerForComputer/header";
import HeaderForPhone from "@/app/components/header/headerForPhones/header";
import { ThemeContext } from "@/app/contexts/ThemeContext";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { SideBarContext } from "@/app/contexts/SideBarContext";
import SideBarForComputer from "@/app/components/sideBar/sideBarForComputers/sidebar";
import SideBarForPhone from '@/app/components/sideBar/sideBarForPhones/SideBar';
import BulletinBoardForPhone from "./components/bulletinBoard_one/forPhone/bulletinBoard";
import BulletinBoardForComputer from "./components/bulletinBoard_one/forcomputer/bulletinBoard";
import Slider from "./components/slider/slider";
import ProductsShowing from "@/app/components/productsShowing/productsShowing";
// import ProductsShowingForComputer from "@/app/components/productsShowing/forComputer/productsShowing";
// import ProductsShowingForPhone from "@/app/components/productsShowing/forPhone/productsShowing";
import BulletinBoard_two_forPhone from "./components/bulletinBoard_two/forPhone/bulletinBoard";
import BulletinBoard_two_forComputer from "./components/bulletinBoard_two/forcomputer/bulletinBoard";
import CategoriesSection from "@/app/components/categories/categories";

const App = () => {
  const router = useRouter();

  const [screenWidth, setScreenWidth] = useState<number>(0); 
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("activeTheme") || "light" ;
    }
    return "light";
  });
  const [activeLanguage, setActiveLanguage] = useState("english");
  const [sideBarExist, setSideBarExist] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("activeTheme");
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("activeTheme", theme);
    }
  }, [theme]);

  useEffect(() => {
    
    if(theme == 'dark'){
      document.body.classList.remove('light');
      document.body.classList.add(theme);
    }else if(theme == 'light'){
      document.body.classList.remove('dark');
      document.body.classList.add(theme);
    }

    if(activeLanguage != 'arabic'){
      document.body.classList.remove('arabic');
    }else{
      document.body.classList.add(activeLanguage);
    }

    if(window.innerWidth > 800){
      document.body.classList.add('computer');
    }else{
      document.body.classList.add('phone');
    }
    
    //alert(document.body.classList)
  }, [theme, activeLanguage, window.innerWidth]);

  const goToAbout = () => {
    router.push("/pages/about");
  };

  if (screenWidth === null) {
    return <div>Loading...</div>; // Render a loader while determining screen width
  }



  return (
    <LanguageSelectorContext.Provider value={{ activeLanguage, setActiveLanguage }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <SideBarContext.Provider value={{ sideBarExist, setSideBarExist }}>
          {screenWidth > 800 ? <HeaderForComputer /> : <HeaderForPhone />}
          {screenWidth > 800 ? <SideBarForComputer /> : <SideBarForPhone />}
          {screenWidth > 800 ? <BulletinBoardForComputer /> : <BulletinBoardForPhone />}
          <Slider/>
          {/* {screenWidth > 800 ? <ProductsShowingForComputer/> : <ProductsShowingForPhone />} */}
          <ProductsShowing/>
          {screenWidth > 800 ? <BulletinBoard_two_forComputer /> : <BulletinBoard_two_forPhone />}
          <CategoriesSection/>
          <div>home page</div>
          <button onClick={goToAbout}>Go to About</button>
        </SideBarContext.Provider>
      </ThemeContext.Provider>
    </LanguageSelectorContext.Provider>
  );
};

export default App;
