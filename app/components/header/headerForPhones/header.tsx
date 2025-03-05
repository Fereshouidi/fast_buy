"use client";
import Logo from "../headerForPhones/components/logo/logo";
import { CSSProperties, useContext } from "react";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import Search from "./components/icons/searchButton/search";
import Options from "../headerForComputer/components/option/option";

const Header = () => {


    const context = useContext(LanguageSelectorContext);
    if(!context){
        throw 'context error';
    }
    

  const headerStyle :CSSProperties = {
    position: 'fixed',
    top: '0',
    zIndex: '999',
    width: '100vw',
    //height: 'calc(var(--header-height)/1.2)',
    backgroundColor: 'var(--white)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 7%',
    boxSizing: 'border-box',
    boxShadow: '0 5px 15px var(--black-almost-transparnt)',
    direction: context.activeLanguage == 'english'? 'ltr':context.activeLanguage == 'arabic'? 'rtl': 'ltr',
}

    

    return(
        <>
            <div style={headerStyle}>
                <Options/>
                <Logo/>
                <Search/>
                {/* <Icons/> */}
            </div>
        </>
    )
}
export default  Header;