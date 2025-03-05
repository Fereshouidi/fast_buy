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
import { ProductSelectContext } from "@/app/contexts/productSelectForShowing";
import SideBarForComputer from "@/app/components/sideBar/sideBarForComputers/sidebar";
import SideBarForPhone from '@/app/components/sideBar/sideBarForPhones/SideBar';
import About from "@/app/components/about/about";
import { getConpanyInformations, getCustomerById, getProductById, gtOrdersByCustomer } from "@/app/crud";
import LoadingIcon from "@/app/svg/icons/loading/loading";
import PageForComputer from "./forComputer/pageForComputer";
import PageForPhone from "./forPhone/pageForPhone";
import { ActiveImageContext } from "@/app/contexts/activeImageForComputer";
import { ActiveImageContext_ForPhone } from "@/app/contexts/activeImageForPhone";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { companyInformationsParams } from "@/app/contexts/companyInformation";
import LoadingIcon_theHolePage from "@/app/svg/icons/loading/loadingHoleOfThePage";
import { LoadingIconContext } from "@/app/contexts/loadingIcon";
import { CustomerDataContext, CustomerDataParams } from "@/app/contexts/customerData";
import { BannersContext } from "@/app/contexts/banners";
import PurchaseStatusBanner from "@/app/banners/addedToPurchase";
import Banner from '@/app/banners/bannerForEveryThing';
import { BannerContext } from "@/app/contexts/bannerForEverything";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { getShoppingCartsByCustomerId } from '@/app/crud';
import { shoppingCartParams } from '@/app/contexts/shoppingCart';
import { OrderParams } from '@/app/contexts/order';


interface propsParams {
    params: Promise<Params>;
}
interface Params {
    productId: string;
}

const ProductDetails = (props: propsParams) => {

    if(typeof window == 'undefined'){
        throw `error typeof window == 'undefined'`
    }


    const [loadingIconExist, setLoadingIconExit] = useState<boolean>(false);
    const [orders, setOrders] = useState<OrderParams[] | undefined>(undefined)
    const [product, setProduct] = useState<productParams | undefined>(undefined);
    const [activeImage, setActiveImage] = useState<string | undefined>();
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    const [imageSliderWidth, setImageSliderWidth] = useState<number>(0);
    const [imageSliderWidth_forPhone, setImageSliderWidth_forPhone] = useState<number>(0);
    const [purchaseStatusBanner, setPurchaseStatusBanner] = useState<boolean>(false);
    const [purchaseStatus, setPurchaseStatus] = useState<number>(404);
    const [bannerForEveryThing, setBannerForEveryThing] = useState<boolean>(false);
    const [bannerText, setBannerText] = useState<string | undefined>(undefined);
   // const [bannerStatus, setBannerStatus] = useState<'success' | 'fail' | null>(null);
    const [activeLanguage_, setActiveLanguage_] = useState<typeof english | typeof arabic>(english);
    const [shoppingCart, setShoppingCart] = useState<shoppingCartParams | undefined>(undefined);
    const [bannerStatus, setBannerStatus] = useState<'success' | 'fail' | null>(null);
    

    const setBanner = (visibility: boolean, text: string | undefined, status?: 'success' | 'fail' | null) => {
      setBannerForEveryThing(visibility)
      setBannerText(text);
      setBannerStatus(status?? null);
    }
    
    console.log(product);
    

  const [screenWidth, setScreenWidth] = useState<number>(0); 
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("activeTheme") || "light" ;
    }
    return "light";
  });
  const [activeLanguage, setActiveLanguage] = useState("english");
  const [sideBarExist, setSideBarExist] = useState(false);

  const [customerData, setCustomerData] = useState<CustomerDataParams | undefined>(undefined);

  useEffect(() => {
    const getProduct = async() => {
        const productId = (await props.params).productId;
        const product_ = await getProductById(productId);
        
        setProduct(product_);
    }
    getProduct()
}, [])

useEffect(() => {
  const fetchData = async() => {
    const shoppingCart =  await getShoppingCartsByCustomerId(customerData?._id)
    const orders = await gtOrdersByCustomer(customerData?._id);
    setShoppingCart(shoppingCart[0]);
    setOrders(orders);
  }
  fetchData()
}, [customerData])

useEffect(() => {
    setImageSliderWidth(70);
    setImageSliderWidth_forPhone(50)
}, [screenWidth])

