'use client';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CSSProperties, useContext, useEffect, useState } from 'react';
import { productParams } from "@/app/contexts/productSelectForShowing";

const Description = ({product}: {product: productParams | undefined}) => {

    const languageSelectorContext = useContext(LanguageSelectorContext);

    const [description, setDescription] = useState<string>();

    useEffect(() => {
        if(product?.description){
            if(languageSelectorContext?.activeLanguage == 'english'){
                setDescription(product?.description.english)
            }else if(languageSelectorContext?.activeLanguage == 'arabic'){
                setDescription(product?.description.arabic)
            }else{
                setDescription(product?.description.english)
            }
        }else{
            setDescription('')
        }
    }, [product, languageSelectorContext])
    
    const style: CSSProperties = {
        width: '100%',
    }
    const styleName: CSSProperties = {
        width: '100%',
        color: "var(--black)",
        fontSize: 'var(--small-size)',
        fontWeight: '100',
        opacity: '0.9'
    }
    
    return (
        <div style={style} id="description-div">
            <p style={styleName}>{description}</p>
        </div>
    )
}
export default Description;