'use client';
import ReactStars from "react-stars";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CSSProperties, useContext } from "react";
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';

const TotalRating = ({product}: {product: productParams | undefined}) => {

    const companyInformation = useContext(CompanyInformationContext);
    const activeLanguage = useContext(LanguageSelectorContext)?.activeLanguage;

    if(!product){
        return;
    }

    const style: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        margin: 'var(--large-margin)',
        fontSize: 'calc(var(--big-size)/1.2)',
        fontWeight: '400',
        color: 'var(--black)'

    }
    const styleSpan: CSSProperties = {
        marginRight: activeLanguage != 'arabic' ? 'var(--large-margin)' : '',
        marginLeft: activeLanguage != 'arabic' ? '' : 'var(--large-margin)',
    }

    return (
        <div style={style}>
            <span style={styleSpan}>{
                activeLanguage == 'english' ?
                    english.EvaluationW + ' : '
                : activeLanguage == 'arabic' ?
                    arabic.EvaluationW + ' : '
                : english.EvaluationW
            }</span>

            <ReactStars
                count={5}
                size={24} 
                value={product.totalRating}
                edit={false} 
                color2={`${companyInformation?.primaryColor}`} 
                className='react-stars'
            />
        </div>
    )
}
export default TotalRating;