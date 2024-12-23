'use client';
import englist from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { ChangeEvent, CSSProperties, useContext } from 'react';
import { productParams } from "@/app/contexts/productSelectForShowing";
import { purchaseParams } from '@/app/contexts/purchaseData';

type Params = {
    product: productParams | undefined,
    purchaseData: purchaseParams | undefined,
    setPurchaseData: (value: purchaseParams) => void
}
const Quantity = ({product, purchaseData, setPurchaseData}: Params) => {

    const languageSelectorContext = useContext(LanguageSelectorContext);

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        if(purchaseData && product?.price ){
            setPurchaseData({
                ...purchaseData, 
                quantity: parseInt(event.target.value),
                totalPrice: product?.discount ? 
                    product.discount.newPrice * parseInt(event.target.value) : 
                    product?.price * parseInt(event.target.value) 
            })            
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
    const styleColorDiv: CSSProperties = {
        width: 'var(--long-width)',
        height: '30px',
        border: '1px solid var(--ashen)',
        backgroundColor: 'var(--almost-white)',
        color: 'var(--almost-black)',
        margin: '0 var(--large-margin)',
    }
    
    return (
        <div style={style} id="selectQuantitue-div">

            <span>{
                languageSelectorContext?.activeLanguage == 'english' ? 
                    englist.quantity + ' : '
                : languageSelectorContext?.activeLanguage == 'arabic' ? 
                arabic.quantity + ' : '
                : englist.quantity + ' : '
            }</span>

            <select style={styleColorDiv} id="selectQuantitue" onChange={(event) => handleChange(event)}>
                {Array.from({ length: product?.quantity? product?.quantity : 0 }, (_, count) => (
                    <option key={count} value={count + 1}>{count + 1}</option>
                ))}
            </select>

        </div>
    )
}
export default Quantity;