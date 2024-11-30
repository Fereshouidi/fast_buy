'use client';
import { CSSProperties, useContext, useEffect, useState } from "react";
import english from "@/app/languages/english.json";
import arabic from "@/app/languages/arabic.json";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { SideBarContext } from "@/app/contexts/SideBarContext";
import CategorieIcon from "@/app/svg/icons/categorie";

const CategorieSelector = () => {

    const [activeLanguage, setActiveLanguage] = useState(english);
    const languageSelectorContext = useContext(LanguageSelectorContext);

    
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

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSideBarExist(false);
        console.log(event);
    }
    

    const style: CSSProperties = {
        display: sideBarExist? 'flex': 'none',
    }
    const styleSelect: CSSProperties = {
        width: '100%',
        height: '100%',
        border: 'none',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'var(--black)',
        backgroundColor: 'var(--whie)',
        outline: 'none'
    }

    const styleOption: CSSProperties = {
        color: 'var(--black)',
        backgroundColor: 'var(--white)',
    }

    return(
        <li style={style}>
            <CategorieIcon/>
            <select style={styleSelect} onChange={(e) => {handleChange(e)}}>
                <option style={styleOption} value="">{activeLanguage.sideBar.categorieW}</option>
                <option style={styleOption} value="">{activeLanguage.sideBar.categorieW}</option>
                <option style={styleOption} value="">{activeLanguage.sideBar.categorieW}</option>
            </select>
        </li>
    )
}
export default CategorieSelector;