"use client";
import { CSSProperties, useContext } from "react";
import Logo from "./components/logo/logo";
import Purchase from "./components/purchase/purchase";
import SearchBar from "./components/searchBar/searchBar";
import CategorieSelector from "./components/languageSelector/languageSelector";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import Options from "./components/option/option";

type params = {
    Query?: string | undefined
}

const Header = ({Query}: params) => {
    
    const context = useContext(LanguageSelectorContext);

    if (!context) {
        throw new Error("LanguageSelector must be used within a LanguageSelectorContext.Provider");
    }

    const { activeLanguage } = context;


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
        padding: '0 2%',
        boxSizing: 'border-box',
        boxShadow: '0 5px 15px var(--black-almost-transparnt)',
        direction: activeLanguage == 'english'? 'ltr':activeLanguage == 'arabic'? 'rtl': 'ltr',
    }

    const styleSearchBar:CSSProperties = {
        backgroundColor: 'transparent',
        width: '50%',
        height: 'var(--primary-height)',
        position: 'relative',
        padding: '0',
        direction: context.activeLanguage == "arabic"? 'rtl': 'ltr',
        transition: '0.7s ease',
    }
    return(
        <>
            <header style={headerStyle} className="header">
                <Options/>
                <Logo/>
                <SearchBar style={styleSearchBar} Query={Query}/>
                <CategorieSelector/>
                <Purchase/>
            </header>
        </>
    )
}
export default  Header;