const [conpanyInformations, setConpanyInformations] = useState<companyInformationsParams | undefined>();

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
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("activeTheme");
        if (savedTheme) {
          setTheme(savedTheme);
        }

        const fetchCustomer = async() => {

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
      fetchCustomer()
    }
  }, [typeof window != 'undefined' ? localStorage.getItem("customerData") : null]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("activeTheme", theme);
    }
  }, [theme]);

  useEffect(() => {   
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem('activeLanguage_');    
      setActiveLanguage_(storedLanguage == JSON.stringify(arabic) ? JSON.parse(storedLanguage) : english);
      //alert(storedLanguage);

    }
    }, [ window || localStorage.getItem('activeLanguage_')]) 

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
    
  }, [theme, activeLanguage, screenWidth]);


  if (screenWidth === null) {
    return <div>Loading...</div>; 
  }

  if (!conpanyInformations) {
    return <LoadingIcon/>; 
  }
  
    
    return (

      <CompanyInformationContext.Provider value={{name: conpanyInformations.name, logo: conpanyInformations.logo, email: conpanyInformations.email, password: conpanyInformations.password, primaryColor: conpanyInformations.primaryColor, biggestDiscount: conpanyInformations.biggestDiscount, entities: conpanyInformations.entities, offersDetails: conpanyInformations.offersDetails, originalProductsPercentage: conpanyInformations.originalProductsPercentage,servises: conpanyInformations.servises, qualityAssurance: conpanyInformations?.qualityAssurance, registerRequiredData: conpanyInformations.registerRequiredData , activateAccountWhileSignin: conpanyInformations.activateAccountWhileSignin, currencyType: conpanyInformations.currencyType, shippingCost: conpanyInformations.shippingCost, backgroundsPages: conpanyInformations.backgroundsPages, socialMediaLinks: conpanyInformations.socialMediaLinks}} >
            <LanguageSelectorContext.Provider value={{ activeLanguage, setActiveLanguage }}>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <ProductSelectContext.Provider value={{product: product}}>
                        <SideBarContext.Provider value={{ sideBarExist, setSideBarExist }}>
                            <ActiveImageContext.Provider value={{activeImage: activeImage , setActiveImage: setActiveImage , activeImageIndex: activeImageIndex , setActiveImageIndex: setActiveImageIndex, currentIndex: currentSlideIndex , setCurrentIndex: setCurrentSlideIndex , imageWidth: imageSliderWidth , setImageWidth: setImageSliderWidth }}>
                                <ActiveImageContext_ForPhone.Provider value={{activeImage: activeImage , setActiveImage: setActiveImage , activeImageIndex: activeImageIndex , setActiveImageIndex: setActiveImageIndex, currentIndex: currentSlideIndex , setCurrentIndex: setCurrentSlideIndex , imageWidth: imageSliderWidth_forPhone , setImageWidth: setImageSliderWidth_forPhone }}>
                                  <LoadingIconContext.Provider value={{exist: loadingIconExist , setExist: setLoadingIconExit}}>
                                    <CustomerDataContext.Provider value={customerData}>
                                      <BannersContext.Provider value={{purchaseStatusBanner: purchaseStatusBanner, setPurchaseStatusBanner: setPurchaseStatusBanner, purchaseStatus: purchaseStatus , setPurchaseStatus: setPurchaseStatus , passwordsNotMatch: false , setPasswordsNotMatch: ()=> null , emailNotValide: false , setemailNotValide: ()=> null , verificatinEmailBanner: false, setVerificatinEmailBanner: ()=> null, loginStatusBanner: false, setLoginStatusBanner: ()=> null, loginStatus: 404, setLoginStatus: ()=> null }}>
                                        <BannerContext.Provider value={{bannerexist: bannerForEveryThing,bannerText: bannerText , bannerStatus: bannerStatus, setBanner: setBanner}}>
                                          <ActiveLanguageContext.Provider value={{activeLanguage: activeLanguage_, setAtiveLanguage: setActiveLanguage_}}>
                                            <LoadingIcon_theHolePage/>
                                            <PurchaseStatusBanner/>
                                            <Banner/>
                                            {screenWidth > 800 ? <HeaderForComputer /> : <HeaderForPhone />}
                                            {screenWidth > 800 ? <SideBarForComputer /> : <SideBarForPhone />}

                                            {/* <div style={style}> */}
                                              {screenWidth > 800 ? <PageForComputer product={product} setProduct={setProduct} shoppingCart={shoppingCart} orders={orders}/> : <PageForPhone product={product} setProduct={setProduct} shoppingCart={shoppingCart} orders={orders}/>}

                                            {/* </div> */}

                                            <About/>
                                          </ActiveLanguageContext.Provider>
                                        </BannerContext.Provider>
                                      </BannersContext.Provider>
                                    </CustomerDataContext.Provider>
                                  </LoadingIconContext.Provider>
                                </ActiveImageContext_ForPhone.Provider>
                            </ActiveImageContext.Provider>
                        </SideBarContext.Provider>
                    </ProductSelectContext.Provider>
                </ThemeContext.Provider>
            </LanguageSelectorContext.Provider>
        </CompanyInformationContext.Provider>
    )
}
export default ProductDetails;