'use client';

import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { CSSProperties, useContext, useEffect, useState } from "react";
import { discountCodeParams } from "@/app/contexts/discountCode";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";

type Params = {
    shoppingCart: shoppingCartParams | undefined
    setShoppingCart: (value: shoppingCartParams) => void;
    allDiscountCodes: discountCodeParams[],
    setAllDiscountCodes: (value: discountCodeParams[]) => void
    totalPriceChange: 'byDiscount' | 'byDiscountPercent' | undefined, 
    setTotalPriceChange: (value: 'byDiscount' | 'byDiscountPercent' | undefined) => void
}
const DiscountCode = ({shoppingCart, setShoppingCart, allDiscountCodes, setAllDiscountCodes, totalPriceChange, setTotalPriceChange}: Params) => {


    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const companyInformation = useContext(CompanyInformationContext);
    const [highestDiscount, setHighestDiscount] = useState<string>('');
    const [highestDiscountPercent, setHighestDiscountPercent] = useState<string>('');
    const [isCodeUsed, setIsCodeUsed] = useState<boolean>(false);

    useEffect(() => {
        const allDiscountsValue = [];
        const allDiscountsPercentValue = [];

        for (let index = 0 ; index < allDiscountCodes?.length ; index++){

            const discount = allDiscountCodes[index];
            if(discount.code && discount.discount) {
                allDiscountsValue.push( discount.discount);
            }
            if(discount.code && discount.discountPercent) {
                allDiscountsPercentValue.push( discount.discountPercent)
            }

        }
        setHighestDiscount(Math.max(...allDiscountsValue) + (companyInformation?.currencyType || ''));
        setHighestDiscountPercent(Math.max(...allDiscountsPercentValue) + '% ')
    }, [])

    // useEffect(() => {
    //     calcTotalPrice(dis)
    // }, [totalPriceChange])


    const calcTotalPrice = (discount: number, discountType: 'discount' | 'discountPercent') => {

        if (shoppingCart?.totalPrice && discountType == 'discount') {

            setShoppingCart({
                ...shoppingCart,
                totalPrice: shoppingCart?.totalPrice - discount
            })


        } else if (shoppingCart?.totalPrice && discountType == 'discountPercent') {
            setShoppingCart({
                ...shoppingCart,
                totalPrice: shoppingCart?.totalPrice - (shoppingCart?.totalPrice * (discount / 100)),
            })

        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        if(!shoppingCart?.totalPrice){
            return;
        }

        const inputValue = event.target.value;

        const allDiscountsValue = [];
        const allDiscountsPercentValue = [];

        for (let index = 0 ; index < allDiscountCodes?.length ; index++){

            const discount = allDiscountCodes[index];
            if(inputValue == discount.code && discount.discount) {

                if(!isCodeUsed) {
                    calcTotalPrice(discount.discount, 'discount')
                    setIsCodeUsed(true)
                }
                

                allDiscountsValue.push( discount.discount)

            } else if(inputValue == discount.code && discount.discountPercent) {

                if (!isCodeUsed) {
                    calcTotalPrice(discount.discountPercent, 'discountPercent')
                    setIsCodeUsed(true)
                }

                allDiscountsPercentValue.push(discount.discountPercent)

            }
            
        }
        setHighestDiscount(highestDiscount);
        setHighestDiscountPercent(highestDiscountPercent)
        
    }    
    
    const style :CSSProperties = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'var(--small-margin)',
    }
    const styleP :CSSProperties = {
        fontSize: 'calc(var(--small-size) / 1.2)',
        opacity: '0.7',
        margin: 'var(--small-margin)',
        color: 'var(--ashen)'
    }
    const styleInputDiv :CSSProperties = {
        borderRadius: '20px',
        paddingTop: '5px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
    }
    const styleH6 :CSSProperties = {
        top: 0,
        position: 'absolute',
        margin: '0 var(--medium-margin)',
        padding: '0 var(--medium-padding)',
        backgroundColor: 'var(--white)',

    }
    const styleInput :CSSProperties = {
        width: '100%',
        height: '100%',
        outline: 'none',
        border: `1px solid ${companyInformation?.primaryColor}`,
        borderRadius: '20px',
        backgroundColor: 'var(--white)',
        padding: '0 var(--large-padding)',
        color: 'var(--black)'
    }
    return (
        <div  style={style}>
            <p style={styleP}>
                {activeLanguage?.discountCodeForChoppingCart?.p1}
                <span>{highestDiscount?? highestDiscountPercent}</span> 
                {activeLanguage?.discountCodeForChoppingCart?.p2}
            </p>
            <div style={styleInputDiv} className="item input-text"> 
                <h6 style={styleH6}>{activeLanguage?.discountCodeW}</h6>
                <input type="text" style={styleInput} placeholder="..." onChange={handleChange}/>
            </div>
        </div>
    )
}
export default DiscountCode;