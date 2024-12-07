"use client";
//import { useRouter } from "next/navigation";
import Logo from "../headerForPhones/components/logo/logo";
import Icons from "./components/icons/icons";
import { CSSProperties, useContext, useEffect, useState } from "react";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
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
    
console.log(activeLanguage);

    
  //const router = useRouter()

  const headerStyle :CSSProperties = {
    position: 'fixed',
    top: '0',
    zIndex: '999',
    width: '100vw',
    height: 'calc(var(--header-height)/1.2)',
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