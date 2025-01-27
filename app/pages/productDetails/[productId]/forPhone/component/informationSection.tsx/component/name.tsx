'use client';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CSSProperties, useContext, useEffect, useState } from 'react';
import { productParams } from "@/app/contexts/productSelectForShowing";


const Name = ({product}: {product: productParams | undefined}) => {


    const languageSelectorContext = useContext(LanguageSelectorContext);

    const [name, setName] = useState<string>('');

    useEffect(() => {
        if(product?.name){
            if(languageSelectorContext?.activeLanguage == 'english'){
                setName(product?.name?.english?? '')
            }else if(languageSelectorContext?.activeLanguage == 'arabic'){
                setName(product?.name.arabic)
            }else{
                setName(product?.name?.english?? '')
            }
        }else{
            setName('')
        }
    }, [product, languageSelectorContext])
    

    const style: CSSProperties = {
        width: '100%',
        margin: 'var(--medium-margin) 0',
    }
    const styleName: CSSProperties = {
        width: '100%',
        color: "var(--black)",
        fontSize: 'var(--big-size)',
        fontWeight: '600',

    }

    return (
        <div style={style} id="name-div">
            <p style={styleName}>{name.length > 30 ? name.slice(0, 30) + '...' : name}</p>
        </div>
    )
}
export default Name;