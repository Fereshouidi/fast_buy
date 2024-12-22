'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CSSProperties, useContext, useState } from "react";
import { deletePurchaseById } from "@/app/crud";
import { purchaseParams } from "@/app/contexts/purchaseData";
import { LoadingIconContext } from "@/app/contexts/loadingIcon";
import { BannersContext } from "@/app/contexts/banners";
import { BannerContext } from "@/app/contexts/bannerForEverything";

type params = {
    shoppingCart: shoppingCartParams | undefined
    setShoppingCart: (value: shoppingCartParams) => void;
    purchase: purchaseParams | undefined
}
const Trash = ({shoppingCart, setShoppingCart, purchase}: params) => {

    const setLoadingIcon = useContext(LoadingIconContext)?.setExist;   
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const setBanner = useContext(BannerContext)?.setBanner;
    const [iconColor, setIconColor] = useState<string>('red');

    if(!setLoadingIcon || !setBanner ){
        return;
    }

    const deletePurchase = async () => {

        setIconColor('rgb(201, 1, 1)')
        setLoadingIcon(true);
        const updatedCustomerData = await deletePurchaseById(purchase?._id);

        if(typeof window != 'undefined'){

            setLoadingIcon(false);

            setBanner(true, activeLanguage?.productRemovedFromShoppingCart, 'success');

            localStorage.setItem('customerData', JSON.stringify(updatedCustomerData))

            const updateShoppingCart = {
                ...shoppingCart,
                purchases: shoppingCart?.purchases?.filter(item => item !== purchase)
            };
            
            setShoppingCart(updateShoppingCart);
            
            
        }
    }

    if(typeof window == 'undefined'){
        return;
    }
    const style: CSSProperties = {
        color: iconColor,
        fontSize: window.innerWidth > 1000 ? 'var(--primary-size)' : 'var(--small-size)',
        cursor: "pointer",

    }
    return (
        <div 
            className="icon" 
            style={style} 
            onClick={deletePurchase}
        >
            <FontAwesomeIcon icon={faTrash}/> {activeLanguage?.deleteW}
        </div>
    )
}
export default Trash;


