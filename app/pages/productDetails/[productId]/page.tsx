"use client";

import { useState, useEffect } from "react";
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
import { getConpanyInformations, getProductById } from "@/app/crud";
import LoadingIcon from "@/app/svg/icons/loading/loading";
import PageForComputer from "./forComputer/pageForComputer";
import PageForPhone from "./forPhone/pageForPhone";
import { ActiveImageContext } from "@/app/contexts/activeImage";


interface propsParams {
    params: Promise<Params>;
}
interface Params {
    productId: string;
}

const ProductDetails = (props: propsParams) => {

    type productParams = {
        _id: string,
        name: nameParams,
        imagePrincipal: string,
        images: string[],
        price: number,
        discount: discountParams,
        totalRating: number,
        currencyType: string
    
    }

    type nameParams = {
        english: string,
        arabic: string
    }

    type discountParams = {
        createdAt: Date,
        discountSticker: string,
        newPrice: number,
        oldPrice: number,
        percentage: number,
        startOfDiscount: Date, 
        endOfDiscount: Date
    };

    if(typeof window == 'undefined'){
        throw `error typeof window == 'undefined'`
    }



    const [product, setProduct] = useState<productParams | undefined>(undefined);
    const [activeImage, setActiveImage] = useState<string | undefined>();
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    const [imageSliderWidth, setImageSliderWidth] = useState<number>(0);

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
    const getProduct = async() => {
        const productId = (await props.params).productId;
        const product_ = await getProductById(productId);
        console.log(product_.name.arabic);
        
        setProduct(product_);
    }
    getProduct()
}, [])

useEffect(() => {
    setImageSliderWidth(screenWidth - (screenWidth * 0.96));
}, [screenWidth])

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
    
  }, [theme, activeLanguage, screenWidth]);


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
                    <ProductSelectContext.Provider value={{product: product}}>
                        <SideBarContext.Provider value={{ sideBarExist, setSideBarExist }}>
                            <ActiveImageContext.Provider value={{activeImage: activeImage , setActiveImage: setActiveImage , activeImageIndex: activeImageIndex , setActiveImageIndex: setActiveImageIndex, currentIndex: currentSlideIndex , setCurrentIndex: setCurrentSlideIndex , imageWidth: imageSliderWidth , setImageWidth: setImageSliderWidth }}>
                                {screenWidth > 800 ? <HeaderForComputer /> : <HeaderForPhone />}
                                {screenWidth > 800 ? <SideBarForComputer /> : <SideBarForPhone />}
                                {screenWidth > 800 ? <PageForComputer product={product}/> : <PageForPhone product={product}/>}
                                <About/>
                            </ActiveImageContext.Provider>
                        </SideBarContext.Provider>
                    </ProductSelectContext.Provider>
                    
                </ThemeContext.Provider>
            </LanguageSelectorContext.Provider>
        </CompanyInformationContext.Provider>
    )
}
export default ProductDetails;