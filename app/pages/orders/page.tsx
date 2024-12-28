// "use client";

// import english from '@/app/languages/english.json';
// import arabic from '@/app/languages/arabic.json';
// import { useState, useEffect, CSSProperties } from "react";
// import HeaderForComputer from "@/app/components/header/headerForComputer/header";
// import HeaderForPhone from "@/app/components/header/headerForPhones/header";
// import { ThemeContext } from "@/app/contexts/ThemeContext";
// import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
// import { CompanyInformationContext } from "@/app/contexts/companyInformation";
// import { SideBarContext } from "@/app/contexts/SideBarContext";
// import SideBarForComputer from "@/app/components/sideBar/sideBarForComputers/sidebar";
// import SideBarForPhone from '@/app/components/sideBar/sideBarForPhones/SideBar';
// import About from "@/app/components/about/about";
// import { getConpanyInformations, getCustomerById, getShoppingCartsByCustomerId } from "@/app/crud";
// import LoadingIcon from "@/app/svg/icons/loading/loading";
// import { companyInformationsParams } from "@/app/contexts/companyInformation";
// import LoadingIcon_theHolePage from "@/app/svg/icons/loading/loadingHoleOfThePage";
// import { LoadingIconContext } from "@/app/contexts/loadingIcon";
// import { CustomerDataContext, CustomerDataParams } from "@/app/contexts/customerData";
// import { BannersContext } from "@/app/contexts/banners";
// import PurchaseStatusBanner from "@/app/banners/addedToPurchase";
// import { shoppingCartParams } from "@/app/contexts/shoppingCart";
// import { ActiveLanguageContext } from '@/app/contexts/activeLanguage';
// import { BannerContext } from '@/app/contexts/bannerForEverything';
// import Banner from '@/app/banners/bannerForEveryThing';
// // import '@/app/pages/purchase/[customerId]/style.css'


// interface propsParams {
//     params: Promise<Params>;
// }
// interface Params {
//     customerId: string;
// }

// const PurchasePage = (props: propsParams) => {

//     if(typeof window == 'undefined'){
//         throw `error typeof window == 'undefined'`
//     }


//     const [loadingIconExist, setLoadingIconExit] = useState<boolean>(false);

//     const [customer, setCustomer] = useState<CustomerDataParams | undefined>(undefined);
//     const [purchaseStatusBanner, setPurchaseStatusBanner] = useState<boolean>(false);
//     const [purchaseStatus, setPurchaseStatus] = useState<number>(404);
//     const [shoppingCart, setShoppingCart] = useState<shoppingCartParams | undefined>(undefined);
//     const [conpanyInformations, setConpanyInformations] = useState<companyInformationsParams | undefined>();
//     const [bannerForEveryThing, setBannerForEveryThing] = useState<boolean>(false);
//     const [bannerText, setBannerText] = useState<string | undefined>(undefined);
//     const [bannerStatus, setBannerStatus] = useState<'success' | 'fail' | null>(null);
//     const [totalPriceChange, setTotalPriceChange] = useState<'byDiscount' | 'byDiscountPercent' | undefined>(undefined);
//     //const [discountCodeValue, setDiscount]

//     const setBanner = (visibility: boolean, text: string | undefined, status?: 'success' | 'fail' | null) => {
//       setBannerForEveryThing(visibility)
//       setBannerText(text);
//       setBannerStatus(status? status : null)
//     }

    

//   const [screenWidth, setScreenWidth] = useState<number>(0); 
//   const [theme, setTheme] = useState(() => {
//     if (typeof window !== 'undefined') {
//       return localStorage.getItem("activeTheme") || "light" ;
//     }
//     return "light";
//   });
//   const [activeLanguage_, setActiveLanguage_] = useState<typeof english | typeof arabic>(english);

//   const [activeLanguage, setActiveLanguage] = useState('english');
//   const [sideBarExist, setSideBarExist] = useState(false);

//   const [customerData, setCustomerData] = useState<CustomerDataParams | undefined>(undefined);



// useEffect(() => {
//   if (typeof window !== "undefined") {
//     const storedLanguage = localStorage.getItem('activeLanguage_');    
//     setActiveLanguage_(storedLanguage ? JSON.parse(storedLanguage) : english);
//   }

//   }, []) 

// useEffect(() => {
//     const fetchData = async() => {
//         const conpanyInformationsData = await getConpanyInformations();
//         setConpanyInformations(conpanyInformationsData);
//     }
//     fetchData();
// }, [])

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setScreenWidth(window.innerWidth);

