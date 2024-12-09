'use client';

import { CSSProperties, useContext, useEffect, useState } from "react";
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";

type discountParams = {
    createdAt: Date,
    discountSticker: string,
    newPrice: number,
    oldPrice: number,
    percentage: number,
    startOfDiscount: Date, 
    endOfDiscount: Date,
};

const TimeLeft = ({product} : {product: discountParams}) => {

    const [timeLeft, setTimeLeft] = useState<string>();
    const [percentage , setPercentage ] = useState<number>(0);
    const [countColor , setCountColor ] = useState<string>('');
    const [activeLanguage , setActiveLanguage ] = useState(english);

    const languageSelectorContext = useContext(LanguageSelectorContext)
    if(!languageSelectorContext){
        throw 'error languageSelectorContext !'
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

    const calcTimeLeft = (end: Date, start: Date) => {

        const now = new Date();
        const endDate = new Date(end);
        const startDate = new Date(start);
    
        if ( isNaN(endDate.getTime()) || isNaN(startDate.getTime())) {
            return;
        }
    
        const timeLeft = endDate.getTime() - now.getTime();
    
        if (timeLeft <= 0) {
            return 'No time left';
        }
    
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
    
        let timeLeftString = '';
        if (days > 0) {
            timeLeftString += days + ` ${days > 1 ? activeLanguage.time.dayW.plural : activeLanguage.time.dayW.singular} `;
        }
        if (hours > 0) {
            timeLeftString += hours +` ${hours > 1 ? activeLanguage.time.hourW.plural : activeLanguage.time.hourW.singular} `;
        }
        if (minutes > 0) {
            timeLeftString += minutes +` ${minutes > 1 ? activeLanguage.time.muniteW.plural : activeLanguage.time.muniteW.singular} `;
        }
        if (seconds > 0) {
            timeLeftString += seconds +` ${seconds > 1 ? activeLanguage.time.secondW.plural : activeLanguage.time.secondW.singular} `;
        }
        
    
        const percentage = (timeLeft * 100) / (endDate.getTime() - startDate.getTime());
        setPercentage(percentage);
        getGradientColor(percentage)


        return timeLeftString.trim() || 'No time left';
    };
    
    const getGradientColor = (percentage: number) => {
        let red = 0;
        let green = 0;
      
        if (percentage > 70) {
          red = Math.floor((255 * (100 - percentage)) / 30); 
          green = 255; 
        } else if (percentage >= 30 && percentage <= 70) {
          red = 255; 
          green = Math.floor((255 * (percentage - 30)) / 40); 
        } else {
          red = 255; 
          green = Math.floor((255 * percentage) / 30); 
        }
      
        const color = `rgb(${red}, ${green}, 0)`;
        setCountColor(color); 
      };
      
      useEffect(() => {
        const interval = setInterval(() => {
          setTimeLeft(() => {
            return calcTimeLeft(product.endOfDiscount, product.startOfDiscount);
          });
        }, 1000);
      
        return () => clearInterval(interval); 
      }, [product.endOfDiscount, product.startOfDiscount]);
      


    const styleDivParent: CSSProperties = {
        //backgroundColor: 'red',
        marginBottom: 'calc(var(--large-margin)/1.5)',
        width: '100%', 
        height: 'auto',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
    }
    const styleSpan: CSSProperties = {
        margin: '0',
        padding: '0',
        width: '90%', 
        height: 'var(--half-height)',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'row',
        fontSize: 'calc(var(--small-size)/1.5)',
        color: 'var(--almost-black)',
        opacity: '0.7',
        whiteSpace: 'normal',
        wordWrap: 'break-word', 
        textAlign: 'center',
    }
    const styleCountdownDiv : CSSProperties = {
        backgroundColor: 'var(--almost-white)',
        width: '50%', 
        height: 'calc(var(--short-height)/2)',
        borderRadius: '50px',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
    }
    const styleCount : CSSProperties = {
        background: countColor ,
        width: `${percentage}%`, 
        height: '100%',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
    }


    return(
        <div style={styleDivParent}>
            <p style={styleSpan} id="time-left">{timeLeft}</p>
            <div style={styleCountdownDiv}>
                <div style={styleCount}></div>
            </div>
        </div>
    )
}
export default TimeLeft;