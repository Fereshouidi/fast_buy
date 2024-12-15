'use client';
import englist from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CSSProperties, useContext } from 'react';
import { productParams } from "@/app/contexts/productSelectForShowing";



const Color = ({product}: {product: productParams | undefined}) => {

    const languageSelectorContext = useContext(LanguageSelectorContext);

    
    const style: CSSProperties = {
        //width: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: 'var(--large-margin)',
        fontSize: 'var(--big-size)',
        fontWeight: '200',
        color: 'var(--black)'

    }
    const styleColorDiv: CSSProperties = {
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        backgroundColor: product?.color,
        margin: '0 var(--medium-margin)',
    }

    return (
        <div style={style} id="color"> 

            <span>{
                languageSelectorContext?.activeLanguage == 'english' ? 
                    englist.colorW + ' : '
                : languageSelectorContext?.activeLanguage == 'arabic' ? 
                arabic.colorW + ' : '
                : englist.colorW + ' : '
            }</span>
            
            <div style={styleColorDiv}></div>

        </div>
    )
}
export default Color;
















// <div id="color"> 
//             <h4>{
//                 languageSelectorContext?.activeLanguage == 'english' ?
//                 englist.colorW + '  :'
//                 : languageSelectorContext?.activeLanguage == 'arabic' ?
//                 arabic.colorW + '  :'
//                 : englist.colorW + '  :'
//             }</h4>

//             <div>{
//                 product?.colors && product.colors.map((color) =>{
//                     return <div style={{...styleColorDiv, backgroundColor: color}}></div>
//                 })    
//             }</div>
//         </div>