"use client";
import SearchIcon from "@/app/svg/icons/search";
import React, { CSSProperties, useState, useContext, useEffect, useRef } from 'react';
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { getProductsByName } from "@/app/crud";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { useRouter } from "next/navigation";
import { LoadingIconContext } from "@/app/contexts/loadingIcon";

type params = {
    Query?: string | undefined,
    style: CSSProperties
}

const SearchBar = ({style, Query}: params) => {

    const router = useRouter()
    
    const [searchQuery, setSearchQuery] = useState<string>('');
    const setLoadingIcon = useContext(LoadingIconContext)?.setExist;
    const [focus, setFocus] = useState(false);
    const [itemFocus, setItemFocus] = useState<string | null>(null);
    const [activeLanguage, setActiveLanguage] = useState(english);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [searchReasult, setSearchResult] = useState<productParams[] | undefined>(undefined)

    const context = useContext(LanguageSelectorContext);

    if (!context || !context.activeLanguage) {
        throw new Error("LanguageSelector must be used within a LanguageSelectorContext.Provider");
    }

    if (!context || !context.activeLanguage || !setLoadingIcon) {
        console.error("error context !");
        return null;
    }

    

    useEffect(() => {
        if(context.activeLanguage == "english"){
            setActiveLanguage(english);
        }else if(context.activeLanguage == "arabic"){
            setActiveLanguage(arabic);
        }
    }, [context.activeLanguage])
    

    const handleChange = async(event: React.ChangeEvent<HTMLInputElement>) => {
            const searchQuery = event.target.value; 
            setSearchQuery(searchQuery);
            const products = await getProductsByName(searchQuery);
            setSearchResult(products);
    }

    const goToSearchPage = (query: string, event?: React.MouseEvent<HTMLDivElement>) => {
        event?.stopPropagation();
        if (query) {
            setLoadingIcon(true);
            router.push('/pages/search/' + query );
        }
    }



    // const style:CSSProperties = {
    //     backgroundColor: 'transparent',
    //     width: '50%',
    //     height: 'var(--primary-height)',
    //     position: 'relative',
    //     padding: '0',
    //     direction: context.activeLanguage == "arabic"? 'rtl': 'ltr',
    //     transition: '0.7s ease',
    // }
    
    const inputStyle:CSSProperties = {
        backgroundColor: 'var(--almost-white)',
        color: 'var(--black)',
        width: '100%',
        height: '100%',
        padding: '0 20px',
        boxSizing: 'border-box',
    }
    
    const inputStyleOnFocus:CSSProperties = {
        ...inputStyle,
        outline: 'none',
    }
    const styleResultSection:CSSProperties = {
        maxHeight: 'var(--extra-long-height)',
        display: searchReasult ? 'flex': 'none',
        flexDirection: 'column',
        backgroundColor: 'var(--white)',
        borderRadius: '20px',
        padding: 'var(--small-padding)',
        boxShadow: `0 5px 15px var(--black-almost-transparnt)`,
        position: 'relative',
        zIndex: 999,

    }
    const styleItem:CSSProperties = {
        width: '100%',
        backgroundColor: itemFocus ? 'red' : '',
        padding: 'calc(var(--small-padding) * 1.5)',
        borderRadius: '20px',
        margin: 0,
        opacity: 0.9,
        color: 'var(--black)',
        pointerEvents: 'auto',
    }    

    return(
        <>
            <div style={style} > 
                <input 
                    type="text" 
                    placeholder={
                        Query? Query : activeLanguage.header.searchWord +' ...'
                    }
                    defaultValue={Query?? ''}
                    ref={inputRef}
                    onChange={(e) => handleChange(e)}
                    className="primary-border" 
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    style={
                        focus?
                        inputStyleOnFocus
                        : inputStyle
                    } 
                />
                <SearchIcon onClick={() => goToSearchPage(searchQuery)}/>

                <div className="result-section" style={styleResultSection}>{
                    searchReasult?.map(product => {
                        const isHovered = itemFocus === product._id;
                        return <div
                            key={product._id}                         
                            style={{
                            ...styleItem,
                            backgroundColor: isHovered ? "var(--almost-white)" : "",
                            }}
                            onMouseEnter={() => setItemFocus(product._id)}
                            onMouseLeave={() => setItemFocus(null)}
                            onClick={(e) => goToSearchPage(
                                activeLanguage.activeLanguage == 'arabic' ?
                                product.name.arabic :
                                product.name.english
                            , e)}   
                        >
                        {
                            activeLanguage.activeLanguage == 'arabic' ?
                            product.name.arabic :
                            product.name.english
                        }
                        </div>
                    })    
                }</div>
            </div>
        </>
    )



}
export default  SearchBar;

