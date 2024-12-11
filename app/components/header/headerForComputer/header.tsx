"use client";
import { CSSProperties, useContext } from "react";
import Logo from "./components/logo/logo";
import Purchase from "./components/purchase/purchase";
import SearchBar from "./components/searchBar/searchBar";
import CategorieSelector from "./components/languageSelector/languageSelector";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import Options from "./components/option/option";
//import { CompanyInformationContext } from "@/app/contexts/companyInformation";

const Header = () => {
    
    //const companyInformation = useContext(CompanyInformationContext)
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
    return(
        <>
            <header style={headerStyle} className="header">
                <Options/>
                <Logo/>
                <SearchBar/>
                <CategorieSelector/>
                <Purchase/>
            </header>
        </>
    )
}
export default  Header;

