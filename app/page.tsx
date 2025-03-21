"use client";

import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { useState, useEffect, CSSProperties } from "react";
import HeaderForComputer from "@/app/components/header/headerForComputer/header";
import HeaderForPhone from "@/app/components/header/headerForPhones/header";
import { ThemeContext } from "@/app/contexts/ThemeContext";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CustomerDataContext } from "./contexts/customerData";
import { CustomerDataParams } from "./contexts/customerData";
import { CompanyInformationContext } from "./contexts/companyInformation";
import { companyInformationsParams } from "./contexts/companyInformation";
// import { SideBarContext } from "@/app/contexts/SideBarContext";
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
import { getConpanyInformations, getCustomerById } from "./crud";
import { useRouter } from "next/navigation";
import { LoadingIconContext } from "./contexts/loadingIcon";
import LoadingIcon_theHolePage from "./svg/icons/loading/loadingHoleOfThePage";
import { ActiveLanguageContext } from "./contexts/activeLanguage";
import { BannerContext } from './contexts/bannerForEverything';
import { SideBarContext } from './contexts/SideBarContext';


const App = () => {

  // localStorage.removeItem('customerData');


  const router = useRouter();

  const [screenWidth, setScreenWidth] = useState<number>(0); 
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("activeTheme") || "light" ;
    }
    return "light";
  });
  const [customerData, setCustomerData] = useState<CustomerDataParams | undefined>(undefined);
  
  const [activeLanguage, setActiveLanguage] = useState("english");
  const [activeLanguage_, setActiveLanguage_] = useState<typeof english | typeof arabic>(english);
  const [sideBarExist, setSideBarExist] = useState(false);
  const [loadingIconExist, setLoadingIconExit] = useState<boolean>(false);
  const [bannerForEveryThing, setBannerForEveryThing] = useState<boolean>(false);
  const [bannerText, setBannerText] = useState<string | undefined>(undefined);

  const setBanner = (visibility: boolean, text: string | undefined) => {
    setBannerForEveryThing(visibility)
    setBannerText(text);
  }

const [conpanyInformations, setConpanyInformations] = useState<companyInformationsParams | undefined>();

useEffect(() => {
  if (typeof window !== "undefined") {
    const storedLanguage = localStorage.getItem('activeLanguage_');
    setActiveLanguage_(storedLanguage ? JSON.parse(storedLanguage) : english);
  }

  }, []) 

useEffect(() => {
  
    const fetchData = async() => {
        const conpanyInformationsData = await getConpanyInformations();        
        setConpanyInformations(conpanyInformationsData);
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
    const fetchCustomer = async() => {

      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("activeTheme");
        if (savedTheme) {
          setTheme(savedTheme);
        }

        const storedData = localStorage.getItem("customerData");        

        if (storedData && typeof storedData !== null) {
          try {
            setCustomerData(JSON.parse(storedData) as CustomerDataParams) ;
            const customer = await getCustomerById(JSON.parse(storedData)._id);
            setCustomerData(customer as CustomerDataParams) ;
            
            
          } catch (error) {
            console.error("Failed to parse customerData from localStorage:", error);
            setCustomerData(undefined) ;
            
          }
        }else{
          console.log('error storedData !');
        }
      }
    }
    fetchCustomer()
  }, [typeof window != 'undefined' ? localStorage.getItem("customerData") : null]);

  const closeAccount = () => {
    localStorage.removeItem('customerData')
  }



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
      document.body.classList.add(activeLanguage?? '');
    }

    if(window.innerWidth > 800){
      document.body.classList.add('computer');
    }else{
      document.body.classList.add('phone');
    }
    
  }, [theme, activeLanguage, screenWidth]);


  useEffect(() => {
    if(customerData && !customerData?.verification && conpanyInformations?.activateAccountWhileSignin){
        router.push('/pages/register')
    }
    
}, [customerData, conpanyInformations])




  if (screenWidth === null) {
    return <div>Loading...</div>; 
  }

  if (!conpanyInformations) {
    return <LoadingIcon_theHolePage/>; 
  }
  
  
  const style: CSSProperties = {
    width: '100%',
    height: '100%',
    
    backgroundImage: `url(${conpanyInformations.backgroundsPages?.homePage})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // backgroundColor: 'var(--white-almost-transparnt)',
    // backgroundColor: 'red',
    overflow: 'hidden'

  }
  // if (true) {    

  //   alert('aaaaaaaaaaaaaaaaaaaaaaaaaa')
  // }

  return (
    <CompanyInformationContext.Provider value={{name: conpanyInformations.name, logo: conpanyInformations.logo, email: conpanyInformations.email, password: conpanyInformations.password, primaryColor: conpanyInformations.primaryColor, biggestDiscount: conpanyInformations.biggestDiscount, entities: conpanyInformations.entities, offersDetails: conpanyInformations.offersDetails, originalProductsPercentage: conpanyInformations.originalProductsPercentage,servises: conpanyInformations.servises, qualityAssurance: conpanyInformations?.qualityAssurance, registerRequiredData: conpanyInformations.registerRequiredData , activateAccountWhileSignin: conpanyInformations.activateAccountWhileSignin, currencyType: conpanyInformations.currencyType, shippingCost: conpanyInformations.shippingCost, backgroundsPages: conpanyInformations.backgroundsPages, socialMediaLinks: conpanyInformations.socialMediaLinks}} >
        <LanguageSelectorContext.Provider value={{ activeLanguage, setActiveLanguage }}>
          <ActiveLanguageContext.Provider value={{activeLanguage: activeLanguage_, setAtiveLanguage: setActiveLanguage_}}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
              <SideBarContext.Provider value={{ sideBarExist, setSideBarExist }}>
                <CustomerDataContext.Provider value={customerData}>
                  <LoadingIconContext.Provider value={{exist: loadingIconExist , setExist: setLoadingIconExit}}>
                    <BannerContext.Provider value={{bannerexist: bannerForEveryThing,bannerText: bannerText , setBanner: setBanner}}>
                        {window?.innerWidth > 800 ? <HeaderForComputer /> : <HeaderForPhone />}
                        {screenWidth > 800 ? <SideBarForComputer /> : <SideBarForPhone />}
                       
                        <div style={style}>
                          {screenWidth > 800 ? <BulletinBoardForComputer /> : <BulletinBoardForPhone />}
                          <Slider/>
                          <LoadingIcon_theHolePage/>
                          <ProductsShowing/>
                          {screenWidth > 800 ? <BulletinBoard_two_forComputer /> : <BulletinBoard_two_forPhone />}
                          <CategoriesSection/>
                          <About/>
                          {/* <span onClick={closeAccount}>x</span> */}
                        </div>

                    </BannerContext.Provider>
                  </LoadingIconContext.Provider>
                </CustomerDataContext.Provider>
              </SideBarContext.Provider>
            </ThemeContext.Provider>
          </ActiveLanguageContext.Provider>
        </LanguageSelectorContext.Provider>
    </CompanyInformationContext.Provider>

  );
  
};

export default App;
