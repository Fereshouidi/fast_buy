'use client';

import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { CSSProperties } from "react";

const CartDetail = ({shoppingCart}: {shoppingCart: shoppingCartParams | undefined}) => {

    console.log(shoppingCart);
    
    if(typeof window == 'undefined'){
        return;
    }

    const style: CSSProperties = {
        width: window.innerWidth > 800 ? '50%' : '100%',
        backgroundColor : 'red'
    }
    return (
        <div style={style}>cart detail</div>
    )
}
export default CartDetail;