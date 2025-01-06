"use client";

import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { useState, useEffect, CSSProperties } from "react";
import HeaderForComputer from "@/app/components/header/headerForComputer/header";
import HeaderForPhone from "@/app/components/header/headerForPhones/header";
import { ThemeContext } from "@/app/contexts/ThemeContext";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { SideBarContext } from "@/app/contexts/SideBarContext";
import SideBarForComputer from "@/app/components/sideBar/sideBarForComputers/sidebar";
import SideBarForPhone from '@/app/components/sideBar/sideBarForPhones/SideBar';
import About from "@/app/components/about/about";
import { getConpanyInformations, getCustomerById, getProductsByName} from "@/app/crud";
import LoadingIcon from "@/app/svg/icons/loading/loading";
import { companyInformationsParams } from "@/app/contexts/companyInformation";
import LoadingIcon_theHolePage from "@/app/svg/icons/loading/loadingHoleOfThePage";
import { LoadingIconContext } from "@/app/contexts/loadingIcon";
import { CustomerDataContext, CustomerDataParams } from "@/app/contexts/customerData";
import { ActiveLanguageContext } from '@/app/contexts/activeLanguage';
import { BannerContext } from '@/app/contexts/bannerForEverything';
import Banner from '@/app/banners/bannerForEveryThing';
import ProductsShowing from './productsShowing/productsShowing';
import { productParams } from '@/app/contexts/productSelectForShowing';
// import FilterBoard from './filterBoard';

interface propsParams {
  params: Promise<Params>;
}
interface Params {
  searchQuery: string;
}

const OrdersPage = (props: propsParams) => {

  
    const [screenWidth, setScreenWidth] = useState<number>(1000);  

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [products, setProducts] = useState<productParams[] | undefined>(undefined);
    const [loadingIconExist, setLoadingIconExit] = useState<boolean>(false);
    const [conpanyInformations, setConpanyInformations] = useState<companyInformationsParams | undefined>();
    const [bannerForEveryThing, setBannerForEveryThing] = useState<boolean>(false);
    const [bannerText, setBannerText] = useState<string | undefined>(undefined);
    const [bannerStatus, setBannerStatus] = useState<'success' | 'fail' | null>(null);

    const setBanner = (visibility: boolean, text: string | undefined, status?: 'success' | 'fail' | null) => {
      setBannerForEveryThing(visibility)
      setBannerText(text);
      setBannerStatus(status? status : null)
    }


    

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("activeTheme") || "light" ;
    }
    return "light";
  });
  const [activeLanguage_, setActiveLanguage_] = useState<typeof english | typeof arabic>(english);

  const [activeLanguage, setActiveLanguage] = useState('english');
  const [sideBarExist, setSideBarExist] = useState(false);

  const [customerData, setCustomerData] = useState<CustomerDataParams | undefined>(undefined);

  useEffect(() => {
    const getProduct = async() => {
        const searchQuery = decodeURIComponent((await props.params).searchQuery);
        const products = await getProductsByName(searchQuery);
        setSearchQuery(searchQuery);
        setProducts(products)
    }
    getProduct()
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
    const storedLanguage = localStorage.getItem('activeLanguage_');    
    setActiveLanguage_(storedLanguage == JSON.stringify(arabic) ? JSON.parse(storedLanguage) : english);
  }

  }, [typeof window || localStorage.getItem('activeLanguage_')]) 


useEffect(() => {
    const fetchData = async() => {
        const conpanyInformationsData = await getConpanyInformations();
        setConpanyInformations(conpanyInformationsData);
    }
    fetchData();
}, [])

  useEffect(() => {    

      if (typeof window !== "undefined") {

        const fetchCustomer = async() => {

        const storedData = localStorage.getItem("customerData");
        if (storedData && typeof storedData !== null) {
          try {
            setCustomerData(JSON.parse(storedData) as CustomerDataParams) ;
            const customer = await getCustomerById(JSON.parse(storedData)._id);

            setCustomerData(customer as CustomerDataParams) ;            
            
          } catch (error) {
            console.log("Failed to parse customerData from localStorage:", error);
            setCustomerData(undefined) ;
            
          }
        }else{
          console.log(storedData);
          
        }
      }
      fetchCustomer()
      
    }
  }, [typeof window != 'undefined' ? localStorage.getItem("customerData") : null]);


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

    if(typeof window != 'undefined' && window.innerWidth > 800){
      document.body.classList.add('computer');
    }else{
      document.body.classList.add('phone');
    }
    
  }, [theme, activeLanguage, screenWidth]);


  if (screenWidth === null) {
    return <div>Loading...</div>; 
  }

  if (!conpanyInformations) {
    return <LoadingIcon/>; 
  }
  
  
  const style: CSSProperties = {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: 'var(--almost-white)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 'var(--large-padding)'
  }



    return (

        <CompanyInformationContext.Provider value={{name: conpanyInformations.name, logo: conpanyInformations.logo, email: conpanyInformations.email, password: conpanyInformations.password, primaryColor: conpanyInformations.primaryColor, biggestDiscount: conpanyInformations.biggestDiscount, entities: conpanyInformations.entities, offersDetails: conpanyInformations.offersDetails, originalProductsPercentage: conpanyInformations.originalProductsPercentage,servises: conpanyInformations.servises, backgroundOfRegisterPage: conpanyInformations.backgroundOfRegisterPage, registerRequiredData: conpanyInformations.registerRequiredData , activateAccountWhileSignin: conpanyInformations.activateAccountWhileSignin, currencyType: conpanyInformations.currencyType}} >
            <LanguageSelectorContext.Provider value={{ activeLanguage, setActiveLanguage }}>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                  <SideBarContext.Provider value={{ sideBarExist, setSideBarExist }}>
                    <LoadingIconContext.Provider value={{exist: loadingIconExist , setExist: setLoadingIconExit}}>
                      <ActiveLanguageContext.Provider value={{activeLanguage: activeLanguage_, setAtiveLanguage: setActiveLanguage_}}>
                        <CustomerDataContext.Provider value={customerData}>
                            <BannerContext.Provider value={{bannerexist: bannerForEveryThing, bannerText: bannerText, bannerStatus: bannerStatus , setBanner: setBanner}}>
                              <LoadingIcon_theHolePage/>
                              <Banner/>
                              {screenWidth > 800 ? <HeaderForComputer Query={searchQuery}/> : <HeaderForPhone />}
                              {screenWidth > 800 ? <SideBarForComputer /> : <SideBarForPhone />}
                              <div style={style} className='page'>
                                {/* <FilterBoard/> */}
                                { products && <ProductsShowing products={products?? []} Query={searchQuery}/> }
                              </div>
                                <About/>
                            </BannerContext.Provider>
                        </CustomerDataContext.Provider>
                      </ActiveLanguageContext.Provider>
                    </LoadingIconContext.Provider>
                  </SideBarContext.Provider>
                </ThemeContext.Provider>
            </LanguageSelectorContext.Provider>
        </CompanyInformationContext.Provider>
    )
}
export default OrdersPage;