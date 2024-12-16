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
import { AccountSavedContext } from "@/app/contexts/saveAccountContext";
import LoadingIcon from "@/app/svg/icons/loading/loading";
import '@/app/components/about/about.css';
import { getConpanyInformations } from "@/app/crud";

const Register = () => {

    const [logInExist, setLogInExist] = useState<boolean>(true);
    const [signinExist, setSignInExist] = useState<boolean>(false);
    const [accountSaved, setAccountSaved] = useState<boolean>(false);


    if(typeof window == 'undefined'){
        throw `error typeof window == 'undefined'`
    }


    const [screenWidth, setScreenWidth] = useState<number>(0); 
    const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem("activeTheme") || "light" ;
    }
    return "light";
    });
    const [activeLanguage, setActiveLanguage] = useState("english");
    const [sideBarExist, setSideBarExist] = useState(false);


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
        <CompanyInformationContext.Provider value={{name: conpanyInformations.name, logo: conpanyInformations.logo, primaryColor: conpanyInformations.primaryColor, biggestDiscount: conpanyInformations.biggestDiscount, entities: conpanyInformations.entities, offersDetails: conpanyInformations.offersDetails, originalProductsPercentage: conpanyInformations.originalProductsPercentage,servises: conpanyInformations.servises, backgroundOfRegisterPage: conpanyInformations.backgroundOfRegisterPage}} >
            <LanguageSelectorContext.Provider value={{ activeLanguage, setActiveLanguage }}>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                        <SideBarContext.Provider value={{ sideBarExist, setSideBarExist }}>
                            <AccountSavedContext.Provider value={{accountSaved: accountSaved, setAccountSaved: setAccountSaved}}>
                                {screenWidth > 800 ? <HeaderForComputer /> : <HeaderForPhone />}
                                {screenWidth > 800 ? <SideBarForComputer /> : <SideBarForPhone />}
                                
                                <div id="regester-page" style={styleRegesterPage}>
                                    <LoginForm logInExist={logInExist} setLogInExist={setLogInExist} signinExist={signinExist} setSignInExist={setSignInExist}/>
                                    <SigninForm logInExist={logInExist} setLogInExist={setLogInExist} signinExist={signinExist} setSignInExist={setSignInExist}/>
                                </div>
                            </AccountSavedContext.Provider>           
                        </SideBarContext.Provider>
                </ThemeContext.Provider>
            </LanguageSelectorContext.Provider>
        </CompanyInformationContext.Provider>
    )
}
export default Register;