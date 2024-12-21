'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { purchaseParams } from "@/app/contexts/purchaseData";
import { CSSProperties, useContext } from "react";

type params = {
    shoppingCart: shoppingCartParams | undefined
    purchase: purchaseParams | undefined
}
const Quantity = ({shoppingCart, purchase}: params) => {

    const primaryColor = useContext(CompanyInformationContext)?.primaryColor;

    // const products = shoppingCart?.products;
    // console.log(shoppingCart);
    

    if(!shoppingCart || !purchase){
        return;
    }

    const style: CSSProperties = {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center'
    }
    const style_plus_minus: CSSProperties = {
        backgroundColor: primaryColor,
        color: 'white',
        padding: 'var(--small-padding)',
        margin: '0 var(--large-margin)',
        borderRadius: '10px'
    }
    return (
        <div style={style}>
            <FontAwesomeIcon icon={faMinus} style={style_plus_minus}/>
            <span>{purchase.quantity}</span>
            <FontAwesomeIcon icon={faPlus} style={style_plus_minus}/>
        </div>
    )
}
export default Quantity;