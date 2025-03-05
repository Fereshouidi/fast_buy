'use client';
import { CSSProperties, useContext, useEffect, useState } from "react";
import Slides from "./slides/slides";
import { getSliderData } from "@/app/crud";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { productParams } from "@/app/contexts/productSelectForShowing";


const Slider = () => {

    const languageContext = useContext(LanguageSelectorContext);

    if(!languageContext){
        throw 'error languageContext';
    }

    type sliderDataParams = {
        tittle: languageParams;
        products: productParams[];
        changingTime: number;
    };
    
    type languageParams = {
        english: string,
        arabic: string
    }
    
    const [sliderData, setSliderData] = useState<sliderDataParams>();

    useEffect(() => {
        const fetchData = async() => {
            const data = await getSliderData();
            console.log(data);
            
            setSliderData(data);
        }
        fetchData()
    }, [])

    const StyleSection:CSSProperties = {
        // backgroundColor: 'var(--white)', 
        width: '100%', 
        height: 'auto',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 0,
        paddingTop: window.innerWidth > 800 ? 'calc(var(--extra-large-margin)*2)' : 'var(--extra-large-margin)',
    }
    const styleDiv:CSSProperties = {
        width: '90vw',
        height: 'auto',
        overflowX: 'hidden',
        marginTop: 'var(--extra-large-margin)',
        position: 'relative',
        borderRadius: '25px',
        backgroundColor: 'var(--white-almost-transparnt)',
    }
    const styleH2: CSSProperties = {
        color: 'var(--black)',
    } 
    
    return(
        <section style={StyleSection}>
            <h2 style={styleH2}>{languageContext.activeLanguage == "english" ?
                sliderData?.tittle.english
                : languageContext.activeLanguage == "arabic" ?
                sliderData?.tittle.arabic
                : sliderData?.tittle.english
            }</h2>
            <div style={styleDiv}> 
                {sliderData && <Slides slideBarData={sliderData} />}
            </div>
        </section>
        
    )
}
export default Slider;