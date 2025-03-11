'use client';
import { CSSProperties, useContext, useEffect, useState } from "react";
import Home from "./home/home";
import Order from "./orders/orders";
import About from "./about/about";
import CategorieSelector from "@/app/components/sideBar/sideBarForPhones/CategoriesSelector/CategoriesSelector";
import Contact from "./contact/contact";
import Favorite from "./favorite/favorite";
import Purchase from "./purchase/purchase";
import Setting from "./setting/setting";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { SideBarContext } from "@/app/contexts/SideBarContext";
import english from "@/app/languages/english.json";
import arabic from "@/app/languages/arabic.json";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";


const SideBar = () => {

    // const [activeLanguage, setActiveLanguage] = useState(english);

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    
    const context = useContext(LanguageSelectorContext);
    const sideBarExistContext = useContext(SideBarContext);
    

    if (!context || !context.activeLanguage) {
        throw new Error("LanguageSelector must be used within a LanguageSelectorContext.Provider");
    }
    if (!sideBarExistContext || !sideBarExistContext) {
        throw new Error("SideBarContext error");
    }

    // useEffect(() => {
    //     if(context.activeLanguage == "english"){
    //         setActiveLanguage(english);
    //     }else if(context.activeLanguage == "arabic"){
    //         setActiveLanguage(arabic);
    //     }
    // }, [context.activeLanguage])

    const backgroundStyle: CSSProperties = {
        position: 'fixed',
        // direction: activeLanguage.activeLanguage == 'arabic'? 'rtl': 'ltr',
        right: activeLanguage?.activeLanguage == 'arabic'? '0': '',
        left: activeLanguage?.activeLanguage != 'arabic'? '0': '',
        width: sideBarExistContext.sideBarExist? '100vw': '0',
        top: 'var(--header-height-for-phone)',
        height: 'calc(100vh - calc(var(--header-height) /1.2))',
        // height: '100vh',
        margin: '0',
        overflow: 'hidden',
    }
    const sideBarStyle: CSSProperties = {
        direction: context?.activeLanguage == 'arabic'? 'rtl': 'ltr',
        right: context?.activeLanguage == 'arabic'? '0': '',
        left: context?.activeLanguage != 'arabic'? '0': '',
        transition: '0.3s ease'
    }
    return(
        <div 
            className={sideBarExistContext.sideBarExist? 'sideBar-background':'sideBar-background-invisible' } 
            style={backgroundStyle}
            onClick={() => sideBarExistContext.setSideBarExist(false)}
        >
            <ul onClick={(e) => e.stopPropagation()}
                className='sideBar'
                style={sideBarStyle}
            >
                <Home/>
                <Purchase/>
                <Order/>
                <CategorieSelector/>
                <Favorite/>
                <About/>
                <Contact/>

                <Setting/>
            </ul>
        </div>
    )
}
export default SideBar;