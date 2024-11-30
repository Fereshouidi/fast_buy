'use client';
import { CSSProperties, useContext, useEffect, useState } from "react";
import english from "@/app/languages/english.json";
import arabic from "@/app/languages/arabic.json";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { SideBarContext } from "@/app/contexts/SideBarContext";
import { ThemeContext } from "@/app/contexts/ThemeContext";
import LightModeIcon from "@/app/svg/icons/lightMode";
import DarkModeIcon from "@/app/svg/icons/darkMode";
import ThemeToggleIcon from "@/app/svg/icons/themeToggle";

const ThemeToggle = () => {

    const [activeLanguage, setActiveLanguage] = useState(english);
    const languageSelectorContext = useContext(LanguageSelectorContext);
    const sideBarContext = useContext(SideBarContext);
    const themeContext = useContext(ThemeContext);

    if (!sideBarContext) {
        throw new Error("SideBarContext must be used within a SideBarContext.Provider");
    }

    const { sideBarExist } = sideBarContext;
    if(!languageSelectorContext){
        throw 'context error !'
    }

    if (!themeContext) {
        throw new Error("themeContext error");
    }

    if(!sideBarContext){
        throw 'context error !'
    }

    useEffect(() => {
        if(languageSelectorContext.activeLanguage == 'english'){
            setActiveLanguage(english);
        }else if(languageSelectorContext.activeLanguage == 'arabic'){
            setActiveLanguage(arabic);
        }else{
            setActiveLanguage(english);
        }
    }, [languageSelectorContext])


    const style: CSSProperties = {
        display: sideBarExist? 'flex': 'none',
    }

    return(
        <li style={style}>
            {themeContext.theme == 'light' ? <LightModeIcon/> : themeContext.theme == 'dark' ? <DarkModeIcon/> : <LightModeIcon/>} 
            <span>{activeLanguage.sideBar.themeW}</span>
            <ThemeToggleIcon/>
        </li>
    )
}
export default ThemeToggle;