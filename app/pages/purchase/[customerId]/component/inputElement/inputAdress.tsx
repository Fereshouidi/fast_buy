'use client';

import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CustomerDataParams } from "@/app/contexts/customerData";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { CSSProperties, useContext } from "react";


type Params = {
    customer: CustomerDataParams | undefined,
    setCustomer: (value: CustomerDataParams) => void;
    shoppingCart: shoppingCartParams | undefined
    setShoppingCart: (value: shoppingCartParams) => void;
}
const InputAdress = ({customer, setCustomer}: Params) => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (customer) {
            setCustomer({
                ...customer,
                adress: event.target.value
            })
        }
    }

    const style: CSSProperties = {
        width: '100%',
        margin: 'var(--small-margin) 0'
    }
    const styleInput: CSSProperties = {
        border: `0.2px solid var(--ashen)`,
        outline: 'none',
        padding: 'var(--medium-padding)',
        borderRadius: '50px',
        width: '100%',
        backgroundColor: 'var(--almost-white)',
        color: 'var(--black)'
    }
    return (
        <div style={style}>
            <input 
                type="text" 
                placeholder={activeLanguage?.fullAdressW + '...'}
                style={styleInput} 
                onChange={(event) => handleChange(event)}
            />
        </div>
    )
}
export default InputAdress;