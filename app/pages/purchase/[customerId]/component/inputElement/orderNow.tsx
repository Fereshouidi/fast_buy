'use client';

import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { CustomerDataParams } from "@/app/contexts/customerData";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { addOrder } from "@/app/crud";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, useContext } from "react";


type Params = {
    customer: CustomerDataParams | undefined,
    setCustomer: (value: CustomerDataParams) => void;
    shoppingCart: shoppingCartParams | undefined
    setShoppingCart: (value: shoppingCartParams) => void;
}
const OrderNow = ({customer, shoppingCart, setShoppingCart}: Params) => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const companyInformation = useContext(CompanyInformationContext);

    const handleClick = async() => {

        if (customer?.adress && customer?.phone) {
            
            await addOrder({
                ...shoppingCart,
                status: 'processing',
                customer: customer
            })
            setShoppingCart({})
            
        }
        
    }

    const style :CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: window.innerWidth > 500 ? 'var(--primary-size)' : 'var(--small-size)',
    }
    const styleBTN :CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        position: 'relative',
        backgroundColor: customer?.adress && customer.phone ? companyInformation?.primaryColor : 'var(--ashen-semi-transparent)',
        padding: 'var(--medium-padding) var(--medium-padding)',
        fontSize: 'calc(var(--primary-size) /1.3)',
        color: 'white',
    }
    const styleIcon :CSSProperties = {
        margin: '0 var(--small-margin)'
    }
    return (
        <div className="item" style={style}>
            <div style={styleBTN} onClick={handleClick}>
                <FontAwesomeIcon icon={faTruck} style={styleIcon}/>
                <h3>{activeLanguage?.orderNowW}</h3>
            </div>
        </div>
    )
}
export default OrderNow;