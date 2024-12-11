'use client';
import { CSSProperties, useContext, useEffect, useState } from "react";
import english from "@/app/languages/english.json";
import arabic from "@/app/languages/arabic.json";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { SideBarContext } from "@/app/contexts/SideBarContext";
import AboutIcon from "@/app/svg/icons/about";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";

const About = () => {

    const [activeLanguage, setActiveLanguage] = useState(english);
    const languageSelectorContext = useContext(LanguageSelectorContext);
    const [isHover, setIsHover] = useState<boolean>(false)

    const companyInformation = useContext(CompanyInformationContext);
    
    const sideBarContext = useContext(SideBarContext);
    if (!sideBarContext) {
        throw new Error("SideBarContext must be used within a SideBarContext.Provider");
    }
    const { sideBarExist, setSideBarExist } = sideBarContext;
    if(!languageSelectorContext){
        throw 'context error !'
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

    const handleClick = () => {
        setSideBarExist(false)
    }

    const style: CSSProperties = {
        display: sideBarExist? 'flex': 'none',
    }
    const styleHover: CSSProperties = {
        ...style,
        backgroundColor: companyInformation?.primaryColor
    }

    return(
        <li style={isHover? styleHover : style} 
            onClick={handleClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <AboutIcon/>
            <span>{activeLanguage.sideBar.aboutW}</span>
        </li>
    )
}
export default About;