"use client";

// import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import HeaderForComputer from "@/app/components/header/headerForComputer/header";
import HeaderForPhone from "@/app/components/header/headerForPhones/header";
import { ThemeContext } from "@/app/contexts/ThemeContext";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
//import { ProductSelectForShowing } from "./contexts/productSelectForShowing";
import { CompanyInformationContext } from "./contexts/companyInformation";
import { SideBarContext } from "@/app/contexts/SideBarContext";
import SideBarForComputer from "@/app/components/sideBar/sideBarForComputers/sidebar";
import SideBarForPhone from '@/app/components/sideBar/sideBarForPhones/SideBar';
import BulletinBoardForPhone from "./components/bulletinBoard_one/forPhone/bulletinBoard";
import BulletinBoardForComputer from "./components/bulletinBoard_one/forcomputer/bulletinBoard";
import Slider from "./components/slider/slider";
import ProductsShowing from "@/app/components/productsShowing/productsShowing";
import BulletinBoard_two_forPhone from "./components/bulletinBoard_two/forPhone/bulletinBoard";
import BulletinBoard_two_forComputer from "./components/bulletinBoard_two/forcomputer/bulletinBoard";
import CategoriesSection from "@/app/components/categories/categories";
import About from "@/app/components/about/about";
import { getConpanyInformations } from "./crud";
import LoadingIcon from "./svg/icons/loading/loading";

const App = () => {
  //const router = useRouter();

  const [screenWidth, setScreenWidth] = useState<number>(0); 
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("activeTheme") || "light" ;
    }
    return "light";
  });
  const [activeLanguage, setActiveLanguage] = useState("english");
  const [sideBarExist, setSideBarExist] = useState(false);

  interface companyInformationsParams {
    name: nameParams,
    logo: string,
    primaryColor: string,
    biggestDiscount: number,
    offersDetails : string,
    entities: string[],
    originalProductsPercentage: number,
    servises: string[]
}
  type nameParams = {
    arabic: string,
    english: string
  }
const [conpanyInformations, setConpanyInformations] = useState<companyInformationsParams | undefined>();

useEffect(() => {
    const fetchData = async() => {
        const conpanyInformationsData = await getConpanyInformations();
        setConpanyInformations(conpanyInformationsData);
        console.log(conpanyInformationsData);
        
    }
    fetchData();
}, [])



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
  }, [theme, activeLanguage, screenWidth]);

  // const goToAbout = () => {
  //   router.push("/pages/about");
  // };

  if (screenWidth === null) {
    return <div>Loading...</div>; 
  }

  if (!conpanyInformations) {
    return <LoadingIcon/>; 
  }
  


  return (
    <CompanyInformationContext.Provider value={{name: conpanyInformations.name, logo: conpanyInformations.logo, primaryColor: conpanyInformations.primaryColor, biggestDiscount: conpanyInformations.biggestDiscount, entities: conpanyInformations.entities, offersDetails: conpanyInformations.offersDetails, originalProductsPercentage: conpanyInformations.originalProductsPercentage,servises: conpanyInformations.servises,}} >
        <LanguageSelectorContext.Provider value={{ activeLanguage, setActiveLanguage }}>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <SideBarContext.Provider value={{ sideBarExist, setSideBarExist }}>
                {screenWidth > 800 ? <HeaderForComputer /> : <HeaderForPhone />}
                {screenWidth > 800 ? <SideBarForComputer /> : <SideBarForPhone />}
                {screenWidth > 800 ? <BulletinBoardForComputer /> : <BulletinBoardForPhone />}
                <Slider/>
                <ProductsShowing/>
                {screenWidth > 800 ? <BulletinBoard_two_forComputer /> : <BulletinBoard_two_forPhone />}
                <CategoriesSection/>
                <About/>
                {/* <div>home page</div>
                <button onClick={goToAbout}>Go to About</button> */}
            </SideBarContext.Provider>
          </ThemeContext.Provider>
        </LanguageSelectorContext.Provider>
    </CompanyInformationContext.Provider>

  );
};

export default App;
