"use client";
//import { useRouter } from "next/navigation";
import Logo from "../headerForPhones/components/logo/logo";
import SearchIcon_ from "@/app/svg/icons/search_";
import Options from "./components/icons/optionsButton/option";
import Icons from "./components/icons/icons";
import { CSSProperties, useContext, useEffect, useState } from "react";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { SearchIconContext } from "@/app/contexts/searchIconConext";
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';

const Header = () => {

    const [activeLanguage, setActiveLanguage] = useState({});

    const context = useContext(LanguageSelectorContext);
    if(!context){
        throw 'context error';
    }

    useEffect(() => {
        if(context.activeLanguage == 'english'){
            setActiveLanguage(english);
        }else if(context.activeLanguage == 'arabic'){
            setActiveLanguage(arabic);
        }
    }, [context.activeLanguage])
    

    
  //const router = useRouter()

  const headerStyle :CSSProperties = {
    position: 'fixed',
    top: '0',
    zIndex: '999',
    width: '100vw',
    height: 'var(--header-height)',
    backgroundColor: 'var(--white)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 5%',
    boxSizing: 'border-box',
    boxShadow: '0 5px 15px var(--black-almost-transparnt)',
    direction: context.activeLanguage == 'english'? 'ltr':context.activeLanguage == 'arabic'? 'rtl': 'ltr',
}

    

    return(
        <>
            <div style={headerStyle}>
                <Logo/>
                <Icons/>
            </div>
        </>
    )
}
export default  Header;