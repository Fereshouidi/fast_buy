'use client';

import { CustomerDataParams } from "@/app/contexts/customerData";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { CSSProperties } from "react";

type Params = {
    customer: CustomerDataParams | undefined,
    setCustomer: (value: CustomerDataParams) => void;
    shoppingCart: shoppingCartParams | undefined
    setShoppingCart: (value: shoppingCartParams) => void;
}
const InputPhoneNumber = ({customer, setCustomer}: Params) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (customer) {
            setCustomer({
                ...customer,
                phone: parseInt(event.target.value )
            })
        }
    }

    const style: CSSProperties = {
        width: '100%',
    }
    const styleInput: CSSProperties = {
        border: `0.2px solid var(--ashen)`,
        outline: 'none',
        padding: 'var(--medium-padding)',
        borderRadius: '50px',
        width: '100%',
    }
    return (
        <div style={style}>
            <input 
                type="phone" 
                placeholder="phone number ..." 
                style={styleInput} 
                onChange={(event) => handleChange(event)}
            />
        </div>
    )
}
export default InputPhoneNumber;