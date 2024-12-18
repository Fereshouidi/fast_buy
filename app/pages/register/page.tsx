'use client';

import { CSSProperties, useEffect, useState } from "react";
import LoginForm from "./component/login/loginForm";
import SigninForm from "./component/signin/signinForm";
import HeaderForComputer from "@/app/pages/register/component/header/ForComputer/header";
import HeaderForPhone from "@/app/components/header/headerForPhones/header";
import SideBarForComputer from "@/app/components/sideBar/sideBarForComputers/sidebar";
import SideBarForPhone from '@/app/components/sideBar/sideBarForPhones/SideBar';
import { CompanyInformationContext, companyInformationsParams } from "@/app/contexts/companyInformation";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { ThemeContext } from "@/app/contexts/ThemeContext";
import { SideBarContext } from "@/app/contexts/SideBarContext";
import { LoadingIconContext } from "@/app/contexts/loadingIcon";
import { AccountSavedContext } from "@/app/contexts/saveAccountContext";
import { BannersContext } from "@/app/contexts/banners";
import LoadingIcon_theHolePage from "@/app/svg/icons/loading/loadingHoleOfThePage";
import '@/app/components/about/about.css';
import { getConpanyInformations } from "@/app/crud";
import PasswordsNotMatchBanner from '@/app/banners/passwordsNotMatch';
import EmailNotValidBanner from "@/app/banners/emailNotValid";
import VerificatinEmailBanner from "@/app/banners/verificationEmail";
import LoginStatusBanner from "@/app/banners/loginStatus";
import { CustomerDataContext, CustomerDataParams } from "@/app/contexts/customerData";
import { useRouter } from "next/navigation";
import { getCustomerById } from "@/app/crud";


const Register = () => {

    const router = useRouter();

    const [conpanyInformations, setConpanyInformations] = useState<companyInformationsParams | undefined>();


    const [loadingIconExist, setLoadingIconExit] = useState<boolean>(false);
    const [logInExist, setLogInExist] = useState<boolean>(true);
    const [signinExist, setSignInExist] = useState<boolean>(false);
    const [accountSaved, setAccountSaved] = useState<boolean>(false);
    
    //banners 
    const [isPasswordsNotMatchBannerExist, setIsPasswordsNotMatchBannerExist] = useState<boolean>(false);
    const [isEmailNotValideBannerExist, setIsEmailNotValideBannerExist] = useState<boolean>(false);
    const [isVerificationBannerExist, setIsVerificationBannerExist] = useState<boolean>(false);
    const [loginStatusBanner, setLoginStatusBanner] = useState<boolean>(false);
    const [loginStatus, setLoginStatus] = useState<number>(404);

    const [customerData, setCustomerData] = useState<CustomerDataParams | undefined>(undefined);

    useEffect(() => {
        if(customerData && ((customerData.verification && conpanyInformations?.activateAccountWhileSignin) || (!customerData.verification && !conpanyInformations?.activateAccountWhileSignin))){
            router.push('/')
        }
    }, [customerData])


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
    const fetchData = async() => {
        const conpanyInformationsData = await getConpanyInformations();
        setConpanyInformations(conpanyInformationsData);
        console.log(conpanyInformationsData);
        
    }
    fetchData();
}, [])    

useEffect(() => {
    const refreshAccount = async (id: string): Promise<CustomerDataParams | null> => {
      try {
        const customerAccount = await getCustomerById(id);
        return customerAccount || null;
      } catch (error) {
        console.error("Failed to refresh account:", error);
        return null;
      }
    };
  
    const fetchAndUpdateCustomerData = async () => {
      if (typeof window !== "undefined") {
        const storedData = localStorage.getItem("customerData");
        if (storedData) {
          try {
            const parsedData = JSON.parse(storedData) as CustomerDataParams;
  
            const freshAccount = await refreshAccount(parsedData._id);
            setCustomerData(freshAccount || parsedData);
          } catch (error) {
            console.error("Failed to parse customerData from localStorage:", error);
            setCustomerData(undefined);
          }
        }
      }
    };
  
    fetchAndUpdateCustomerData();
  }, []);
  

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

    useEffect(() => {
        if(!conpanyInformations) {
            setLoadingIconExit(true)
        }else{
            setLoadingIconExit(false)
        }
    }, [conpanyInformations])

    if(!conpanyInformations) {
        return;
    }

    const styleRegesterPage: CSSProperties = {
        width: '100%',
        minHeight: 'calc(100vh - var(--header-height))',
        //backgroundColor: 'var(--almost-white)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundImage: `url(${conpanyInformations.backgroundOfRegisterPage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
    
    return (
        <CompanyInformationContext.Provider value={{name: conpanyInformations.name, logo: conpanyInformations.logo, email: conpanyInformations.email, password: conpanyInformations.password, primaryColor: conpanyInformations.primaryColor, biggestDiscount: conpanyInformations.biggestDiscount, entities: conpanyInformations.entities, offersDetails: conpanyInformations.offersDetails, originalProductsPercentage: conpanyInformations.originalProductsPercentage,servises: conpanyInformations.servises, backgroundOfRegisterPage: conpanyInformations.backgroundOfRegisterPage, registerRequiredData: conpanyInformations.registerRequiredData , activateAccountWhileSignin: conpanyInformations.activateAccountWhileSignin}} >
            <LanguageSelectorContext.Provider value={{ activeLanguage, setActiveLanguage }}>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                        <SideBarContext.Provider value={{ sideBarExist, setSideBarExist }}>
                            <AccountSavedContext.Provider value={{accountSaved: accountSaved, setAccountSaved: setAccountSaved}}>
                                <BannersContext.Provider value={{passwordsNotMatch: isPasswordsNotMatchBannerExist , setPasswordsNotMatch: setIsPasswordsNotMatchBannerExist , emailNotValide: isEmailNotValideBannerExist , setemailNotValide: setIsEmailNotValideBannerExist , verificatinEmailBanner: isVerificationBannerExist, setVerificatinEmailBanner: setIsVerificationBannerExist, loginStatusBanner: loginStatusBanner, setLoginStatusBanner: setLoginStatusBanner, loginStatus: loginStatus, setLoginStatus: setLoginStatus}}>
                                    <LoadingIconContext.Provider value={{exist: loadingIconExist , setExist: setLoadingIconExit}}>
                                        <CustomerDataContext.Provider value={customerData}>
                                            {screenWidth > 800 ? <HeaderForComputer /> : <HeaderForPhone />}
                                            {screenWidth > 800 ? <SideBarForComputer /> : <SideBarForPhone />}
                                            <PasswordsNotMatchBanner/>
                                            <EmailNotValidBanner/>
                                            <VerificatinEmailBanner/>
                                            <LoginStatusBanner status={loginStatus}/>
                                            <LoadingIcon_theHolePage/>
                                            <div id="regester-page" style={styleRegesterPage}>
                                                <LoginForm logInExist={logInExist} setLogInExist={setLogInExist} signinExist={signinExist} setSignInExist={setSignInExist}/>
                                                <SigninForm logInExist={logInExist} setLogInExist={setLogInExist} signinExist={signinExist} setSignInExist={setSignInExist}/>
                                            </div>
                                        </CustomerDataContext.Provider>
                                    </LoadingIconContext.Provider>
                                </BannersContext.Provider>
                            </AccountSavedContext.Provider>           
                        </SideBarContext.Provider>
                </ThemeContext.Provider>
            </LanguageSelectorContext.Provider>
        </CompanyInformationContext.Provider>
    )
}
export default Register;