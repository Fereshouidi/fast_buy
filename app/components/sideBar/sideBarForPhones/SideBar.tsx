'use client';
import { CSSProperties, useContext, useEffect, useState } from "react";
import Home from "./home/home";
import Order from "./orders/orders";
import About from "./about/about";
import CategorieSelector from "./CategoriesSelector/CategoriesSelector";
import Contact from "./contact/contact";
import Favorite from "./favorite/favorite";
import Purchase from "./purchase/purchase";
import LanguageSelector from "./setting/language/language";
import Setting from "./setting/setting";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { SideBarContext } from "@/app/contexts/SideBarContext";


const SideBar = () => {

    const [activeLanguage, setActiveLanguage] = useState(english);

    console.log(activeLanguage);
    
    const context = useContext(LanguageSelectorContext);
    const sideBarExistContext = useContext(SideBarContext);
    

    if (!context || !context.activeLanguage) {
        throw new Error("LanguageSelector must be used within a LanguageSelectorContext.Provider");
    }
    if (!sideBarExistContext || !sideBarExistContext) {
        throw new Error("SideBarContext error");
    }

    useEffect(() => {
        if(context.activeLanguage == "english"){
            setActiveLanguage(english);
        }else if(context.activeLanguage == "arabic"){
            setActiveLanguage(arabic);
        }
    }, [context.activeLanguage])

    const backgroundStyle: CSSProperties = {
        direction: context.activeLanguage == 'arabic'? 'rtl': 'ltr',
        right: context.activeLanguage == 'arabic'? '0': '',
        left: context.activeLanguage != 'arabic'? '0': '',
        width: sideBarExistContext.sideBarExist? '100vw': '0',
    }
    const sideBarStyle: CSSProperties = {
        direction: context.activeLanguage == 'arabic'? 'rtl': 'ltr',
        right: context.activeLanguage == 'arabic'? '0': '',
        left: context.activeLanguage != 'arabic'? '0': '',
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
                <LanguageSelector/>
                <About/>
                <Contact/>

                <Setting/>
            </ul>
        </div>
    )
}
export default SideBar;