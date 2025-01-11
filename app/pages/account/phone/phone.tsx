'use client';

import { CustomerDataParams } from "@/app/contexts/customerData";
import { CSSProperties, useContext } from "react";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";

type params = {
    customer: CustomerDataParams | undefined;
    setCustomer: (value: CustomerDataParams) => void

}

const Phone = ({customer, setCustomer}: params) => {

    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;

    const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (customer) {
            setCustomer({
                ...customer,
                phone: Number(event.target.value)
            })
        }         
    }

    // const style: CSSProperties = {
    //     flex: '1 1 30%',
    //     backgroundColor: 'var(--white)',
    //     borderRadius: '20px',
    //     border: '0.02px solid var(--ashen-semi-transparent)',
    //     fontWeight: '100',
    //     opacity: 0.7
    // }
    const styleH3: CSSProperties = {
        width: '100%',
        padding: window.innerWidth > 800 ? 'var(--large-padding)' : 'var(--medium-padding)',
        borderBottom: '0.02px solid var(--ashen-semi-transparent)',
        opacity: 0.7

    }
    const styleContainer: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: window.innerWidth > 800 ? 'var(--large-padding)' : 'var(--medium-padding)',

    }
    const styleP: CSSProperties = {
        fontSize: 'var(--small-size)',
        padding: window.innerWidth > 800 ? 'var(--medium-padding)' : 'var(--medium-padding)',
        opacity: 1
    }
    const styleInput: CSSProperties = {
        padding: window.innerWidth > 800 ? 'var(--medium-padding)' : 'var(--small-padding)',
        outline: 'none',
        border: 'none',
        borderBottom: '0.02px solid var(--ashen-semi-transparent)',
        minWidth: '80%',
        borderRadius: ' 0 0 10px 0',
        opacity: 0.9
    }

    return (
        <div className="item">

            <h4 style={styleH3}>{activeLanguage?.PhoneNumberW}</h4>

            <div style={styleContainer}>
                <p style={styleP}>{activeLanguage?.updatePhoneP +' : '}</p>
                <input type="phone" 
                    defaultValue={customer?.phone} 
                    style={styleInput} 
                    placeholder={activeLanguage?.PhoneNumberW + " ..."}
                    onChange={(e) => handlePhone(e)}
                />
            </div>

        </div>
    )
}
export default Phone;