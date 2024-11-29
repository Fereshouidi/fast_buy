'use client';
import { CSSProperties, useContext, useEffect, useState } from "react";
import About from "./about/about";
import Account from "./account/account";
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
            <div 
                className='sideBar'
                style={sideBarStyle}
            >
                <About/>
                <Account/>
            </div>
        </div>
    )
}
export default SideBar;