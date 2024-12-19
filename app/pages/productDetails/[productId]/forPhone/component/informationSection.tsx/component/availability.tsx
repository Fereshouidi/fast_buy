'use client';
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CSSProperties, useContext } from 'react';
import { productParams } from "@/app/contexts/productSelectForShowing";


const Availablity = ({product}: {product: productParams | undefined}) => {

    const languageSelectorContext = useContext(LanguageSelectorContext);
    const isAvailable = () => {
        if( product && product.quantity > 0){
            return true;
        }else{
            return false;
        }
    }

    const style: CSSProperties = {
        //width: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: 'var(--large-margin)',
        fontSize: 'calc(var(--big-size)/1.2)',
        fontWeight: '200',
        color: 'var(--black)'

    }
    const styleStatus: CSSProperties = {
        color: isAvailable() ? 'green' : 'red',
        margin: '0 var(--large-margin)',
    }
    
    return (
        <div style={style} id="availability-div">

            <span>{
                languageSelectorContext?.activeLanguage == 'english' ? 
                    english.availabilityW + ' : '
                : languageSelectorContext?.activeLanguage == 'arabic' ? 
                arabic.availabilityW + ' : '
                : english.availabilityW + ' : '
            }</span>

            {isAvailable() ? <span className='status' style={styleStatus}>{
                languageSelectorContext?.activeLanguage == 'english' ? 
                    english.availableW 
                : languageSelectorContext?.activeLanguage == 'arabic' ? 
                arabic.availableW 
                : english.availableW 
                }</span> 
            
                : <span className='status' style={styleStatus}>{
                    languageSelectorContext?.activeLanguage == 'english' ? 
                        english.notAvailableW 
                    : languageSelectorContext?.activeLanguage == 'arabic' ? 
                    arabic.notAvailableW 
                    : english.notAvailableW 
                }</span> 
            
            }
            

        </div>
    )
}
export default Availablity;