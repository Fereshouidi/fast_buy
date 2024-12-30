'use client';

import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { CSSProperties, useContext } from "react";

type parmas = {
    most3ProductExpensive: productParams[] | undefined
    style: CSSProperties
}
const ImagesDiv = ({most3ProductExpensive, style}: parmas) => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;

    const styleImage: CSSProperties = {
        width: 'calc(var(--primary-width) /1.5)',
        height: 'calc(var(--primary-width) /1.5)',
        marginRight: activeLanguage?.activeLanguage == 'arabic'? '' : '-15px',
        marginLeft: activeLanguage?.activeLanguage == 'arabic'? '-15px' : '',
        borderRadius: '50px',
        backgroundColor: 'var(--ashen)',
    }
    return (
        <div style={style}>{
            most3ProductExpensive?.map((product) => {
                return <img key={product._id} src={product?.imagePrincipal} alt="" style={styleImage} />
            })
        }</div>
    )
}
export default ImagesDiv;