'use client';

import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { CSSProperties, useContext } from "react";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";

const CartDetail = ({shoppingCart}: {shoppingCart: shoppingCartParams | undefined}) => {

    console.log(shoppingCart);
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    
    if(typeof window == 'undefined'){
        return;
    }

    const style: CSSProperties = {
        width: window.innerWidth > 800 ? '50%' : '100%',
        backgroundColor : 'red'
    }
    return (
        <div style={style}>
            <div className="container">
                <h6>{activeLanguage?.CompleteYourPurchaseW}</h6>
                <div>
                    <h5>Purchases price</h5>
                    <span>{shoppingCart?.totalPrice}</span>
                </div>
            </div>
        </div>
    )
}
export default CartDetail;