//       const handleResize = () => {
//         setScreenWidth(window.innerWidth);
//       };

//       window.addEventListener("resize", handleResize);

//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     }
//   }, []);

//   useEffect(() => {    

//       if (typeof window !== "undefined") {
//         const savedTheme = localStorage.getItem("activeTheme");
//         if (savedTheme) {
//           setTheme(savedTheme);
//         }
//     }
//   }, []);




//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("activeTheme", theme);
//     }
//   }, [theme]);


//   useEffect(() => {
    
//     if(theme == 'dark'){
//       document.body.classList.remove('light');
//       document.body.classList.add(theme);
//     }else if(theme == 'light'){
//       document.body.classList.remove('dark');
//       document.body.classList.add(theme);
//     }

//     if(activeLanguage != 'arabic'){
//       document.body.classList.remove('arabic');
//     }else{
//       document.body.classList.add(activeLanguage);
//     }

//     if(window.innerWidth > 800){
//       document.body.classList.add('computer');
//     }else{
//       document.body.classList.add('phone');
//     }
    
//   }, [theme, activeLanguage, screenWidth]);


//   if (screenWidth === null) {
//     return <div>Loading...</div>; 
//   }

//   if (!conpanyInformations) {
//     return <LoadingIcon/>; 
//   }

  
//   const style: CSSProperties = {
//     width: '100vw',
//     minHeight: '100vh',
//     backgroundColor: 'var(--almost-white)',
//     display: 'flex',
//     justifyContent: screenWidth > 800 ? 'center' : '',
//     flexDirection: screenWidth > 800 ? 'row' : 'column',
//   }


//     return (

//         <CompanyInformationContext.Provider value={{name: conpanyInformations.name, logo: conpanyInformations.logo, email: conpanyInformations.email, password: conpanyInformations.password, primaryColor: conpanyInformations.primaryColor, biggestDiscount: conpanyInformations.biggestDiscount, entities: conpanyInformations.entities, offersDetails: conpanyInformations.offersDetails, originalProductsPercentage: conpanyInformations.originalProductsPercentage,servises: conpanyInformations.servises, backgroundOfRegisterPage: conpanyInformations.backgroundOfRegisterPage, registerRequiredData: conpanyInformations.registerRequiredData , activateAccountWhileSignin: conpanyInformations.activateAccountWhileSignin, currencyType: conpanyInformations.currencyType}} >
//             <LanguageSelectorContext.Provider value={{ activeLanguage, setActiveLanguage }}>
//                 <ThemeContext.Provider value={{ theme, setTheme }}>
//                   <SideBarContext.Provider value={{ sideBarExist, setSideBarExist }}>
//                     <LoadingIconContext.Provider value={{exist: loadingIconExist , setExist: setLoadingIconExit}}>
//                       <ActiveLanguageContext.Provider value={{activeLanguage: activeLanguage_, setAtiveLanguage: setActiveLanguage_}}>
//                         <CustomerDataContext.Provider value={customerData}>
//                           <BannersContext.Provider value={{purchaseStatusBanner: purchaseStatusBanner, setPurchaseStatusBanner: setPurchaseStatusBanner, purchaseStatus: purchaseStatus , setPurchaseStatus: setPurchaseStatus , passwordsNotMatch: false , setPasswordsNotMatch: ()=> null , emailNotValide: false , setemailNotValide: ()=> null , verificatinEmailBanner: false, setVerificatinEmailBanner: ()=> null, loginStatusBanner: false, setLoginStatusBanner: ()=> null, loginStatus: 404, setLoginStatus: ()=> null }}>
//                             <BannerContext.Provider value={{bannerexist: bannerForEveryThing, bannerText: bannerText, bannerStatus: bannerStatus , setBanner: setBanner}}>
//                               <LoadingIcon_theHolePage/>
//                               <Banner/>
//                               <PurchaseStatusBanner/>
//                               {screenWidth > 800 ? <HeaderForComputer /> : <HeaderForPhone />}
//                               {screenWidth > 800 ? <SideBarForComputer /> : <SideBarForPhone />}
//                               <div style={style} className='page'>
//                                 orders page
//                               </div>
//                                 <About/>
//                             </BannerContext.Provider>
//                           </BannersContext.Provider>
//                         </CustomerDataContext.Provider>
//                       </ActiveLanguageContext.Provider>
//                     </LoadingIconContext.Provider>
//                   </SideBarContext.Provider>
//                 </ThemeContext.Provider>
//             </LanguageSelectorContext.Provider>
//         </CompanyInformationContext.Provider>
//     )
// }
// export default PurchasePage;