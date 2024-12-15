'use client';
import englist from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CSSProperties, useContext } from 'react';
import { productParams } from "@/app/contexts/productSelectForShowing";
import PurchaseIcon from '@/app/svg/icons/purchase';


const PutInPurchaseBTN = ({product}: {product: productParams | undefined}) => {

    const languageSelectorContext = useContext(LanguageSelectorContext);

    const style: CSSProperties = {
        width: 'var(--long-width)',
        height: 'calc(var(--long-width) /4)',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'var(--large-margin)',
        backgroundColor: 'var(--black)',
        color: 'var(--white)'    
    }
    const stylePrice: CSSProperties = {
        margin: 'var(--small-margin)', 
    }
    
    return (
        <div style={style}>
            <PurchaseIcon/>
            <span style={stylePrice} id="put_in-purchase">
                {languageSelectorContext?.activeLanguage == 'englist' ? englist.putInPurchase 
                :languageSelectorContext?.activeLanguage == 'arabic' ? arabic.putInPurchase
                :englist.putInPurchase 
                }
            </span>
        </div>
    )
}
export default PutInPurchaseBTN;