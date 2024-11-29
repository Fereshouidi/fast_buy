"use client";
import SearchIcon from "@/app/svg/icons/search";
import React, { CSSProperties, useState, useContext, useEffect } from 'react';
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";



const SearchBar = () => {

    const [focus, setFocus] = useState(false);
    const [activeLanguage, setActiveLanguage] = useState(english);

    const context = useContext(LanguageSelectorContext);

    if (!context || !context.activeLanguage) {
        throw new Error("LanguageSelector must be used within a LanguageSelectorContext.Provider");
    }

    useEffect(() => {
        if(context.activeLanguage == "english"){
            setActiveLanguage(english);
        }else if(context.activeLanguage == "arabic"){
            setActiveLanguage(arabic);
        }
    }, [context.activeLanguage])
    




    const style:CSSProperties = {
        backgroundColor: 'transparent',
        width: '50%',
        height: 'var(--primary-height)',
        position: 'relative',
        padding: '0',
        direction: context.activeLanguage == "arabic"? 'rtl': 'ltr',
        transition: '0.7s ease',
    }
    
    const inputStyle:CSSProperties = {
        backgroundColor: 'var(--almost-white)',
        width: '100%',
        height: '100%',
        padding: '0 20px',
        boxSizing: 'border-box',
    }
    
    const inputStyleOnFocus:CSSProperties = {
        ...inputStyle,
        outline: 'none',
    }
    return(
        <>
            <div style={style} > 
                <input 
                    type="text" 
                    placeholder={
                        activeLanguage.home.header.searchWord
                    }
                    className="primary-border" 
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    style={
                        focus?
                        inputStyleOnFocus
                        : inputStyle
                    } 
                />
                <SearchIcon/>
            </div>
        </>
    )



}
export default  SearchBar;

